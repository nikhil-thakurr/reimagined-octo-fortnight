import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#bde13b] p-10">
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
  );
};

export default Footer;
