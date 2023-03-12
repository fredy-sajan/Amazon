import { HomeIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { allNavLinks } from './AllLinks';

function SideBarNavLink({ navVisibleStatus, handleNavStatus }) {

    return (
        <>
            {navVisibleStatus ? (
                <div div className='' >
                    <div
                        id="side_bar_nav_link"
                        className='bg-white w-3/4 sm:w-64 h-full absolute z-50 top-0 overflow-y-scroll'
                    >

                        <div
                            id="user"
                            className='flex items-center justify-between bg-amazon_blue-light text-white h-32 p-5'
                        >
                            <span className='mt-9'>
                                <h3 className='text-xl font-semibold'>Browse</h3>
                                <h2 className='text-3xl font-medium -mt-1'>Amazon</h2>
                            </span>
                            <span className='flex -mt-16'>
                                <h2 className='mr-1 font-normal'>Sign In</h2>
                                <UserIcon className='h-6' />
                            </span>
                        </div>

                        <div
                            id="amazon_home"
                            className='flex items-center justify-between h-15 p-5 border-b-4'
                        >
                            <h2 className='text-xl font-bold text-gray-900'>Amazon Home</h2>
                            <HomeIcon className='h-6' />
                        </div>

                        <div
                            id="trending"
                            className='flex flex-col items-start justify-center p-5 border-b-4'
                        >
                            <h2 className='text-xl font-bold text-gray-900 mb-4'>Trending</h2>
                            <ul>
                                <li className='text-lg pb-5 font-medium'>Best Sellers</li>
                                <li className='text-lg pb-5 font-medium'>New Releases</li>
                                <li className='text-lg pb-5 font-medium'>Movies and Shakers</li>
                            </ul>
                        </div>

                        <div
                            id="top_departments"
                            className='flex flex-col items-start justify-center p-5 border-b-2'
                        >
                            <h2 className='text-xl font-bold text-gray-900 mb-4'>Top Departments</h2>
                            <ul>
                                <li className='text-lg pb-5 font-medium'>Home</li>
                                <li className='text-lg pb-5 font-medium'>Health & Household</li>
                                <li className='text-lg pb-5 font-medium'>Books</li>
                                <li className='text-lg pb-5 font-medium'>PC</li>
                            </ul>
                        </div>

                        <div
                            id="all_links"
                            className='flex flex-col items-start justify-center p-5 border-b-2'
                        >
                            <ul>
                                {
                                    allNavLinks.map(({ name }) => {
                                        return <li className='text-lg pb-5 font-medium'>{name}</li>
                                    })
                                }
                            </ul>
                        </div>

                    </div>

                    <div className='absolute z-40 h-full w-full top-0'>
                        <div className='w-full h-full absolute z-40 bg-black opacity-75' />
                        <XMarkIcon 
                        className='h-10 absolute z-50 top-2 left-3/4 sm:left-64 text-white' 
                        onClick={handleNavStatus}
                        />
                    </div>


                </div>
            )
                : ""
            }

        </>

    )
}

export default SideBarNavLink