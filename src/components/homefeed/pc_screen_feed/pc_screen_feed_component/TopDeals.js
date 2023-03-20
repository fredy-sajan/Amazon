import Image from 'next/image';
import React from 'react';

function TopDeals({ topdealsdata, isOfferIndicator, isObjectFit }) {


    return (
        <div>
            <div id='top_deals_prodcut_container' className='w-[245px] h-full mt-2 focus:border border-red-700 cursor-pointer'>

                <div id='header' className='w-full h-[200px]'>

                    <div id="product_image" className='h-full w-full '>
                        <Image src={topdealsdata.imageUrl} alt="" className={`${!isObjectFit ? "object-contain" : "object-cover"} h-full w-full`} />
                    </div>

                </div>

                <div id='footer'>

                    <div id="product_info">

                        <div id="offer_status" className='flex space-x-3 mt-2 items-center'>

                         { !isOfferIndicator && <div id="offer" className='p-1 pl-2 pr-2 bg-red-600'>
                                <h2 className='text-white text-xs font-bold'>{topdealsdata.offer}</h2>
                            </div> }

                            <div id="days_left">
                                <h2 className='text-xs font-bold text-red-600'>{topdealsdata.daysleft}</h2>
                            </div>

                        </div>

                        <div id="product_description" className='mt-2 pb-1 max-w-[240px]'>
                            <p className='text-sm font-semibold line-clamp-1'>{topdealsdata.description}</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default TopDeals;