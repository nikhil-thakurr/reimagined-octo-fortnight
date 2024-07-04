import React from 'react';
import img from '../Images/OchiImg.jpg';

const Eyes = () => {

    

    return (
        <div className='w-full h-screen overflow-hidden'>
            <div
                className='w-full h-full bg-cover bg-center relative'
                style={{ backgroundImage: `url(${img})` }}
            >
                <div className='absolute flex gap-10 -translate-x-[50%] -translate-y-[100%]   top-1/2 left-1/2'>
                    <div className='w-[13vw] h-[13vw] bg-white rounded-full flex justify-center items-center'>
                        <div className='w-[8vw] h-[8vw] bg-black rounded-full flex justify-center items-center'>
                            <div className='w-full h-4 '>
                                   <div className='w-[2vw] h-[2vw] bg-white  rounded-full '></div>
                            </div>
                             
                        </div>
                    </div>
                    <div className='w-[13vw] h-[13vw] bg-white rounded-full flex justify-center items-center'>
                        <div className='w-[8vw] h-[8vw] bg-black rounded-full flex justify-center items-center'>
                        <div className='w-full h-4 '>
                                   <div className='w-[2vw] h-[2vw] bg-white  rounded-full '></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Eyes;
