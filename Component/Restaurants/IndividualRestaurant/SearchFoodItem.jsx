import { useParams } from "react-router";
import { ArrowLeft, Search } from "lucide-react";
import { useEffect, useState } from "react";
import RestaurantItems from "./RestaurantItems";

export default function SearchFoodItem() {
  const { id } = useParams();
  const [food, setFood] = useState("");
  const [searchItems, setSearchItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();

      const requiredItems =
        data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      const allItems = [];

      requiredItems?.forEach((restaurantCard) => {
        const card = restaurantCard?.card?.card;

        if (!card) return;

        if (card?.categories) {
          const title = card.categories.title;
          card.categories.itemCards?.forEach((item) => {
            const info = item.card.info;
            allItems.push({
              title: "categories " + title,
              name: info?.name,
              price: info?.price ? info.price / 100 : "Not Available",
              ratings: info?.ratings ? info.ratings : "Not Available",
              description: info?.description,
              imageId: info?.imageId,
            });
          });
        } else if (card?.title !== "Top Picks") {
          const title = card.title;
          card.itemCards?.forEach((item) => {
            const info = item.card.info;
            allItems.push({
              title,
              name: info?.name,
              price: info?.price ? info.price / 100 : "Not Available",
              ratings: info?.ratings ? info.ratings : "Not Available",
              description: info?.description,
              imageId: info?.imageId,
            });
          });
        }
      });

      setSearchItems(allItems);
    }

    fetchData();
  }, [id]);

  // Filter items 
  const filteredItems =
    food.length >= 2
      ? searchItems.filter((item) =>
          item.name?.toLowerCase().includes(food.toLowerCase())
        )
      : [];

  return (
    <div className="w-[50%] mx-auto my-10">
      {/* Search Input */}
      <div className="relative flex items-center mb-6">
        <ArrowLeft className="absolute left-3 text-gray-500 w-5 h-5" />
        <input
          type="text"
          autoFocus
          placeholder="Search food..."
          value={food}
          onChange={(e) => setFood(e.target.value)}
          className="w-full pl-10 pr-14 py-3 rounded-lg bg-gray-100 text-gray-700 focus:outline-none text-center"
        />
        <Search size={18} className="absolute right-10 text-gray-500" />
      </div>

      {/* Render filtered items */}
      <div className="flex flex-col gap-5">
        {filteredItems.map((item, index) => (
          <RestaurantItems key={index} items={item} />
        ))}
      </div>
    </div>
  );
}
