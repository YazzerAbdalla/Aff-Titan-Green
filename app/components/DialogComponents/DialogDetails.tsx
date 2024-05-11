/* eslint-disable @next/next/no-img-element */
import { CardsProps } from "@/types/cardsTypes";
import React from "react";

const DialogDetails = ({
  name,
  description,
  instructions,
  instructions_array,
}: CardsProps) => {
  const hrStyle: React.CSSProperties = { borderColor: "black" };

  return (
    <div className="w-full h-[250px] overflow-y-auto">
      <div className="flex flex-col w-full gap-1">
        <div className="text-wrap pb-12 flex flex-col gap-3">
          {instructions_array &&
            instructions_array.map((data, index) => (
              <div key={index} className="flex gap-8">
                <p className="rounded-full border-2 w-fit h-fit px-4 bg-[#16a34a] text-black text-2xl">
                  {index + 1}
                </p>
                <h1 className="text-black text-xl">{data}</h1>
              </div>
            ))}
          {!instructions_array && (
            <div className="flex flex-col  gap-8">
              <div className="flex gap-3">
                <p className="rounded-full border-2 w-fit h-fit px-4 bg-[#16a34a] text-white text-2xl">
                  {1}
                </p>
                <h1 className="text-black text-xl">{instructions}</h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DialogDetails;
