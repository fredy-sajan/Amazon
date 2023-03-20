
import Image from 'next/image';

function OneLayoutCard(props) {
    return (
        <div className={`${props.lastCard && "hidden xl:inline"}`}>
            <div id="one_layout_container" className={`w-auto h-[420px] p-4 bg-white overflow-hidden shadow-lg`}>

                <div id="card_contents" className='flex flex-col flex-grow'>

                    <div id="card_header">
                        <h2 className='text-black md:text-lg lg:text-xl xl:text-2xl font-bold pb-2'>
                            {props.title}
                        </h2>
                    </div>

                    <div id="card_body" className='2xl:h-[19rem] xl:h-[18rem] md:h-[18rem] flex flex-col flex-grow bg-fuchsia-200'>

                        <div id="image" className='h-full cursor-pointer'>
                            <Image src={props.isMap ? props.data.imageUrl : props.imageUrl} alt="" className='h-full object-cover' />
                        </div>

                    </div>

                    <div id="card_footer" className='mt-4  '>
                        <h2 className='text-sm font-semibold text-cyan-700 hover:text-yellow-700 hover:underline cursor-pointer'>{props.learnMore ? 'Learn more' : 'Shop now'}</h2>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default OneLayoutCard