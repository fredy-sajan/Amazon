import { useState } from 'react';
import Image from "next/image";
import { ShoppingCartIcon, MagnifyingGlassIcon, Bars3Icon, ChevronDownIcon, UserIcon, MapPinIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Flag from 'react-world-flags';
import MobileHeaderSearch from "./mobile/MobileHeaderSearch";
import SideBarNavLink from "./nav_links/SideBarNavLink";
import amazonLogo from '../../assets/amazon_logo.webp';

function Header() {

    // display navlinks while clicking on menu bar start
    const [navLinksVisible, setNavLinksVisible] = useState(false)
    const handleNavStatus = () => {
        if (navLinksVisible) {
            setNavLinksVisible(false)
        }
        else
            setNavLinksVisible(true)
    }
    // display navlinks while clicking on menu bar end

    return (
        <header className="">

            {/* Top nav */}
            <div className="flex items-center bg-amazon_blue p-4 pb-5 flex-grow py-1">

                <div className="pt-2 pr-4 flex items-center flex-grow sm:flex-grow-0">

                    {/* Mobile screen menu bar */}
                    <div className="sm:hidden text-white -mt-3 mr-2 cursor-pointer">
                        <Bars3Icon
                            className="h-8"
                            onClick={handleNavStatus}
                        />
                    </div>
                    {/* Mobile screen menu bar */}

                    <Image
                        src={amazonLogo}
                        alt='visual-content'
                        width={90}
                        height={40}
                        style={{ objectFit: "contain" }}
                        className='cursor-pointer w-20 sm:w-21'
                    />

                    {/* location selection large screens start */}
                    <div className="hidden lg:flex flex-col items-center -mt-2 ml-6 text-white">
                        <p className="text-xs =">
                            <span className="text-xs ml-2">Deliver to</span><br />
                            <span className="font-bold text-sm flex items-center -ml-3 -mt-1">
                                <MapPinIcon className="w-5 -mt-1 mr-0" />
                                India
                            </span>
                        </p>
                    </div>
                    {/*  location selection large screens end */}
                </div>

                {/* Search large screen*/}
                <div className="hidden overflow-hidden sm:flex items-center h-9 rounded-md flex-grow bg-amazon_search_background_color-lite_orange">
                    <button className="flex items-center pl-2 h-full pr-2 bg-gray-200 text-xs">All <ChevronDownIcon className="ml-2 h-4" /></button>
                    <input className="p-2 h-full w-6 flex-grow flex-shrink focus:outline-none px-4" type="text" placeholder="Search Amazon" />
                    <MagnifyingGlassIcon className="cursor-pointer h-12 w-12 p-4" />
                </div>
                {/* Search large screen*/}


                {/* Right side of nav start*/}
                <div className="text-white flex items-center text-xs space-x-6 mx-4 whitespace-nowrap">

                    <div className="hidden lg:flex w-20 h-10 hover:border">
                        <button className="flex items-center  justify-center flex-grow h-full text-sm font-bold">
                            <span><Flag code="US" className="mr-1 h-5 w-6" /> </span> EN <ChevronDownIcon className="ml-1 pb-1" width={10} />
                        </button>
                    </div>

                    <div className="hidden sm:inline link">
                        <p>Hello Fredy Sajan</p>
                        <p className="font-extrabold md:text-sm">Account & Lists</p>
                    </div>

                    <div className="hidden sm:inline link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>

                    {/* Mobile screen Sign In start */}
                    <div className="flex sm:hidden items-center cursor-pointer hover:underline">
                        <span className="">Sign In</span>
                        <ChevronRightIcon className="h-3" />
                        <UserIcon className="h-8 -mr-3" />
                    </div>
                    {/* Mobile screen Sign In end */}

                    <div className="relative link flex items-center">
                        <span className="absolute top-0 right-0 md:right-7 h-4 w-4 bg-amazon_cart_background_color-dark_orange text-center rounded-full text-black font-bold">0</span>
                        <ShoppingCartIcon className="h-9 sm:h-10" />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-4">Cart</p>
                    </div>
                </div>
                {/* Right side of nav end*/}

            </div>
            {/* Top nav End */}

            {/* Search mobile screen start */}
            <MobileHeaderSearch />
            {/* Search mobile screen end */}


            {/* Bottom nav start*/}
            <div className="flex items-center space-x-3 pt-2 pb-2 sm:pt-1 sm:pb-1  pl-4 bg-amazon_blue-light text-white text-sm">

                {/* large screen link start*/}
                <p onClick={handleNavStatus}
                    className="hidden sm:flex link items-center"
                >
                    <Bars3Icon className="h-7 mr-1" />
                    <span>All</span>
                </p>

                <p className="hidden sm:inline link">Today&rsquo;s Deals</p>

                <p className="hidden sm:inline link">Customer Service</p>

                <p className="hidden sm:inline link">Registry</p>

                <p className="hidden sm:inline link">Gift Cards</p>

                <p className="hidden sm:inline link">Sell</p>
                {/* large screen link end*/}

                {/* Mobile screen bottom nav content start*/}
                <p className="sm:hidden  flex items-center">
                    <MapPinIcon className="h-5 cursor-pointer" />
                    <span className="text-xs cursor-pointer">Select a location to see product availability</span>
                </p>
                {/* Mobile screen bottom nav content end*/}

            </div>
            {/* Bottom nav end */}

            {/* Side nav Bar links start, state and function passed to child*/}
            <SideBarNavLink navVisibleStatus={navLinksVisible} handleNavStatus={handleNavStatus} />
            {/* Side nav Bar links end*/}

        </header>
    )
}

export default Header