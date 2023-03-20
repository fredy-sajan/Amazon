import React from 'react'

function BottomSignInBtn() {
  return (
    <>
    <div id="sign_in_container" className='hidden  w-full h-full md:flex flex-col items-center justify-center mt-5 pt-10 pb-10 bg-white'>
        <div id="first_text_head" className='text-md font-medium'>
            <p>See personalized recommendations</p>
        </div>
        <div id="sign_in_button" className='max-w-[300px]  w-full mt-1 mb-2'>
            <button className='w-full h-[37px] rounded-lg font-semibold buttonBackground'>Sign in</button>
        </div>
        <div id="sign_up_navigator" className='flex text-md items-center'>
            <p>New customer?</p>
            <p className='ml-2 text-md font-semibold text-cyan-700 hover:text-yellow-700 hover:underline cursor-pointer'>Start here</p>
        </div>
    </div>
    </>
  )
}

export default BottomSignInBtn