/* eslint-disable @next/next/no-img-element */
import { CardsProps } from "@/types/cardsTypes";
import React from "react";

const DialogDetails = ({
  name,
  instructions,
  instructions_array,
  goals,
  description,
  reward,
}: CardsProps) => {
  const hrStyle: React.CSSProperties = { borderColor: "black" };

  return (
    <div className="w-full h-[250px] overflow-y-auto">
      <div className="flex flex-col w-full gap-1">
      <p className="text-gray-600 py-6"> <span className="text-xl text-black py-1">Description:</span><br />
      {description && description}
      </p>
                 
        <div className="text-wrap pb-12 flex flex-col gap-3 py-5 w-full border-t-[15px]  border-[#16a34a] rounded-[14px] p-6">
        <span className="text-xl text-black py-1">Instructions:</span>
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
       
        {goals &&
          goals.map((payout, index) => (
            <div
              key={index}
              className="w-full border-t-[15px]  border-[#16a34a] rounded-[14px] p-6"
            >
              <span className="text-xl font-semibold text-black ">
              goals : 
              </span>

              <p className="rounded-full border-2 w-fit h-fit px-4 bg-[#16a34a] text-black text-2xl">
                {index + 1}
              </p>
              {/* <h1 className="text-black text-xl">{payout}</h1> */}
              <h1 className="text-black text-xl">{name}</h1>
              <h1 className="text-black text-xl">{reward}</h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DialogDetails;
