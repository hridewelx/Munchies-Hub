import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Header from "./Header";
import RestaurantMenuItems from "./RestaurantMenuItems";
import { Search } from "lucide-react";

export default function RestaurantMenu() {
  const { id } = useParams();
  const [individualRestaurantData, setIndividualRestaurantData] = useState([]);
  const [headerInfo, setHeaderInfo] = useState(null);
  const [active, setActive] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
      const response = await fetch(proxyServer + swiggyAPI);

      // const response = await fetch(
      //   `https://api.allorigins.win/raw?url=${encodeURIComponent(
      //     `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`
      //   )}`
      // );
      const data = await response.json();

      // const headerInfo = data?.data?.cards[2]?.card?.card?.info;
      let headerInfo = data?.data?.cards?.find(
        (info) =>
          info?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      );
      headerInfo = headerInfo?.card?.card?.info;
      setHeaderInfo(headerInfo);

      const recommendedItems =
        data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const filteredItems = recommendedItems.filter(
        (items) => items?.card?.card?.title
      );
      setIndividualRestaurantData(filteredItems);
    }
    fetchData();
  }, []);

  return (
    <div className="mt-10 w-[50%] mx-auto">
      <Header key={headerInfo?.id} headerInfo={headerInfo} />

      {/* Search Bar */}
      <div className="w-full mx-auto text-center my-10">
        <Link to={`/city/delhi/${id}/search`}>
          <h2 className="text-gray-500 text-sm tracking-[4px] flex items-baseline justify-center gap-2 mb-4">
            <span className="text-gray-400 text-xl">〈</span>
            MENU
            <span className="text-gray-400 text-xl">〉</span>
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for dishes"
              className="w-full pl-10 py-3 rounded-xl bg-gray-100 text-gray-700 hover:cursor-pointer focus:outline-none pr-10 text-center"
            />
            <Search
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
              size={20}
            />
          </div>
        </Link>
      </div>

      <div className="flex items-center gap-3 my-5 px-10">
        <button
          onClick={() => setActive(active === "veg" ? null : "veg")}
          className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
            active === "veg" ? "border-green-500" : "border-gray-400"
          }`}
        >
          <div
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              active === "veg" ? "bg-green-500" : "bg-transparent"
            }`}
          ></div>
        </button>

        <button
          onClick={() => setActive(active === "non-veg" ? null : "non-veg")}
          className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
            active === "non-veg" ? "border-red-500" : "border-gray-400"
          }`}
        >
          <div
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              active === "non-veg" ? "bg-red-500" : "bg-transparent"
            }`}
          ></div>
        </button>

        <span className="px-3 py-1 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-100 cursor-pointer">
          Bestseller
        </span>
        <span className="px-3 py-1 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-100 cursor-pointer">
          Guiltfree
        </span>
      </div>

      <hr className="border-gray-300 mb-5" />

      {individualRestaurantData.map((restaurantData) => (
        <RestaurantMenuItems
          key={restaurantData?.card?.card?.title}
          restaurantItems={restaurantData?.card?.card}
          vegOrNonVeg={active}
        ></RestaurantMenuItems>
      ))}
    </div>
  );
}
