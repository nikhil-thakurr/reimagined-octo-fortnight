import React, { useEffect, useState } from "react";

const Footer = () => {
  const [angle,setAngle]=useState();

    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let x=e.clientX;
            let y=e.clientY;

            let dx = x-window.innerWidth/2;
            let dy= y-window.innerHeight/2;
            
            let ang = Math.atan2(dy,dx)*(180/Math.PI);
            setAngle(ang);
        })
    },[])
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".3"  className="w-full bg-[#bde13b] p-10 relative">
      <div data-scroll data-scroll-section data-scroll-speed=".3" >
      <div className="text-[12vw] font-bold leading-none mt-40 items-center justify-center flex flex-col tracking-tighter">
        <h1>READY </h1>
        <h1>TO START </h1>
        <h1>THE PROJECT ?</h1>
      </div>

      <div className="items-center flex justify-center mt-8 ">
        <button className="px-6 py-5 bg-black text-white rounded-full flex  items-center gap-10">
          START THE PROJECT
          <div className="w-2 h-2 bg-white flex rounded-full"></div>
        </button>
        
      </div>
      </div>

      <div>
      <div className='absolute flex gap-10 -translate-x-[50%] -translate-y-[10%]   top-1/2 left-1/2'>
                    <div className='w-[12vw] h-[12vw] bg-white rounded-full flex justify-center items-center'>
                        <div className='w-[8vw] h-[8vw] bg-black rounded-full flex justify-center items-center'>
                            <div className='w-full h-4 ' style={{transform:`rotate(${angle-180}deg)`}}>
                                   <div className='w-[1.5vw] h-[1.5vw] bg-white  rounded-full '></div>
                            </div>
                             
                        </div>
                    </div>
                    <div className='w-[12vw] h-[12vw] bg-white rounded-full flex justify-center items-center'>
                        <div className='w-[8vw] h-[8vw] bg-black rounded-full flex justify-center items-center'>
                            <div className='w-full h-4 ' style={{transform:`rotate(${angle-180}deg)`}}>
                                   <div className='w-[1.5vw] h-[1.5vw] bg-white  rounded-full '></div>
                            </div>
                             
                        </div>
                    </div>
                </div>
      </div>
    </div>
  );
};

export default Footer;
