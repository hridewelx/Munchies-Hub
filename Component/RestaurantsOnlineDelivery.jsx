import { useEffect, useState } from "react";
import Shrimmer from "./Shrimmer";
import RestaurantsOnlineDeliveryCards from "./RestaurantsOnlineDeliveryCards"

export default function RestaurantsOnlineDelivery() {

    const[restaurantData, setRestaurantData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const proxyServer = "https://cors-anywhere.herokuapp.com/"
        const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
            const response = await fetch(proxyServer + swiggyAPI);
            const data = await response.json();
            const restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setRestaurantData(restaurants);
        }
        fetchData();
    }, []);
    
    console.log(restaurantData.length);

    return (
        <div className="flex flex-wrap w-[80%] justify-center mx-auto mt-10 gap-10">
            {restaurantData.length > 0 ? (
                restaurantData.map((values) => (<RestaurantsOnlineDeliveryCards key={values.info.id} restData={values} />))
            ) : (
                <Shrimmer></Shrimmer>
            )}
        </div>
    )
}