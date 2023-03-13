import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { bannerAllImages } from '@/assets/banner-images/BannerImages';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';


function Banner() {
    return (
        <div className='relative'>
            <div className='absolute w-full h-24 sm:h-40 md:h-48 lg:h-64 xl:h-80 
                            bg-gradient-to-t from-amazon_home_background_color-dark_white to-transparent 
                            bottom-0 z-20'
            />

            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
                renderArrowPrev={(clickHandler, hasPrev) => {
                    return (
                        <div
                            className={`${hasPrev} -600 absolute z-30 top-0 left-0 sm:left-2 w-10 sm:w-20 h-full md:h-72 
                                       flex items-center justify-center hover:border border-gray-300 cursor-pointer`}
                            onClick={clickHandler}
                        >

                            <div className='hover:bg-black absolute w-full h-full z-10 opacity-25' />
                            <ChevronLeftIcon className='h-8 sm:h-14 text-black drop-shadow-2xl' />
                            <ChevronLeftIcon className='h-8 sm:h-14 text-white drop-shadow-2xl absolute mr-1' />
                        </div>
                    )
                }}
                renderArrowNext={(clickHandler, hasNext) => {
                    return (
                        <div
                            className={`${hasNext ? "absolute" : "hidden"} -600  z-30 top-0 right-0 sm:right-2 w-10 sm:w-20 h-full md:h-72 
                                       flex items-center justify-center hover:border border-gray-300 cursor-pointer`}
                            onClick={clickHandler}
                        >
                            <div className='hover:bg-black absolute w-full h-full z-10 opacity-25' />
                            <ChevronRightIcon className='h-8 sm:h-14 text-black drop-shadow-2xlxl shadow-black ' />
                            <ChevronRightIcon className='h-8 sm:h-14 text-white drop-shadow-2xlxl shadow-black absolute ml-1' />
                        </div>
                    )
                }}
            >

                {/* Images from assets */}
                {
                    bannerAllImages.map(({ id, url }) => (
                        <div>
                            <Image loading='lazy' src={url} key={id} alt="" />
                        </div>
                    ))
                }



            </Carousel>

        </div>
    )
}

export default Banner