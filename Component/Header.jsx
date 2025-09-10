import { Link } from "react-router";

export default function Header() {
    return (
        <header className="bg-[#ff5200]">
            {/* Navbar */}
            <div className="p-8 max-w-[80%] container mx-auto flex justify-between border-b-1 border-white/60">
                <img className="w-40 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="swiggy logo" />
                <div className="text-white font-bold flex  items-center gap-5 ">
                    <a href="https://www.swiggy.com/corporate/" target="_blank">Swiggy Corporate</a>
                    <a href="https://partner.swiggy.com/login#/swiggy" target="_blank">Swiggy Corporate</a>
                    <a className="border py-3 px-4 h-13.5 rounded-2xl flex items-center" href="https://partner.swiggy.com/login#/swiggy" target="_blank">Get the App</a>
                    <a className="border py-3 px-4 h-13.5 rounded-2xl bg-black flex items-center" href="https://partner.swiggy.com/login#/swiggy" target="_blank">Sign in</a>
                </div>
            </div>

            <div className="pt-16 pb-8 relative">
                <img className="absolute h-112.5 w-62.5 top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
                <img className="absolute h-112.5 w-62.5 top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
                <div className="w-[50%] text-5xl text-white font-bold text-center container mx-auto">Order food & groceries. Discover best restaurants. Swiggy it!</div>
                <div className="mt-6 flex justify-center items-center container mx-auto w-[70%] gap-15">
                    <div className="relative w-80">
                        <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.5-7.5 10.5-7.5 10.5S4.5 18 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <input className="h-15 w-full border-white pl-12 bg-white rounded-2xl" placeholder='Delhi, India' />
                    </div>
                    <div className="relative w-125">
                        <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z" />
                        </svg>
                        <input className="h-15 w-full border-white pl-12 bg-white rounded-2xl" placeholder='Search for restaurant, item or more' />
                    </div>
                </div>
            </div>

            <div className="px-2 pb-5 flex max-w-[80%] container mx-auto">
                <Link to="/restaurants">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"></img>
                </Link>
                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png"></img>
                </a>
                <a href="https://www.swiggy.com/dineout">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png"></img>
                </a>
                <a href="https://www.swiggy.com/genie">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png"></img>
                </a>
            </div>
        </header>
    );
}