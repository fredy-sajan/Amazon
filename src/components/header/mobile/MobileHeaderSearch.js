
import {  MagnifyingGlassIcon } from "@heroicons/react/24/outline";


function MobileHeaderSearch() {
    return (
        <div>
            <div className="sm:hidden h-24 bg-amazon_blue">
               
                {/* Search start */}
                <div className="flex h-9 ml-4 mr-4 bg-amazon_search_background_color-lite_orange rounded-md overflow-hidden">
                    <input className="h-full  w-full flex-grow flex-shrink p-2 text-xs" type="text" placeholder="Search Amazone"/>
                    <MagnifyingGlassIcon className="cursor-pointer  p-1 w-12" />
                </div>
                {/* Search start */}

                {/* Bottom links start */}
                <div className="flex items-end pl-6 pr-4 mt-1 text-white">
                    <p className="flex flex-col items-start cursor-pointer hover:underline"> 
                        <span className="text-xs">Shop by</span>
                        <span className="text-sm">Category</span>
                    </p>
                    <p className="text-sm ml-5 cursor-pointer hover:underline">Wish List</p>
                    <p className="text-sm ml-5 cursor-pointer hover:underline">Deals</p>
                    <p className="text-sm ml-5 cursor-pointer hover:underline">Sell</p>
                </div>
                {/* Bottom links end */}

            </div>
        </div>
    )
}

export default MobileHeaderSearch;