// Icon module from heroicons
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// import home feed large screen  components 
import FourLayoutCard from "../../../../components/homefeed/pc_screen_feed/pc_screen_feed_component/FourLayoutCard";
import OneLayoutCard from "../../../../components/homefeed/pc_screen_feed/pc_screen_feed_component/OneLayoutCard";
import TwoLayoutCard from "../../../../components/homefeed/pc_screen_feed/pc_screen_feed_component/TwoLayoutCard";
import TopDeals from "../../../../components/homefeed/pc_screen_feed/pc_screen_feed_component/TopDeals";

// import images from assets [arrays]
import { TopCardImages } from "@/assets/product-feed-images/HomeFeedImages";
import { topDealsImages } from "@/assets/product-feed-images/top-deals-images";
import { furnitureImages } from "@/assets/product-feed-images/furniture-images/FurnitureImages";
import { kitchenImages } from "@/assets/product-feed-images/books-images/KitchenImages";
import { SecondGridContainerImages } from '@/assets/product-feed-images/second-grid-container images/SecondGridContainer';
import { BeautyAndPersonalCareImages } from '@/assets/product-feed-images/frequently-purchased-images/FrequentlyPurchased';
import { StuffedAnimalsImages } from '@/assets/product-feed-images/stuffed-animals-and-toys-images/StuffedAnimals';
import { GamingMerchImages, menClothingImages, TravelServicesImages } from '@/assets/product-feed-images/four-card-layout-images/FourCardLayoutImages';
import { ThirdContainerImages } from '@/assets/product-feed-images/third-grid-container/ThirdGridContainerImages';
import { SeasonPopularImages } from '@/assets/product-feed-images/season-popular-images/SeasonPopularImages';
import { PopularGiftImages } from '@/assets/product-feed-images/popular-gifts-images/PopularGiftsImages';
import { InternationalTopSellersImages } from '@/assets/product-feed-images/international-top-sellers-images/InternationalTopSellersImages';



