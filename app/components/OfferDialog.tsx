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
  campaign_id,
  icon,
  name,
  short_description,
  description,
  instructions,
  instructions_array,
  amount,
  campaign_os_target,
  url,
}: CardsProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer ">
          {/** OfferCard */}
          <OfferCard amount={amount} icon={icon} name={name} />
        </div>
      </DialogTrigger>
      <DialogContent
        style={{ backgroundColor: "#16a34a" }}
        className="flex flex-col bg-[#16a34a] gap-0 w-[480px] lg:max-w-[531.99px]  lg:min-w-[534px] border-0 border-[#152457] min-h-[533] max-h-[533px]  lg:min-h-[533px] lg:max-h-[533px] overflow-y-scroll"
      >
        <div className="relative">
          <DialogNewHeader
            url=""
            amount={amount}
            campaign_id={campaign_id}
            campaign_os_target={campaign_os_target}
            description={description}
            icon={icon}
            short_description={short_description}
            name={name}
          />
          <DialogDetails
            url=""
            amount={amount}
            campaign_id={campaign_id}
            campaign_os_target={campaign_os_target}
            description={description}
            instructions_array={instructions_array}
            instructions={instructions}
            icon={icon}
            short_description={short_description}
            name={name}
          />
          <DialogFooter>
            <div className="w-full flex justify-center absolute bottom-6 lg:-bottom-16 px-6">
              <a
                target="_blank"
                className=" flex justify-center items-center text-[#180934] font-bold text-md py-1 px-16 rounded-xl max-w-[450px] min-w-[450px] min-h-[30px] max-h-[30px] lg:max-w-[460px] lg:min-w-[460px] lg:min-h-[39px] lg:max-h-[39px]"
                style={{
                  background:
                    "linear-gradient(104.55deg, #42789B 10%, #68A1C7 35.16%, #5E9CC4 56.34%, #548BAF 68.21%, #568FB5 93.91%, #42789B 93.91%)",
                }}
                href={url}
              >
                {`Earn ${amount} Coins `}
                {/* <img src={"/coinIcon.png"} alt="" width={20} height={20} /> */}
              </a>
            </div>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OfferDialog;
