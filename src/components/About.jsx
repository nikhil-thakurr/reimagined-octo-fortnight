import React from 'react'
import { LuDot } from "react-icons/lu";
import pic from '../Images/coding.png'

const About = () => {
  return (
    <div  className='bg-[#cdea68] w-full rounded-3xl -mt-6' >


      <div className='w-3/4 p-12'>
        <h1 className='font-sans text-3xl leading-10'>As developers, our work is not merely about writing code that works. It’s about crafting code that is clean, efficient, and maintainable, understanding that our primary audience is other developers who will read and build upon our work.</h1>

      </div>

      <div className='border-t-2 border-b-2 border-gray-800 flex p-2'>
        <div className='w-1/2'>
          <h2 className='p-12'>What you can expect:</h2>
        </div>
        <div className='w-1/2 flex'>
          <div className='w-1/2 mt-8'>
            <h1>
              We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.
            </h1>
            <h1 className='mt-12'>
              We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
            </h1>

          </div>
          <div className='w-1/2 my-20 ml-40 '>
          S:
            <h1 className='underline mt-4'>
                <ul>Instagram</ul>
                <ul>Behance</ul>
                <ul>Facebook</ul>
                <ul>Linkedin</ul>
                </h1>
          </div>
        </div>
      </div>


      <div className='flex'>
        <div className='p-8 w-1/2 '>
          <h1 className='text-6xl '>Our approach:</h1>
          <button className='bg-black text-white px-4 py-1 rounded-full flex mt-4 font-bold ml-4 items-center'>Read More  <LuDot  className='ml-4 text-5xl' /></button>
        </div>
        <div className=' w-1/2 ml-20'>
          <img src={pic} alt="" />
        </div>
      </div>


    </div>
  )
}

export default About