function HomeFeedPcScreen() {

  // All flex container X axis scroll indicators variables
  let topDealsBtn = false, furnitureBtn = false, kitchenDealsBtn = false, freequentlyRepurchased = false;
  let stuffedAnimals = false, seasonPopular = false, popularGifts = false, internationalTopSellers = false;


  let handlePrevBtn = () => {   // previous scroll button action

    if (topDealsBtn === true) {
      // Top Deals flex container click scroll setup (x axis)
      const sliderDiv = document.getElementById('body_top_deals');
      sliderDiv.scrollLeft = sliderDiv.scrollLeft - 900;

      topDealsBtn = false;
    }
    else if (furnitureBtn === true) {
      // Furniture deals flex container click scroll setup (x axis)
      const sliderDiv2 = document.getElementById('furnitue_deals');
      sliderDiv2.scrollLeft = sliderDiv2.scrollLeft - 900;

      furnitureBtn = false;
    }
    else if (kitchenDealsBtn === true) {
      // Kitchen products flex container scroll setup (x axis)
      const sliderDiv3 = document.getElementById('kitchen_deals');
      sliderDiv3.scrollLeft = sliderDiv3.scrollLeft - 900;

      kitchenDealsBtn = false;
    }
    else if (freequentlyRepurchased === true) {
      // frequently repurchased products flex container scroll setup (x axis)
      const sliderDiv4 = document.getElementById('frequently_repurchased_deals');
      sliderDiv4.scrollLeft = sliderDiv4.scrollLeft - 900;

      freequentlyRepurchased = false;
    }
    else if (stuffedAnimals === true) {
      // frequently repurchased products flex container scroll setup (x axis)
      const sliderDiv5 = document.getElementById('stuffed_animals_and_toys_deals');
      sliderDiv5.scrollLeft = sliderDiv5.scrollLeft - 900;

      stuffedAnimals = false;
    }
    else if (seasonPopular === true) {
      // season popular products flex conatiner scroll setup (x axis)
      const sliderDiv6 = document.getElementById('season_popular_deals')
      sliderDiv6.scrollLeft = sliderDiv6.scrollLeft - 900;

      seasonPopular = false;
    }
    else if (popularGifts === true) {
      // popular gifts products flex container scroll setup (x axis)
      const sliderdiv7 = document.getElementById('popular_gifts_deals');
      sliderdiv7.scrollLeft = sliderdiv7.scrollLeft - 900;

      popularGifts = false;
    }
    else if (internationalTopSellers === true) {
      // International top sellers flex container scroll setup (x axis)
      const sliderDiv8 = document.getElementById('international_top_sellers_deals');
      sliderDiv8.scrollLeft = sliderDiv8.scrollLeft - 900;

      internationalTopSellers = false;
    }

  }


  let handleNextBtn = () => {   // next scroll button action

    if (topDealsBtn === true) {
      // Top Deals flex container click scroll setup (x axis)
      const sliderDiv = document.getElementById('body_top_deals');
      sliderDiv.scrollLeft = sliderDiv.scrollLeft + 900;

      topDealsBtn = false;
    }
    else if (furnitureBtn === true) {
      // Furniture deals flex container click scroll setup (x axis)
      const sliderDiv2 = document.getElementById('furnitue_deals');
      sliderDiv2.scrollLeft = sliderDiv2.scrollLeft + 900;

      furnitureBtn = false;
    }
    else if (kitchenDealsBtn === true) {
      // Kitchen products flex container scroll setup (x axis)
      const sliderDiv3 = document.getElementById('kitchen_deals');
      sliderDiv3.scrollLeft = sliderDiv3.scrollLeft + 900;

      kitchenDealsBtn = false;
    }
    else if (freequentlyRepurchased === true) {
      // frequently repurchased products flex container scroll setup (x axis)
      const sliderDiv4 = document.getElementById('frequently_repurchased_deals');
      sliderDiv4.scrollLeft = sliderDiv4.scrollLeft + 900

      freequentlyRepurchased = false;
    }
    else if (stuffedAnimals === true) {
      // frequently repurchased products flex container scroll setup (x axis)
      const sliderDiv5 = document.getElementById('stuffed_animals_and_toys_deals');
      sliderDiv5.scrollLeft = sliderDiv5.scrollLeft + 900

      stuffedAnimals = false;
    }
    else if (seasonPopular === true) {
      // season popular products flex conatiner scroll setup (x axis)
      const sliderDiv6 = document.getElementById('season_popular_deals')
      sliderDiv6.scrollLeft = sliderDiv6.scrollLeft + 900;

      seasonPopular = false;
    }
    else if (popularGifts === true) {
      // popular gifts products flex container scroll setup (x axis)
      const sliderdiv7 = document.getElementById('popular_gifts_deals');
      sliderdiv7.scrollLeft = sliderdiv7.scrollLeft + 900;

      popularGifts = false;
    }
    else if (internationalTopSellers === true) {
      // International top sellers flex container scroll setup (x axis)
      const sliderDiv8 = document.getElementById('international_top_sellers_deals');
      sliderDiv8.scrollLeft = sliderDiv8.scrollLeft + 900;

      internationalTopSellers = false;
    }

  }


  return (
    <>

      {/* Top grid container  start*/}

      <div id='top_card_container' className='hidden md:grid grid-flow-row-dense gap-6 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mx-auto pl-5 pr-5'>

        {TravelServicesImages
          .map((data, index) => {
            return (
              <div id="card_one" key={index} className={``}>
                <FourLayoutCard
                  key={index}
                  data={data}
                  isDynamic
                  title="Book travel tickets and get exciting offers" />
              </div>
            )
          })}

        <div id="card_two">
          {/* Component call */}
          <OneLayoutCard
            title={"Health & Personal Care"}
            imageUrl={TopCardImages[0].seven.imageUrl}
          />
        </div>

        <div id="card_three">
          {/* Component call */}
          <OneLayoutCard
            title={"Beauty picks"} imageUrl={TopCardImages[0].two.imageUrl}
          />
        </div>

        <div id="card_four" className="xl:col-start-4 lg:col-start-3 md:col-start-3">
          {/* Component call */}
          <TwoLayoutCard />
        </div>

        <div id="card_five">
          {/* Component call */}
          <OneLayoutCard
            title={"Dresses"}
            imageUrl={TopCardImages[0].four.imageUrl}
          />
        </div>

        {menClothingImages
          .map((data, index) => {
            return (
              <div id="cards_six" key={index} className={``}>
                <FourLayoutCard
                  key={index}
                  data={data}
                  isDynamic
                  title="Up to 60% off | Styles for men" />
              </div>
            )
          })}

        <div id="card_seven">
          {/* Component call */}
          <OneLayoutCard
            title={"Electronics"}
            imageUrl={TopCardImages[0].five.imageUrl}
          />
        </div>

        <div id="card_eight">
          {/* Component call */}
          <OneLayoutCard
            title={"Easy returns"}
            imageUrl={TopCardImages[0].ten.imageUrl}
            learnMore
          />
        </div>

        <div id="card_nine">
          <div className='xl:hidden lg:inline '>
            {/* Component call */}
            <OneLayoutCard
              title={"Get fit at home"}
              // imageUrl={TopCardImages[11].imageUrl.fit}
            />
          </div>
        </div>

      </div>

      {/* Top grid container  end*/}



      {/*Second top container, Top deals start*/}

      <div id="top_deals_continer" className="hidden relative md:flex flex-col max-w-full h-full ml-5 mr-5 mt-5 pl-6 pr-4 pt-5 pb-14 bg-white">

        <div id="header_top_deals" className='w-full h-10 flex items-center space-x-3'>

          <div id="text_head" className=''>
            <h1 className='text-black md:text-lg lg:text-xl xl:text-2xl font-bold'>Today&sbquo;s Deals</h1>
          </div>

          <div id="seeall">
            <p className='text-sm font-semibold text-cyan-700 hover:text-yellow-700 hover:underline cursor-pointer'>See all deals</p>
          </div>

        </div>

        <div id="slider_buttons" className="flex -ml-4 items-center">

          <div id="left_prev_slider_btn" onClick={() => {
            handlePrevBtn(topDealsBtn = true)
          }} className={`absolute z-10 flex justify-center items-center w-12 h-28 mt-52 left-0 bg-white shadow-xl opacity-50 hover:opacity-100 cursor-pointer transition-opacity`}>
            <ChevronLeftIcon id="left_prev_arrow_icon" className="absolute h-10 mr-3" />
          </div>

          <div id="right_next_slider_btn" onClick={() => {
            handleNextBtn(topDealsBtn = true)
          }} className={`absolute z-10 flex items-center justify-center mt-52 w-12 h-28  right-0  bg-white shadow-xl opacity-50 hover:opacity-100 transition-opacity cursor-pointer`}>
            <ChevronRightIcon id="right_next_arrow_icon" className="absolute h-10" />
          </div>

        </div>

        <div id="body_top_deals" className="flex space-x-4 overflow-x-scroll overflow-y-hidden scrollbar-hide scroll-smooth w-full  h-full">

          {/* Component call with map function*/}
          {topDealsImages.map((data, index) => {
            return (
              <TopDeals key={index} topdealsdata={data} />
            )
          })}
        </div>

      </div>

      {/*Second top container, Top deals end*/}



      {/* Third top container, furniture section start */}
      <div id="furniture_container" className="hidden relative md:flex flex-col max-w-full h-full ml-5 mr-5 mt-5 pl-6 pr-4 pt-5 pb-5 bg-white">

        <div id="header_top_deals" className='w-full h-10 flex items-center space-x-3'>

          <div id="text_head" className=''>
            <h1 className='text-black md:text-lg lg:text-xl xl:text-2xl font-bold'>Up to 60% off | Curated furniture picks for your home</h1>
          </div>

          <div id="seeall">
            <p className='text-sm font-semibold text-cyan-700 hover:text-yellow-700 hover:underline cursor-pointer'>Visit the store</p>
          </div>

        </div>

        <div id="slider_buttons" className="flex -ml-4 items-center">

          <div id="left_prev_slider_btn" onClick={() => {
            handlePrevBtn(furnitureBtn = true)
          }} className={`absolute z-10 flex justify-center items-center w-12 h-28 mt-52 left-0 bg-white shadow-xl opacity-50 hover:opacity-100 cursor-pointer transition-opacity`}>
            <ChevronLeftIcon id="left_prev_arrow_icon" className="absolute h-10 mr-3" />
          </div>

          <div id="right_next_slider_btn" onClick={() => {
            handleNextBtn(furnitureBtn = true)
          }} className={`absolute z-10 flex items-center justify-center mt-52 w-12 h-28  right-0  bg-white shadow-xl opacity-50 hover:opacity-100 transition-opacity cursor-pointer`}>
            <ChevronRightIcon id="right_next_arrow_icon" className="absolute h-10" />
          </div>

        </div>

        <div id="furnitue_deals" className="flex space-x-4 overflow-x-scroll overflow-y-hidden scrollbar-hide scroll-smooth w-full  h-full">

          {/* Component call with map function*/}
          {furnitureImages.map((data, index) => {
            return (
              <TopDeals key={index} topdealsdata={data} isObjectFit isOfferIndicator />
            )
          })}
        </div>

      </div>
      {/* Third top container, furniture section end */}



      {/* Fourth top container, Books section start */}
      <div id="kitchen_container" className="hidden relative md:flex flex-col max-w-full h-full ml-5 mr-5 mt-5 pl-6 pr-4 pt-5 pb-5 bg-white">

        <div id="header_top_deals" className='w-full h-10 flex items-center space-x-3'>

          <div id="text_head" className=''>
            <h1 className='text-black md:text-lg lg:text-xl xl:text-2xl font-bold'>Up to 60% off | Shop for new kitchenware from local shops</h1>
          </div>

          <div id="seeall">
            <p className='text-sm font-semibold text-cyan-700 hover:text-yellow-700 hover:underline cursor-pointer'>Visit the store</p>
          </div>

        </div>

        <div id="slider_buttons" className="flex -ml-4 items-center">

          <div id="left_prev_slider_btn" onClick={() => {
            handlePrevBtn(kitchenDealsBtn = true)
          }} className={`absolute z-10 flex justify-center items-center w-12 h-28 mt-52 left-0 bg-white shadow-xl opacity-50 hover:opacity-100 cursor-pointer transition-opacity`}>
            <ChevronLeftIcon id="left_prev_arrow_icon" className="absolute h-10 mr-3" />
          </div>

          <div id="right_next_slider_btn" onClick={() => {
            handleNextBtn(kitchenDealsBtn = true)
          }} className={`absolute z-10 flex items-center justify-center mt-52 w-12 h-28  right-0  bg-white shadow-xl opacity-50 hover:opacity-100 transition-opacity cursor-pointer`}>
            <ChevronRightIcon id="right_next_arrow_icon" className="absolute h-10" />
          </div>

        </div>

        <div id="kitchen_deals" className="flex space-x-4 overflow-x-scroll overflow-y-hidden scrollbar-hide scroll-smooth w-full  h-full">

          {/* Component call with map function*/}
          {kitchenImages.map((data, index) => {
            return (
              <TopDeals key={index} topdealsdata={data} isObjectFit isOfferIndicator />
            )
          })}
        </div>

      </div>
      {/* Fourth top container, Books section end */}



      {/* Fifth top container,  section start */}
      <div id="second_grid_container" className='hidden md:grid grid-flow-row-dense gap-6 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mx-auto pl-5 pr-5 mt-5'>
        {SecondGridContainerImages.map((data, index) => {
          let lastCard = index === SecondGridContainerImages.length - 1
          return (
            <div id="cards" key={index} className={``}>
              <OneLayoutCard data={data} key={index} isMap title={data.title} lastCard={lastCard} />
            </div>
          )
        })}
      </div>
      {/* Fifth top container,  section end */}


      {/* Sixth top container, Beauty and Personal care start */}
      <div id="frequently_repurchased_container" className="hidden relative md:flex flex-col max-w-full h-full ml-5 mr-5 mt-5 pl-6 pr-4 pt-5 pb-5 bg-white">

        <div id="header_top_deals" className='w-full h-10 flex items-center space-x-3'>

          <div id="text_head" className=''>
            <h1 className='text-black md:text-lg lg:text-xl xl:text-2xl font-bold'>Frequently repurchased in Beauty & Personal Care</h1>
          </div>

          <div id="seeall">
            <p className='text-sm font-semibold text-cyan-700 hover:text-yellow-700 hover:underline cursor-pointer'></p>
          </div>

        </div>

        <div id="slider_buttons" className="flex -ml-4 items-center">

          <div id="left_prev_slider_btn" onClick={() => {
            handlePrevBtn(freequentlyRepurchased = true)
          }} className={`absolute z-10 flex justify-center items-center w-12 h-28 mt-52 left-0 bg-white shadow-xl opacity-50 hover:opacity-100 cursor-pointer transition-opacity`}>
            <ChevronLeftIcon id="left_prev_arrow_icon" className="absolute h-10 mr-3" />
          </div>

          <div id="right_next_slider_btn" onClick={() => {
            handleNextBtn(freequentlyRepurchased = true)
          }} className={`absolute z-10 flex items-center justify-center mt-52 w-12 h-28  right-0  bg-white shadow-xl opacity-50 hover:opacity-100 transition-opacity cursor-pointer`}>
            <ChevronRightIcon id="right_next_arrow_icon" className="absolute h-10" />
          </div>

        </div>

        <div id="frequently_repurchased_deals" className="flex space-x-4 overflow-x-scroll overflow-y-hidden scrollbar-hide scroll-smooth w-full  h-full">

          {/* Component call with map function*/}
          {BeautyAndPersonalCareImages.map((data, index) => {
            return (
              <TopDeals key={index} topdealsdata={data} isOfferIndicator />
            )
          })}
        </div>

      </div>
      {/* Sixth top container, Beauty and Personal care end */}


      {/* Seventh top container, Stuffed Animals and Toys  start */}
      <div id="stuffed_animals_and_toys_container" className="hidden relative md:flex flex-col max-w-full h-full ml-5 mr-5 mt-5 pl-6 pr-4 pt-5 pb-5 bg-white">

        <div id="header_top_deals" className='w-full h-10 flex items-center space-x-3'>

          <div id="text_head" className=''>
            <h1 className='text-black md:text-lg lg:text-xl xl:text-2xl font-bold'>Stuffed Animals & Toys under $10</h1>
          </div>

          <div id="seeall">
            <p className='text-sm font-semibold text-cyan-700 hover:text-yellow-700 hover:underline cursor-pointer'>Shop now</p>
          </div>

        </div>

        <div id="slider_buttons" className="flex -ml-4 items-center">

          <div id="left_prev_slider_btn" onClick={() => {
            handlePrevBtn(stuffedAnimals = true)
          }} className={`absolute z-10 flex justify-center items-center w-12 h-28 mt-52 left-0 bg-white shadow-xl opacity-50 hover:opacity-100 cursor-pointer transition-opacity`}>
            <ChevronLeftIcon id="left_prev_arrow_icon" className="absolute h-10 mr-3" />
          </div>

          <div id="right_next_slider_btn" onClick={() => {
            handleNextBtn(stuffedAnimals = true)
          }} className={`absolute z-10 flex items-center justify-center mt-52 w-12 h-28  right-0  bg-white shadow-xl opacity-50 hover:opacity-100 transition-opacity cursor-pointer`}>
            <ChevronRightIcon id="right_next_arrow_icon" className="absolute h-10" />
          </div>

        </div>

        <div id="stuffed_animals_and_toys_deals" className="flex space-x-4 overflow-x-scroll overflow-y-hidden scrollbar-hide scroll-smooth w-full  h-full">

          {/* Component call with map function*/}
          {StuffedAnimalsImages.map((data, index) => {
            return (
              <TopDeals key={index} topdealsdata={data} isOfferIndicator />
            )
          })}
        </div>

      </div>
      {/* Seventh top container, Stuffed Animals and Toys end */}


      {/* Eight top grid container,  section start */}
      <div id="third_grid_container" className='hidden md:grid grid-flow-row-dense gap-6 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mx-auto pl-5 pr-5 mt-5'>
        {ThirdContainerImages
          .slice(0, 2)
          .map((data, index) => {
            return (
              <div id="cards" key={index} className={``}>
                <OneLayoutCard data={data} key={index} isMap title={data.title} />
              </div>
            )
          })}

        {GamingMerchImages
          .map((data, index) => {
            return (
              <div id="cards" key={index} className={``}>
                <FourLayoutCard
                  key={index}
                  data={data}
                  isDynamic
                  title="Gaming merchandise" />
              </div>
            )
          })}

        {ThirdContainerImages
          .slice(2, 3)
          .map((data, index) => {
            let lastCard = 2
            return (
              <OneLayoutCard
                data={data}
                key={index}
                isMap
                title={data.title}
                lastCard={lastCard} />
            )
          })}
      </div>
      {/* Eight top grid container,  section end */}


      {/* Nineth top container, Season Popular  start */}
      <div id="season_popular_container" className="hidden relative md:flex flex-col max-w-full h-full ml-5 mr-5 mt-5 pl-6 pr-4 pt-5 pb-5 bg-white">

        <div id="header_top_deals" className='w-full h-10 flex items-center space-x-3'>

          <div id="text_head" className=''>
            <h1 className='text-black md:text-lg lg:text-xl xl:text-2xl font-bold'>Popular items this season</h1>
          </div>

          <div id="seeall">
            <p className='text-sm font-semibold text-cyan-700 hover:text-yellow-700 hover:underline cursor-pointer'></p>
          </div>

        </div>

        <div id="slider_buttons" className="flex -ml-4 items-center">

          <div id="left_prev_slider_btn" onClick={() => {
            handlePrevBtn(seasonPopular = true)
          }} className={`absolute z-10 flex justify-center items-center w-12 h-28 mt-52 left-0 bg-white shadow-xl opacity-50 hover:opacity-100 cursor-pointer transition-opacity`}>
            <ChevronLeftIcon id="left_prev_arrow_icon" className="absolute h-10 mr-3" />
          </div>

          <div id="right_next_slider_btn" onClick={() => {
            handleNextBtn(seasonPopular = true)
          }} className={`absolute z-10 flex items-center justify-center mt-52 w-12 h-28  right-0  bg-white shadow-xl opacity-50 hover:opacity-100 transition-opacity cursor-pointer`}>
            <ChevronRightIcon id="right_next_arrow_icon" className="absolute h-10" />
          </div>

        </div>

        <div id="season_popular_deals" className="flex space-x-4 overflow-x-scroll overflow-y-hidden scrollbar-hide scroll-smooth w-full  h-full">

          {/* Component call with map function*/}
          {SeasonPopularImages.map((data, index) => {
            return (
              <TopDeals key={index} topdealsdata={data} isOfferIndicator />
            )
          })}
        </div>

      </div>
      {/* Nineth top container,  Season Popular end */}



      {/* Teneth top container, Popular Gifts start */}
      <div id="season_popular_container" className="hidden relative md:flex flex-col max-w-full h-full ml-5 mr-5 mt-5 pl-6 pr-4 pt-5 pb-5 bg-white">

        <div id="header_top_deals" className='w-full h-10 flex items-center space-x-3'>

          <div id="text_head" className=''>
            <h1 className='text-black md:text-lg lg:text-xl xl:text-2xl font-bold'>Popular Gifts in Baby</h1>
          </div>

          <div id="seeall">
            <p className='text-sm font-semibold text-cyan-700 hover:text-yellow-700 hover:underline cursor-pointer'>Shop now</p>
          </div>

        </div>

        <div id="slider_buttons" className="flex -ml-4 items-center">

          <div id="left_prev_slider_btn" onClick={() => {
            handlePrevBtn(popularGifts = true)
          }} className={`absolute z-10 flex justify-center items-center w-12 h-28 mt-52 left-0 bg-white shadow-xl opacity-50 hover:opacity-100 cursor-pointer transition-opacity`}>
            <ChevronLeftIcon id="left_prev_arrow_icon" className="absolute h-10 mr-3" />
          </div>

          <div id="right_next_slider_btn" onClick={() => {
            handleNextBtn(popularGifts = true)
          }} className={`absolute z-10 flex items-center justify-center mt-52 w-12 h-28  right-0  bg-white shadow-xl opacity-50 hover:opacity-100 transition-opacity cursor-pointer`}>
            <ChevronRightIcon id="right_next_arrow_icon" className="absolute h-10" />
          </div>

        </div>

        <div id="popular_gifts_deals" className="flex space-x-4 overflow-x-scroll overflow-y-hidden scrollbar-hide scroll-smooth w-full  h-full">

          {/* Component call with map function*/}
          {PopularGiftImages.map((data, index) => {
            return (
              <TopDeals key={index} topdealsdata={data} isOfferIndicator />
            )
          })}
        </div>

      </div>
      {/* Tenth top container, Popular Gifts end */}



      {/* Teneth top last container, International Top Sellers start */}
      <div id="season_popular_container" className="hidden relative md:flex flex-col max-w-full h-full ml-5 mr-5 mt-5 pl-6 pr-4 pt-5 pb-5 bg-white">

        <div id="header_top_deals" className='w-full h-10 flex items-center space-x-3'>

          <div id="text_head" className=''>
            <h1 className='text-black md:text-lg lg:text-xl xl:text-2xl font-bold'>International Top Sellers</h1>
          </div>

          <div id="seeall">
            <p className='text-sm font-semibold text-cyan-700 hover:text-yellow-700 hover:underline cursor-pointer'></p>
          </div>

        </div>

        <div id="slider_buttons" className="flex -ml-4 items-center">

          <div id="left_prev_slider_btn" onClick={() => {
            handlePrevBtn(internationalTopSellers = true)
          }} className={`absolute z-10 flex justify-center items-center w-12 h-28 mt-52 left-0 bg-white shadow-xl opacity-50 hover:opacity-100 cursor-pointer transition-opacity`}>
            <ChevronLeftIcon id="left_prev_arrow_icon" className="absolute h-10 mr-3" />
          </div>

          <div id="right_next_slider_btn" onClick={() => {
            handleNextBtn(internationalTopSellers = true)
          }} className={`absolute z-10 flex items-center justify-center mt-52 w-12 h-28  right-0  bg-white shadow-xl opacity-50 hover:opacity-100 transition-opacity cursor-pointer`}>
            <ChevronRightIcon id="right_next_arrow_icon" className="absolute h-10" />
          </div>

        </div>

        <div id="international_top_sellers_deals" className="flex space-x-4 overflow-x-scroll overflow-y-hidden scrollbar-hide scroll-smooth w-full  h-full">

          {/* Component call with map function*/}
          {InternationalTopSellersImages.map((data, index) => {
            return (
              <TopDeals key={index} topdealsdata={data} isOfferIndicator />
            )
          })}
        </div>

      </div>
      {/* Eleventh top last container, International Top Sellers end */}

    </>
  )
}

export default HomeFeedPcScreen