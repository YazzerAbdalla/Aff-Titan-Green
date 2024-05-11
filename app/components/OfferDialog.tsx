/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import { Dialog } from "@radix-ui/react-dialog";

import {
  Dialog as RadixDialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import DialogNewHeader from "./DialogComponents/DialogNewHeader";
import { CardsProps } from "@/types/cardsTypes";
import DialogDetails from "./DialogComponents/DialogDetails";
import OfferCard from "./OfferCard";

const OfferDialog = ({
  id,
  image,
  name,
  short_description,
  description,
  instructions,
  reward,
  os,
  url,
  goals,
  points,
}: CardsProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer ">
          {/** OfferCard */}
          <OfferCard
            reward={reward}
            image={image}
            name={name}
            date={""}
            points={points}
          />
        </div>
      </DialogTrigger>
      <DialogContent
        style={{
          backgroundImage: "url(/bg.svg)",
        }}
        className="flex flex-col gap-0 max-w-[354px] min-w-[354px] lg:max-w-[531.99px] lg:min-w-[534px] border-0 border-[#152457] min-h-[533] max-h-[533px] lg:min-h-[533px] lg:max-h-[533px]"
      >
        <div className="relative">
          <DialogNewHeader
            reward={reward}
            id={id}
            os={os}
            description={description}
            image={image}
            short_description={short_description}
            name={name}
            date={""}
            points={points}
          />
          <DialogDetails
            reward={reward}
            id={id}
            os={os}
            description={description}
            instructions={instructions}
            image={image}
            short_description={short_description}
            name={name}
            date={""}
            points={points}
          />
          <DialogFooter>
            <div className="w-full flex justify-center absolute -bottom-0 lg:-bottom-20 px-6">
              <a
                target="_blank"
                className=" flex justify-center bg-[#16a34a] items-center text-white font-bold text-md py-1 px-16 rounded-xl max-w-[270px] min-w-[250px] min-h-[30px] max-h-[30px] lg:max-w-[460px] lg:min-w-[460px] lg:min-h-[39px] lg:max-h-[39px]"
                href={url}
              >
                {`Earn ${reward}  `}
                <img
                  src={"/coinIcon.png"}
                  alt=""
                  width={20}
                  height={20}
                  className="hidden lg:block"
                />
                
              </a>
            </div>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OfferDialog;
