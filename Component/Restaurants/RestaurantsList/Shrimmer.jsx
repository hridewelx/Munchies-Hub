export default function Shrimmer() {
  return (
    <div className="flex flex-wrap w-[80%] justify-center mx-auto gap-6 mt-10">
      {Array(16)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="rounded-2xl w-[23%] animate-pulse bg-gray-200 shadow-md"
          >
            <div className="w-full h-60 rounded-t-2xl bg-gray-300"></div>

            <div className="px-3 pt-2 pb-3 flex flex-col gap-3">
              <div className="h-[18px] bg-gray-300 rounded"></div>
              <div className="h-[16px] bg-gray-300 rounded"></div>
              <div className="h-[16px] bg-gray-300 rounded"></div>
              <div className="h-[16px] bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
    </div>
  );
}
