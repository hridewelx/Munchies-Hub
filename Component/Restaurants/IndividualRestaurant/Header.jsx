export default function Header({ headerInfo }) {
  console.log(headerInfo);
  return (
    <div className="mb-4">
      <h1 className="font-extrabold text-4xl mb-10">{headerInfo?.name}</h1>
      <div className="mx-auto my-6 w-[100%] max-w-[980px] rounded-[36px] bg-gradient-to-b from-[#f7f7fb] to-[#efeff2] pb-7 p-5 pt-0">
        <div className="rounded-2xl bg-white px-6 py-5 shadow-sm">
          <div className="text-base font-bold flex gap-2 mb-2">
            <span className="w-6.5 h-6.5 rounded-full bg-green-600 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.645 1.605-.645 1.905 0l1.525 3.78 4.173.605c.738.107 1.035 1.012.5 1.534l-3.016 2.942.712 4.15c.127.74-.651 1.299-1.305.95l-3.726-1.962-3.726 1.962c-.654.35-1.432-.21-1.305-.95l.712-4.15-3.016-2.942c-.535-.522-.238-1.427.5-1.534l4.173-.605L9.049 2.927z" />
              </svg>
            </span>
            <span>{headerInfo?.avgRatingString}</span>
            <span>{"(" + headerInfo?.totalRatingsString + ") •"}</span>
            <span>{headerInfo?.costForTwoMessage}</span>
          </div>
          <div className="text-[16px] text-[#FF5200] font-bold mb-1">
            {headerInfo?.cuisines?.join(", ")}
          </div>

          <div className="flex items-start gap-2">
            <div className="flex flex-col justify-between items-center self-stretch mr-2">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
              <div className="w-[2px] flex-1 bg-gray-300 " />
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-[17px]">
                <div className="font-bold text-[17px] pr-2">Outlet</div>
                <span className="text-xl text-gray-700">Rohini</span>
                <svg
                  className="w-3 h-3 text-[#FF5200]"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 2.5L4 5.5L7 2.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="font-bold text-[17px] mt-1">
                {headerInfo?.sla?.slaString}
              </div>
            </div>
          </div>
          {/* END: minimal wrapper + stand */}
        </div>
      </div>
    </div>
  );
}
