import Image from "next/image";

function FourLayoutCard(props) {
  return (
    <div>
      <div id="four_layout_container" className='w-auto h-[420px] p-4 bg-white shadow-xl'>

        <div id="card_contents" className="flex flex-col flex-grow">

          <div id="card_header">
            <h2 className="text-black md:text-lg lg:text-xl xl:text-2xl font-bold pb-2">
              {props.title}
            </h2>
          </div>

          <div id="card_body" className="h-full flex flex-col flex-grow text-xs">

            <div id="a_section" className="flex h-2/6">

              <div id="first-a" className="h-full w-2/4 mr-1 cursor-pointer">

                <div id="image" className="">
                  <Image src={props.isDynamic ? props.data.one.imageUrl : props.imgUrlOne} className="h-full object-contain" alt="" />
                </div>

                <div id="image_text_head">
                  <span>Get up to ₹2000 off + 2% back on flights</span>
                </div>

              </div>

              <div id="second-a" className="h-full w-2/4 cursor-pointer">

                <div id="image" className="">
                  <Image src={props.isDynamic ? props.data.two.imageUrl : props.imgUrlOne} className="h-full object-cover" alt="" />
                </div>

                <div id="image_text_head" className="">
                  <span>
                    Zero payment gateway charges
                  </span>
                </div>
              </div>

            </div>

            <div id="b_section" className="flex h-2/6 mt-3 pb-3">

              <div id="first-a" className="h-full w-2/4 mr-1 cursor-pointer">

                <div id="image" className="">
                  <Image src={props.isDynamic ? props.data.three.imageUrl : props.imgUrlOne} className="h-full object-contain" alt="" />
                </div>

                <div id="image_head">
                  <span>Get flat 10% back on bus tickets</span>
                </div>

              </div>

              <div id="second-a" className="h-full w-2/4 cursor-pointer">

                <div id="image" className="">
                  <Image src={props.isDynamic ? props.data.four.imageUrl : props.imgUrlOne} className="h-full object-contain" alt="" />
                </div>

                <div id="image_head_text">
                  <span>
                    Products for your travel needs
                  </span>
                </div>

              </div>

            </div>

          </div>

          <div id="card_footer" className="mt-4 md:mt-0 xl:m-1 2xl:mt-0 text-cyan-700 hover:text-yellow-700 hover:underline cursor-pointer">
            <h2 className="text-sm font-semibold">
              See more
            </h2>
          </div>

        </div>
      </div>
    </div>
  )
}

export default FourLayoutCard