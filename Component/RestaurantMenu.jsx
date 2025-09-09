import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function RestaurantMenu() {
  const { id } = useParams();
  const [individualRestaurantData, setIndividualRestaurantData] = useState();

  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
      const response = await fetch(
        `https://api.allorigins.win/raw?url=${encodeURIComponent(
          `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`
        )}`
      );
      const data = await response.json();
      setIndividualRestaurantData(data);
    }
    fetchData();
  }, []);

  console.log(individualRestaurantData);

  return (
    <div>
      <h1 className="text-4xl text-center">Restaurant Menu</h1>
      <h2 className="mt-10 text-2xl text-center">{id}</h2>
      {/* <h2>{individualRestaurantData}</h2> */}
    </div>
  );
}
