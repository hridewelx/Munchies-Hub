import { useState } from "react";

export default function RestaurantItems({ items }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="">

      <div className="w-full flex justify-between mb-10">
        <div className="flex flex-col w-[75%]">
          <div className="text-lg font-bold">{items?.name}</div>
          <div className="text-lg font-bold">{"₹" + (items?.defaultPrice !== undefined ? items.defaultPrice/100 : items?.price/100)}</div>

          {/* Ratings */}
          <div className="font-bold text-sm flex items-center gap-1">
            <span>
              <svg
                className="w-3.5 h-3.5 text-white bg-green-600 rounded-full p-[2px]"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.645 1.605-.645 1.905 0l1.525 3.78 4.173.605c.738.107 1.035 1.012.5 1.534l-3.016 2.942.712 4.15c.127.74-.651 1.299-1.305.95l-3.726-1.962-3.726 1.962c-.654.35-1.432-.21-1.305-.95l.712-4.15-3.016-2.942c-.535-.522-.238-1.427.5-1.534l4.173-.605L9.049 2.927z" />
              </svg>
            </span>
            <span>{(items?.ratings?.aggregatedRating?.rating === undefined ? "" : items?.ratings?.aggregatedRating?.rating)}</span>
            <span>
              {(items?.ratings?.aggregatedRating?.ratingCountV2 === undefined ? "(No rating available)" : "(" + items?.ratings?.aggregatedRating?.ratingCountV2 + ")")}
            </span>
          </div>

          {/* Description with Read More */}
          <div className="text-gray-700 text-[16px]">
            <p
              className={`transition-all duration-300 ${
                isExpanded ? "line-clamp-none" : "line-clamp-2"
              }`}
            >
              {items?.description}
            </p>
            {items?.description?.length > 200 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[#FF5200] font-semibold hover:underline cursor-pointer"
              >
                {isExpanded ? "less" : "more"}
              </button>
            )}
          </div>
        </div>

        {/* Item Image */}
        <div className="relative w-50 h-43">
          <img className="w-full h-full object-cover rounded-2xl"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              items?.imageId
            }
            alt={items?.name}
          />

          {/* ADD Button */}
          <button 
            className="absolute bottom-[-12.5%] left-[25%] rounded-xl text-xl font-semibold text-green-600 px-6 py-2 shadow-md border border-white bg-white"
            >ADD
          </button>
        </div>
      </div>
        <hr className="border border-gray-300 my-5" />
    </div>
  );
}
