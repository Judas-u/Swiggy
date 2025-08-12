export default function Header() {
    
    return (
        <header className="bg-[#ff5200] font-serif">

            <div className="flex justify-between container mx-auto items-center p-8">

                <img className="w-40 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"></img>

                <div className=" text-white text-base font-bold flex gap-10 items-center">
                    <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                    <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner With Us</a>
                    <a className="border border-white py-3 px-4 rounded-2xl" target="_blank" href="">Get the App  </a>
                    <a className="border border-black bg-black py-3 px-6 rounded-2xl " target="_blank" href="">Sign In</a>
                </div>
            </div>
            
            <div className="pt-16 pb-8 relative">
                <img className="h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                <img className="h-110 w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>

                <div className="max-w-[70%] text-5xl text-white font-bold container mx-auto  text-center">
                    OrderFood and Groceries. Discover Best Restaurants. Swiggy it!
                </div>

                <div>

                </div>
            </div>

            <div>

            </div>

            
        </header>
    );
}

