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
    <>
      <div className="w-full h-[250px] ">
        <div className="flex flex-col w-full gap-1 ">
          <div className="text-wrap pb-12 flex flex-col gap-3">
            {instructions_array?.map((data, index) => (
              <div key={index} className="flex gap-8">
                <p className="rounded-[50%] border-2 w-fit h-fit px-4 bg-[#bcb9b971] text-white text-[30px]">
                  {++index}
                </p>
                <h1 className="text-white text-[26px]">{data}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DialogDetails;
