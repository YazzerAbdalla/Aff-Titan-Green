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
        <p className="text-gray-600 py-6">
          {" "}
          <span className="text-xl text-black py-1">Description:</span>
          <br />
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

        <div className="mb-6">
          {goals &&
            goals.map(({ payout, name }, index) => (
              <>
                <div key={index} className="w-full mt-2 ">
                  <div className="flex gap-3">
                    <p className="rounded-full border-2 w-fit h-fit px-4 bg-[#16a34a] text-black text-2xl">
                      {index + 1}
                    </p>
                    {/* <h1 className="text-black text-xl">{payout}</h1> */}
                    <h1 className="text-black text-xl">{name}</h1>
                  </div>
                  <div className="flex justify-end">
                    <button className="bg-[#16a34a] flex items-center text-white px-4 rounded-xl py-1 text-xl ">
                      {reward}
                      <img
                        src={"/coinIcon.png"}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </button>
                  </div>
                </div>
                <hr className="bg-[#e5e5e6] mt-2" />
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DialogDetails;
