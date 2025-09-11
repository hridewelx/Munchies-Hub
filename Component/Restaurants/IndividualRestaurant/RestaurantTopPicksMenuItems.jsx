export default function RestaurantTopPicksMenuItems({ topPickItems }) {

  return (
    <div className="relative flex gap-1">
      <img
        className="w-105 h-102 object-cover rounded-2xl"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${topPickItems?.creativeId}`}
        alt={topPickItems?.title}
      />

      <div className="flex justify-between px-5 items-center absolute bottom-3 w-[100%]">
        <div className="text-lg text-white font-bold">
          {topPickItems?.dish?.info
            ? "₹" +
              (topPickItems?.dish?.info?.finalPrice !== undefined
                ? topPickItems.dish.info.finalPrice / 100
                : topPickItems.dish.info.defaultPrice / 100)
            : ""}
        </div>

        <div className="rounded-xl text-lg font-semibold text-green-600 px-5 py-1.5 shadow-md border border-white bg-white hover:cursor-pointer">
          ADD
        </div>
      </div>
    </div>
  );
}
