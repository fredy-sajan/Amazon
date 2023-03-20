import Image from "next/image";
import dummyImage from '../../../../assets/product-feed-images/images/amazon_ad.jpg';

function TwoLayoutCard() {
  return (
    <div>
        <div id="two_layout_container" className="w-auto h-[420px]  flex flex-col justify-between">

            <div id="sign_in_alert_card" className="bg-white h-[33%] p-4 shadow-lg">
                <div id="sign_in_alert_text_head">
                    <h2 className="text-black md:text-lg lg:text-xl xl:text-[1.35rem] font-bold">Sign in for the best experience</h2>
                </div>
                <div id="sign_in_button" className="flex items-center justify-center flex-grow mt-3 button rounded-xl">
                    <button className="">Sign in securely</button>
                </div>
            </div>

            <div id="image" className="h-[63%] pl-4 pr-4 cursor-pointer">
                <Image src={dummyImage} alt="" className="h-full object-cover"/>
            </div>

        </div>
    </div>
  )
}

export default TwoLayoutCard