export default function RestaurantsOnlineDeliveryCards({ restData }) {
  return (
    <div className="mt-10 rounded-2xl shadow-sm hover:shadow-lg hover:scale-95 transition overflow-hidden w-[23%]">
      <div className="relative">
        {/* Image */}
        <img
          className="w-full h-60 object-cover rounded-t-2xl"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            restData?.info?.cloudinaryImageId
          }
          alt={restData?.info?.name}
        />

        {/* Discount Info at Bottom */}
        {restData?.info?.aggregatedDiscountInfoV3?.header && (
          <div className="absolute bottom-0 left-0 pb-3 pl-3 text-3xl font-bold text-white bg-gradient-to-t from-black/80 via-black/50 to-transparent w-full">
            <span>{restData?.info?.aggregatedDiscountInfoV3?.header}</span>
            <span> </span>
            <span>{restData?.info?.aggregatedDiscountInfoV3?.subHeader}</span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="px-3 pt-2 pb-3 flex flex-col gap-1">
        <div className="font-semibold text-gray-900 text-[18px] truncate">
          {restData?.info?.name}
        </div>
        <div className="text-gray-700 font-bold text-[16px] flex items-center gap-2 text-sm">
          <span className="inline-flex items-center gap-1">
            <svg
              className="h-4 w-4 text-green-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
            </svg>
            {restData?.info?.avgRating}
          </span>
          <span className="text-gray-800">•</span>
          <span>{restData?.info?.sla?.slaString}</span>
        </div>
        <div className="text-gray-700 w-[85%] text-[17px] truncate">
          {restData?.info?.cuisines.join(", ")}
        </div>
        <div className="text-gray-700 text-[17px] w-[85%] truncate">
          {restData?.info?.areaName}
        </div>
      </div>
    </div>
  );
}
