export default function DineoutCard({ data }) {
  console.log(data);
  return (
    <div className="self-start w-81.5 mb-20 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="relative">
        <a href={data?.cta?.link}>
          <img
            className="w-81.5 object-cover"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${data?.info?.mediaFiles[0]?.url}`}
            alt=""
          />

          {/* Overlay Container */}
          <div className="absolute bottom-0 left-0 w-full h-10 flex justify-between items-center px-3 pt-4 pb-3 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white font-bold text-xl">
            <span className="truncate w-63.5 h-6 block overflow-hidden whitespace-nowrap text-ellipsis">
              {data?.info?.name}
            </span>
            <span className="text-base">{data?.info?.rating?.value}</span>
          </div>
        </a>
      </div>

      <div className="w-81.5 pt-2 px-3 pb-3">
        <div className="mt-1 text-[15px] w-full flex justify-between">
          <div>{data?.info?.cuisines?.join(" • ")}</div>
          <div>{data?.info?.costForTwo}</div>
        </div>

        <div className="mt-1 text-[14px] w-full flex justify-between">
          <div>{data?.info?.locality}</div>
          <div>{data?.info?.locationInfo?.distanceString}</div>
        </div>

        <div className="flex gap-2 mt-1">
          {data?.info?.vendorOffer?.offerHighlights?.map((value, index) => {
            return (
              <span
                key={index}
                className="mt-1 flex items-center gap-2 px-2 py-1 text-[13px] rounded-xl w-31 bg-gray-100"
              >
                <img
                  className="w-4 h-4"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/${value?.logoCtx?.logo}`}
                  alt={value?.logoCtx?.text}
                />
                <span>{value?.logoCtx?.text}</span>
              </span>
            );
          })}
        </div>

        {data?.info?.offerInfoV3?.vendorOffer && (
          <div className="mt-3 px-2 w-75.5 h-9 bg-[#1BA672] rounded-lg text-white font-semibold flex justify-between items-center">
            <div className="text-[14px] flex items-center gap-1">
              <img
                className="w-6 h-6"
                src={`https://dineout-media-assets.swiggy.com/swiggy/image/upload/${data?.info?.offerInfoV3?.offerLogo?.logo}`}
                alt=""
              />
              <span>{data?.info?.offerInfoV3?.vendorOffer?.title}</span>
              <span>{data?.info?.offerInfoV3?.vendorOffer?.subtitle}</span>
            </div>
            <div className="text-[13px]">
              {data?.info?.offerInfoV3?.vendorOffer?.subtext}
            </div>
          </div>
        )}

        {data?.info?.customerOffer?.infos[0]?.description && (
          <div className="mt-3 pl-2 w-75.5 h-9 bg-[#C8F9E5] rounded-lg text-[#1BA672] text-[16px] flex items-center">
            {data?.info?.customerOffer?.infos[0]?.description}
          </div>
        )}

        {data?.info?.offerInfoV3?.couponOffer?.title && (
          <div className="pt-3 w-75.5 h-7.25 text-[#5134B6] text-[13px] flex items-center">
            {data?.info?.offerInfoV3?.couponOffer?.title}
          </div>
        )}
      </div>
    </div>
  );
}
