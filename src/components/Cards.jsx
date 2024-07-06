import React from 'react'

const Cards = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full p-10 flex gap-5 border-2'>

        <div className='w-1/2 h-[50vh] bg-[#014D43] rounded-xl relative flex justify-center items-center border-2' >

           

            <div className=''> <h1 className='text-[#CDEA68] text-5xl font-bold'>Nikhil</h1></div>
            <div className=' absolute border-2 border-[#CDEA68] text-[#CDEA68] px-4 py-2 rounded-full left-10 bottom-10'>&copy; 2023-2024</div>

        </div>

        <div className='w-1/2 flex gap-5 '>
            <div className='w-1/2 bg-[#212121]  rounded-xl flex justify-center items-center'  >
                <div className=''><h1 className='text-white font-bold text-4xl'>Clutch</h1></div>
            </div>
            <div className='w-1/2 bg-[#212121]  rounded-xl flex justify-center items-center'  >
                <div className=''><h1 className='text-white font-bold text-4xl'>Build</h1></div>
            </div>
        </div>


    </div>
  )
}

export default Cards