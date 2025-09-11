import { useState } from "react";
import RestaurantItems from "./RestaurantItems";
import RestaurantTopPicksMenuItems from "./RestaurantTopPicksMenuItems";

export default function RestaurantMenuItems({ restaurantItems, vegOrNonVeg }) {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <div className="w-full">
        <div className="flex justify-between w-full">
          <h1 className="text-xl font-extrabold mb-5 mt-3">
            {restaurantItems?.title}
            {restaurantItems?.itemCards?.length
              ? ` (${restaurantItems?.itemCards?.length})`
              : ""}
          </h1>

          <button
            className="text-xl hover:cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "▲" : "▼"}
          </button>
        </div>
        <hr className="border-3 border-gray-300 my-5 w-[105%] -translate-x-1/2 relative left-1/2" />
      </div>
    );
  }

  //   Handle Categories
  if (restaurantItems?.categories) {
    // console.log("Categories " + restaurantItems?.title);
    return (
      <div>
        <div className="flex justify-between w-full">
          <h1 className="text-xl font-extrabold mb-5 mt-3">
            {restaurantItems?.title}
          </h1>

          <button
            className="text-xl hover:cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "▲" : "▼"}
          </button>
        </div>

        {restaurantItems?.categories?.map((items) => (
          <RestaurantMenuItems
            key={items?.title}
            restaurantItems={items}
          ></RestaurantMenuItems>
        ))}
      </div>
    );
  }

  //   Handle Top Picks
  if (restaurantItems.title === "Top Picks") {
    // Handle VEG
    if (vegOrNonVeg === "veg") {
      {
        console.log("in veg");
      }
      return (
        <div>
          <h1 className="text-xl font-extrabold mb-5">
            {restaurantItems?.title}
          </h1>

          <div className="mb-10 flex flex-wrap w-[100%] justify-between gap-10 mx-auto">
            {restaurantItems?.carousel
              ?.filter(
                (items) =>
                  items?.dish?.info?.itemAttribute?.vegClassifier === "VEG"
              )
              .map((items) => (
                <RestaurantTopPicksMenuItems
                  key={items?.bannerId}
                  topPickItems={items}
                ></RestaurantTopPicksMenuItems>
              ))}
          </div>
        </div>
      );
    }

    // Handle VEG
    if (vegOrNonVeg === "non-veg") {
      return (
        <div>
          <h1 className="text-xl font-extrabold mb-5">
            {restaurantItems?.title}
          </h1>

          <div className="mb-10 flex flex-wrap w-[100%] justify-between gap-10 mx-auto">
            {restaurantItems?.carousel
              ?.filter(
                (items) =>
                  items?.dish?.info?.itemAttribute?.vegClassifier === "NONVEG"
              )
              .map((items) => (
                <RestaurantTopPicksMenuItems
                  key={items?.bannerId}
                  topPickItems={items}
                ></RestaurantTopPicksMenuItems>
              ))}
          </div>
        </div>
      );
    }

    // console.log("Top Picks");
    return (
      <div>
        <h1 className="text-xl font-extrabold mb-5">
          {restaurantItems?.title}
        </h1>

        <div className="mb-10 flex flex-wrap w-[100%] justify-between gap-10 mx-auto">
          {restaurantItems?.carousel?.map((items) => (
            <RestaurantTopPicksMenuItems
              key={items?.bannerId}
              topPickItems={items}
              vegOrNonVeg={vegOrNonVeg}
            ></RestaurantTopPicksMenuItems>
          ))}
        </div>
      </div>
    );
  }

  //   Handle VEG
  if (vegOrNonVeg === "veg") {
    return (
      <div>
        {/* {console.log("Items " + restaurantItems?.title)} */}
        <div className="flex justify-between w-full">
          <h1 className="text-xl font-extrabold mb-5 mt-3">
            {restaurantItems?.title}
            {restaurantItems?.itemCards?.length
              ? ` (${restaurantItems?.itemCards?.length})`
              : ""}
          </h1>

          <button
            className="text-xl hover:cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "▲" : "▼"}
          </button>
        </div>
        <div>
          {restaurantItems?.itemCards
            ?.filter(
              (items) =>
                items?.card?.info?.itemAttribute?.vegClassifier === "VEG"
            )
            .map((items) => (
              <RestaurantItems
                key={items?.card?.info?.id}
                items={items?.card?.info}
              />
            ))}
        </div>
        <hr className="border-3 border-gray-300 my-5 w-[105%] -translate-x-1/2 relative left-1/2" />
      </div>
    );
  }

  //   Handle Non-VEG
  if (vegOrNonVeg === "non-veg") {
    return (
      <div>
        {/* {console.log("Items " + restaurantItems?.title)} */}
        <div className="flex justify-between w-full">
          <h1 className="text-xl font-extrabold mb-5 mt-3">
            {restaurantItems?.title}
            {restaurantItems?.itemCards?.length
              ? ` (${restaurantItems?.itemCards?.length})`
              : ""}
          </h1>

          <button
            className="text-xl hover:cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "▲" : "▼"}
          </button>
        </div>
        <div>
          {restaurantItems?.itemCards
            ?.filter(
              (items) =>
                items?.card?.info?.itemAttribute?.vegClassifier === "NONVEG"
            )
            .map((items) => (
              <RestaurantItems
                key={items?.card?.info?.id}
                items={items?.card?.info}
              />
            ))}
        </div>
        <hr className="border-3 border-gray-300 my-5 w-[105%] -translate-x-1/2 relative left-1/2" />
      </div>
    );
  }

  //   Handle All
  return (
    <div>
      {/* {console.log("Items " + restaurantItems?.title)} */}
      <div className="flex justify-between w-full">
        <h1 className="text-xl font-extrabold mb-5 mt-3">
          {restaurantItems?.title}
          {restaurantItems?.itemCards?.length
            ? ` (${restaurantItems?.itemCards?.length})`
            : ""}
        </h1>

        <button
          className="text-xl hover:cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "▲" : "▼"}
        </button>
      </div>
      <div>
        {restaurantItems?.itemCards?.map((items) => (
          <RestaurantItems
            key={items?.card?.info?.id}
            items={items?.card?.info}
          />
        ))}
      </div>
      <hr className="border-3 border-gray-300 my-5 w-[105%] -translate-x-1/2 relative left-1/2" />
    </div>
  );
}
