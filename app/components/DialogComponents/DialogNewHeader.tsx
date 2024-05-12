/* eslint-disable @next/next/no-img-element */
import { CardsProps } from "@/types/cardsTypes";
import Image from "next/image";
import React from "react";

const DialogNewHeader = ({
  image,
  name,
  short_description,
  description,
  os,
  reward,
}: CardsProps) => {
  return (
<div className="w-full py-4">
  <div className="flex items-center gap-2">
    <img
      className="lg:max-w-[100px] lg:min-w-[100px] lg:max-h-[100px] lg:min-h-[100px] rounded-[20px] min-w-[100px] max-w-[100px]  min-h-[100px] max-h-[100px] py-1"
      src={image}
      alt=""
      width={1000}
      height={1000}
    />
    <div className="flex flex-col flex-grow"> {/* Added flex-grow to allow flex items to grow */}
      <h5 className="text-[20px] lg:text-[24px] font-[600] tracking-tight text-black line-clamp-1">
        {name}
      </h5>
      <p className="mb-1 text-[12px] lg:text-[18px] font-[600] text-black line-clamp-1">
        {short_description ? short_description : description}
      </p>

      <div className="flex justify-start mx-2 space-x-4  py-1"> {/* Use justify-between to push items to the start and end */}
        
        
      <div className="w-fit border-[1px] border-green-500 rounded-3xl py-1 px-1  lg:px-2">
          <img
            src={
              os?.toLowerCase() === "web"
                ? "/desktop.svg"
                : os?.toLowerCase() === "android"
                ? "/android.png"
                : "/ios-icon.svg"
            }
            alt="icon"
            width={20}
            height={20}
          />
        </div>
        <div className="flex justify-center items-center  px-3 text-gray-500 border-[1px] border-gray-600 font-bold lg:text-md text-sm rounded-md">
            {reward}
            <img src={"/coinIcon.png"} alt="" width={20} height={20} />
          </div>

        
       
      </div>
    </div>
  </div>
</div>

  );
};

export default DialogNewHeader;
