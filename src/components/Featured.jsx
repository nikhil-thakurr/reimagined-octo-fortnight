import React from 'react'

const Featured = () => {
  return (
    <div className='w-full '>

            <div className='text-6xl mt-24 p-10'><h1>Featured Projects</h1></div>
            <div className='flex border-t-2 border-gray-200 p-10 gap-5 '>

               <div className='w-1/2 bg-red-600 h-[75vh] rounded-2xl'></div>

               <div className='w-1/2 bg-green-600 h-[75vh] rounded-2xl'></div>

        </div>

    </div>
  )
} 

export default Featured