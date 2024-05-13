/* eslint-disable @next/next/no-img-element */
"use client";

import { CardsProps } from "@/types/cardsTypes";

export default function OfferCard({
  reward,
  name,
  image,
  short_description,
  os,
  favorite,
}: CardsProps) {
  return (
    <div
      className=" bg-[#8e8f8e23] max-w-[360px] lg:max-w-[420px] min-w-[300px] lg:min-w-[360px] min-h-[55px] p-2 gap-2 my-1 border-gray-400 border-2 flex items-center justify-between cursor-pointer flex-row  rounded-xl relative " // Added 'relative' class
    >
      <img
        className={`absolute -top-3 -right-2 hidden ${
          favorite == 1 && "block"
        } `}
        src="/fire.png"
        alt="Fire"
      />
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
        <div className="flex flex-col w-full">
          {/** The Name and the short description */}
          <div className="flex flex-col w-[270px] lg:w-[300]">
            <div className="font-bold text-md text-black   line-clamp-1">
              {name}
            </div>
            <div className="font-medium text-md text-black  line-clamp-1">
              {short_description}
            </div>
          </div>
          {/** The Device icon and the rewards amound */}
          <div className="flex flex-row items-center w-full justify-end gap-2">
            <div className="w-fit rounded-3xl py-1 px-1  lg:px-2">
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
            <div className="flex justify-center items-center bg-[#16a34a] px-3 text-white font-bold lg:text-md text-sm rounded-md  min-w-[90px] min-h-[25px] max-h-[25px]  lg:min-w-[101px] lg:min-h-[30px] lg:max-h-[30px]">
              {reward}{" "}
              <img src={"/coinIcon.png"} alt="" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
