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
import GenerateQRCode from "./DialogComponents/Qr";

const QrCodePopUp = ({ url, reward }: CardsProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full flex justify-center absolute -bottom-0 lg:-bottom-20 px-6">
          <div className=" cursor-pointer flex justify-center bg-[#16a34a] items-center text-white font-bold text-md py-1 px-16 rounded-xl max-w-[270px] min-w-[250px] min-h-[30px] max-h-[30px] lg:max-w-[460px] lg:min-w-[460px] lg:min-h-[39px] lg:max-h-[39px]">
            {`Earn ${reward}  `}
            <img
              src={"/coinIcon.png"}
              alt=""
              width={20}
              height={20}
              className="hidden lg:block"
            />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent
        style={{
          backgroundImage: "url(/bg.svg)",
        }}
        className="flex flex-col gap-0 max-w-[354px] min-w-[354px] lg:w-fi border-0 border-[#152457] min-h-[533] max-h-[533px]"
      >
        <div className="flex flex-col h-full w-full justify-center items-center ">
          <h1 className="text-xl text-center font-bold">
            Scan this Qr Code to open this URL.{" "}
          </h1>
          <div className="border-[3px] border-[#16a34a] p-2 rounded-lg">
            <GenerateQRCode url={url} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QrCodePopUp;
