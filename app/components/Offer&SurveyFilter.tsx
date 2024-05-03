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
    <div className="w-full mt-[150px] max-w-md px-2 sm:px-0 mx-auto justify-center ">
      <Tab.Group
        defaultIndex={0}
        onChange={(index) => {
          // Execute additional code here based on the selected tab index
          if (index === 1) {
            setFilter("survey");
          } else if (index === 0) {
            setFilter("offer");
          }
        }}
      >
        <Tab.List className="flex space-x-1 rounded-xl p-1 bg-[#16a34a]">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-xl py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-#592a66 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white text-#0F4889 shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-#0F4889"
              )
            }
          >
            Offer
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-xl py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-#592a66 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white text-#290233 shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
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
