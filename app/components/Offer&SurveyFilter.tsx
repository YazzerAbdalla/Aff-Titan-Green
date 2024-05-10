import { Tab } from "@headlessui/react";
import { Dispatch, SetStateAction, useEffect } from "react";

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function OfferSurveyFilter({
  setFilter,
}: {
  setFilter: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="w-full mt-[150px] px-2 sm:px-0 mx-auto flex justify-center ">
      <Tab.Group
        defaultIndex={0}
        onChange={(index) => {
          // Execute additional code here based on the selected tab index
          if (index === 1) {
            setFilter("Survey");
          } else if (index === 0) {
            setFilter("offer");
          }
        }}
      >
        <Tab.List className="flex   lg:w-[978px] w-[400px] space-x-1 rounded-xl p-1 bg-[#8e8f8e23]">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-xl py-4.5 text-md font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-#592a66 focus:outline-none focus:ring-2",
                selected
                  ? "bg-[#16a34a] text-#290233 shadow"
                  : "text-black hover:bg-white/[0.12] hover:text-gray-500"
              )
            }
          >
            Offer
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-xl py-4 text-md font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-#592a66 focus:outline-none focus:ring-2",
                selected
                  ? "bg-[#16a34a] text-#290233 shadow"
                  : "text-black hover:bg-white/[0.12] hover:text-gray-500"
              )
            }
          >
            Survey
          </Tab>
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
