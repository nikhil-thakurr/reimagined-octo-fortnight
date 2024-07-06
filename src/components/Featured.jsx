import React from 'react'

const Featured = () => {
  return (
    <div className='w-full '>

      <div className='text-6xl mt-24 p-10'><h1>Featured Projects</h1></div>
      <div className='flex border-t-2 border-gray-200 p-10 gap-5 '>

        <div className='w-1/2  h-[65vh] rounded-2xl'>
          <img className='w-full h-full bg-cover' src="https://img.freepik.com/free-vector/man-sysadmine-computer-programmer-working-computer_575670-70.jpg?size=626&ext=jpg&ga=GA1.1.1853283317.1717156778&semt=ais_hybrid" alt="pic" /></div>

        <div className='w-1/2  h-[65vh] rounded-2xl'>
          <img className='w-full h-full' src="https://img.freepik.com/free-vector/gamer-playing-with-computer_52683-15038.jpg?size=626&ext=jpg&ga=GA1.1.1853283317.1717156778&semt=ais_hybrid" alt="" /></div>

      </div>

    </div>
  )
}

export default Featured