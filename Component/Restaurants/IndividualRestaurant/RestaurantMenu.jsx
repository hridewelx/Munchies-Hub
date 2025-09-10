import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "./Header";
import RestaurantMenuItems from "./RestaurantMenuItems";

export default function RestaurantMenu() {
  const { id } = useParams();
  const [individualRestaurantData, setIndividualRestaurantData] = useState([]);
  const [headerInfo, setHeaderInfo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.allorigins.win/raw?url=${encodeURIComponent(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`
        )}`
      );
      const data = await response.json();
      const headerInfo = data?.data?.cards[2]?.card?.card?.info;
      setHeaderInfo(headerInfo);
      const recommendedItems = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
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
      
      {individualRestaurantData.map((restaurantData) => (
        <RestaurantMenuItems
          key={restaurantData?.card?.card?.title}
          restaurantItems={restaurantData?.card?.card}
        ></RestaurantMenuItems>
      ))}
    </div>
  );
}
