/* eslint-disable @next/next/no-img-element */
import { CardsProps } from "@/types/cardsTypes";
import Image from "next/image";
import React from "react";

const DialogNewHeader = ({
  image,
  name,
  short_description,
  description,
}: CardsProps) => {
  return (
    <div className="w-full py-4 ">
      <div className="flex items-center  gap-2">
        <img
          className="lg:max-w-[100px] lg:min-w-[100px] lg:max-h-[100px] lg:min-h-[100px] rounded-[20px] min-w-[100px] max-w-[100px]  min-h-[100px] max-h-[100px] py-1"
          src={image}
          alt=""
          width={1000}
          height={1000}
        />
        <div className="flex flex-col">
          <h5 className=" text-[20px] lg:text-[24px] font-[600] tracking-tight text-[#ffff] line-clamp-1">
            {name}
          </h5>
          <p className="mb-1 text-[12px] lg:text-[18px] font-[600] text-[#ffff] line-clamp-1">
            {short_description ? short_description : description}
          </p>
          <div className=" w-fit border-[1px]  border-[#575859] rounded-3xl py-[1px] px-5 lg:px-10 text-[#575859]  justify-start">
            <h1>Free</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogNewHeader;
