/* eslint-disable @next/next/no-img-element */
"use client";

import { CardsProps } from "@/types/cardsTypes";

export default function OfferCard({ reward, name, image }: CardsProps) {
  return (
    <div
      className="border-2 max-w-[450px] min-w-[320px] mx-2 p-2 gap-2 border-[#638CA7] flex items-center justify-between cursor-pointer flex-row overflow-hidden rounded-xl relative" // Added 'relative' class
      style={{
        background:
          "linear-gradient(104.55deg, #B0D8F2 -2.39%, #68A1C7 35.16%, #5E9CC4 56.34%, #548BAF 68.21%, #568FB5 93.91%, #42789B 93.91%)",
      }}
    >
      <div className="flex flex-row items-center gap-4">
        <div className="h-[52px] w-[52px]">
          <img
            src={image}
            alt="Sunset in the mountains"
            width={350}
            height={50}
            typeof="lazy"
          />
        </div>
        <div className="font-bold text-md text-[#000000] mb-2 line-clamp-1">
          {name}
        </div>
      </div>
      <div className="flex-grow"></div>
      <div className="flex justify-center items-center bg-white px-3 text-[#180934] font-bold lg:text-md text-sm rounded-md absolute bottom-1 right-1 max-w-[90px] min-w-[90px] min-h-[25px] max-h-[25px] lg:max-w-[101px] lg:min-w-[101px] lg:min-h-[30px] lg:max-h-[30px]">
        {reward} <img src={"/coinIcon.png"} alt="" width={20} height={20} />
      </div>
    </div>
  );
}
