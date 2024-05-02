/* eslint-disable @next/next/no-img-element */
"use client";

export default function Nav() {
  return (
    <div className="flex justify-between px-5 py-8 bg-[#16A34A]">

      <div className="flex items-center px-60 justify-start">
        <span className="text-[#FFF1F2] text-xl font-bold">Project4+</span>
        <span className="text-[#FFF1F2] px-8 font-medium ">Get Coins</span>
      </div>
      
      <div className="flex items-center px-96 justify-end">  
      
      <div className="flex px-4 bg-black rounded-3xl py-1"> <img src="/money.png" alt="money" /> 
      <span className="text-white px-2">0</span>
      </div>     
        <div className="px-4"> <img src="/support 24.png" alt="support" /></div> 

      </div>
    </div>
  );
}
