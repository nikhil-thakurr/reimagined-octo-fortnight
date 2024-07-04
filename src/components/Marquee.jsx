import React from 'react';

const Marquee = () => {
  return (
    <div className='bg-[#014d43] h-[30vw] w-full rounded-t-lg overflow-x-auto'>
      <div className='text-white p-2'>
        <h1>WHO WE ARE ?</h1>
      </div>
      <div className='border-t border-b mt-6 text-[18vw] font-extrabold text-white whitespace-nowrap flex'>
        <h1 className=''>WE ARE DEVELOPERS</h1>
      </div>
    </div>
  );
};

export default Marquee;
