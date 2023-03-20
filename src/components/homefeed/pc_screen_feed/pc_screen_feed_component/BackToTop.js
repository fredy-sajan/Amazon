import React from 'react'

function BackToTop() {

    // Scroll to top function
    let scrollTop = () => {
        let rootElement = document.documentElement;

        rootElement.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <div>
            <div id="back_to_top_container"
                onClick={scrollTop}
                className='hidden w-full h-[55px] bg-slate-600 text-white md:flex items-center justify-center cursor-pointer'
            >
                <div id="header_text">
                    <h1 className='text-md font-bold'>Back to top</h1>
                </div>
            </div>
        </div>
    )
}

export default BackToTop