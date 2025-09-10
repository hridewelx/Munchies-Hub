import RestaurantItems from "./RestaurantItems";

export default function RestaurantMenuItems({restaurantItems}) {

    if(restaurantItems?.categories) {
        <h1 className="text-xl font-extrabold  mb-5">{restaurantItems?.title}</h1>
        return(
            <div>
                {
                    restaurantItems?.categories?.map((items) => <RestaurantMenuItems key={items?.title} restaurantItems={items}></RestaurantMenuItems>)
                }
            </div>
        )
    }


    return(
        <div>
            {/* <hr className="border border-gray-300 my-5" /> */}
            <h1 className="text-xl font-extrabold  mb-5">{restaurantItems?.title + ` (${restaurantItems?.itemCards?.length})`}</h1>
            <div>
                {
                    restaurantItems?.itemCards?.map((items) => <RestaurantItems 
                        key={items?.card?.info?.id} 
                        items={items?.card?.info}
                    />) 
                }
            </div>
            <hr className="border-5 border-gray-300 my-5 w-full" />

        </div>
    )
}