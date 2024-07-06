import React from 'react';
import {motion} from 'framer-motion'

const Marquee = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='mt-10'>
      <div className='text-black p-2 text-2xl font-bold ' >
        <h1>WHO WE ARE ?</h1>
      </div>
    <div className='bg-[#014d43] w-full rounded-t-lg overflow-hidden tracking-tighter '>
      
      <div className='border-t border-b my-12 text-[18vw] font-extrabold text-white whitespace-nowrap flex gap-10'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='leading-none '>WE ARE DEVELOPERS</motion.h1 >
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='leading-none'>WE ARE DEVELOPERS </motion.h1 >
      </div>
    </div>
    </div>
  );
};

export default Marquee;
