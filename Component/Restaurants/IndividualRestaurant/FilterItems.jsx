import { useState } from "react";

export default function FilterItems() {
  const [active, setActive] = useState(null); 

  return (
    <div className="flex items-center gap-3 my-5 px-10">
      {/* Toggle Buttons */}
      <button
        onClick={() => setActive(selected === "veg" ? null : "veg")}
        className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
          active === "veg" ? "border-green-500" : "border-gray-400"
        }`}
      >
        <div
          className={`w-3 h-3 rounded-full transition-colors duration-300 ${
            active === "veg" ? "bg-green-500" : "bg-transparent"
          }`}
        ></div>
        Veg
      </button>

      <button
        onClick={() => setActive(selected === "non-veg" ? null : "non-veg")}
        className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
          active === "non-veg" ? "border-red-500" : "border-gray-400"
        }`}
      >
        <div
          className={`w-3 h-3 rounded-full transition-colors duration-300 ${
            active === "non-veg" ? "bg-red-500" : "bg-transparent"
          }`}
        ></div>
        Non-veg
      </button>

      {/* Badges */}
      <span className="px-3 py-1 border border-gray-300 rounded-full text-sm font-medium hober:bg-gray-100 cursor-pointer">
        Bestseller
      </span>
      <span className="px-3 py-1 border border-gray-300 rounded-full text-sm font-medium hober:bg-gray-100 cursor-pointer">
        Guiltfree
      </span>
    </div>
  );
}
