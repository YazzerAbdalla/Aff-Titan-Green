/* eslint-disable @next/next/no-img-element */
"use client";

import { CardsProps } from "@/types/cardsTypes";

export default function OfferCard({
  reward,
  name,
  image,
  short_description,
  os,
}: CardsProps) {
  return (
    <div
      className=" bg-[#8e8f8e23] max-w-[450px] min-w-[360px] min-h-[55px] p-2 gap-2 my-1 border-gray-400 border-2 flex items-center justify-between cursor-pointer flex-row overflow-hidden rounded-xl " // Added 'relative' class
    >
      <div className="flex flex-row gap-4">
        {/** The Card image*/}
        <div className="min-h-[52px] max-h-[52px] min-w-[52px] max-w-[52px]">
          <img
            src={image}
            alt="Sunset in the mountains"
            width={350}
            height={50}
            typeof="lazy"
          />
        </div>
        <div className="flex flex-col">
          {/** The Name and the short description */}
          <div className="flex flex-col min-w-[360px] ">
            <div className="font-bold text-md text-black   line-clamp-1">
              {name}
            </div>
            <div className="font-medium text-md text-black  line-clamp-1">
              {short_description}
            </div>
          </div>
          {/** The Device icon and the rewards amound */}
          <div className="flex flex-row items-center justify-end gap-4">
            <div className="w-fit border-[2px] rounded-3xl py-1 px-1  lg:px-2">
              <img
                src={
                  os?.toLowerCase() === "web"
                    ? "/desktop.svg"
                    : os?.toLowerCase() === "android"
                    ? "/android.png"
                    : "/ios-icon.svg"
                }
                className="min-w-6 max-w-6 max-h-6 min-h-6 "
                alt="icon"
                width={200}
                height={200}
              />
            </div>
            <div className="flex justify-center items-center bg-[#16a34a] px-3 text-white font-bold lg:text-md text-sm rounded-md max-w-[90px] min-w-[90px] min-h-[25px] max-h-[25px] lg:max-w-[101px] lg:min-w-[101px] lg:min-h-[30px] lg:max-h-[30px]">
              {reward}{" "}
              <img src={"/coinIcon.png"} alt="" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
