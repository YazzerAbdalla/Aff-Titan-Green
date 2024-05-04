/* eslint-disable @next/next/no-img-element */
"use client";

import { CardsProps } from "@/types/cardsTypes";
import Image from "next/image";

export default function OfferCard() {
  return (
    <div
      className=" border-2 max-w-[450px] min-w-[320px] p-2 gap-2 border-[#638CA7] flex cursor-pointer flex-row overflow-hidden rounded-xl"
      style={{
        background:
          "linear-gradient(104.55deg, #B0D8F2 -2.39%, #68A1C7 35.16%, #5E9CC4 56.34%, #548BAF 68.21%, #568FB5 93.91%, #42789B 93.91%)",
      }}
    >
      <div className="h-[52px] w-[52px]">
        <img
          src={
            "https://play-lh.googleusercontent.com/C5UQXHtmuNVkhOavIEPMMbDqS2tO9keKcfR7QQ4NlNfF3_gfWUhkFuqrsuNpylGIcqM=s180"
          }
          alt="Sunset in the mountains"
          width={350}
          height={50}
          typeof="lazy"
        />
      </div>
      <div className="font-bold text-md  text-[#000000] mb-2 line-clamp-1">
        {"Easy Bucks: Earn Money Quickly"}
      </div>
      <div className="flex justify-end">
        <div
          className="flex justify-center items-center  text-[#180934] font-bold  text-md rounded-xl"
          style={{
            background:
              "linear-gradient(104.55deg, #42789B 10%, #68A1C7 35.16%, #5E9CC4 56.34%, #548BAF 68.21%, #568FB5 93.91%, #42789B 93.91%)",
          }}
        >
          {"2,765"}
        </div>
      </div>
    </div>
  );
}
