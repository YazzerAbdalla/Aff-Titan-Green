import { Dispatch, Fragment, SetStateAction } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

// Change "All" to "All Platforms" or any other label you prefer
export const platforms = ["All", "Free", "Mobile App"];

interface SortProps {
  selectedSortType: string;
  setSelectedSortType: Dispatch<SetStateAction<string>>;
}

export default function FreeAllSort({
  selectedSortType,
  setSelectedSortType,
}: SortProps) {
  return (
    <div className="flex items-center mt-3 justify-center rounded-lg space-x-4">
      {/* button*/}
      <Listbox value={selectedSortType} onChange={setSelectedSortType}>
        <div className="relative mt-1 min-w-[8.8rem] ">
          <Listbox.Button
            className="relative w-full cursor-default rounded-lg text-gray-950 py-3 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-[#16a34a] focus-visible:ring-2 focus-visible:ring-[#16a34a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#16a34a] sm:text-sm"
            style={{
              background: "#FFFFFF",
            }}
          >
            <span className="block truncate">{selectedSortType}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-[#16a34a]"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-[1000] top-0 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-[#16a34a] focus:outline-none sm:text-sm">
              {platforms.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-[#16a34a]" : "text-gray-900"
                    }`
                  }
                  value={option}
                  disabled={option === "Device Type"}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#16a34a] font-solid">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
