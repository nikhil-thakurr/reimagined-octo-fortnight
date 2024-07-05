import React, { useEffect, useState } from 'react';
import img from '../Images/OchiImg.jpg';

const Eyes = () => {

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
        <div className='w-full h-screen overflow-hidden' >
            <div
                className='w-full h-full bg-cover bg-center relative'
                style={{ backgroundImage: `url(${img})` }}
            >
                <div className='absolute flex gap-10 -translate-x-[50%] -translate-y-[100%]   top-1/2 left-1/2'>
                    <div className='w-[15vw] h-[15vw] bg-white rounded-full flex justify-center items-center'>
                        <div className='w-[10vw] h-[10vw] bg-black rounded-full flex justify-center items-center'>
                            <div className='w-full h-4 ' style={{transform:`rotate(${angle-180}deg)`}}>
                                   <div className='w-[1.5vw] h-[1.5vw] bg-white  rounded-full '></div>
                            </div>
                             
                        </div>
                    </div>
                    <div className='w-[15vw] h-[15vw] bg-white rounded-full flex justify-center items-center'>
                        <div className='w-[10vw] h-[10vw] bg-black rounded-full flex justify-center items-center'>
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

export default Eyes;
