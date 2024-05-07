"use client";
import { IoIosMale } from "react-icons/io";
import { IoIosFemale } from "react-icons/io";

export default function surveyPage() {
  return (
    <div className="flex justify-center   py-8 lg:py-14">
      <div className="grid lg:grid-cols-2    gap-4">
        {/* First input */}
        <div className="relative px-2">
          <label htmlFor="birthDate">Year of birth</label>
          <input
            type="date"
            id="birthDate"
            className="cursor-pointer bg-gray-50 border-2 border-[#16A34A] text-gray-900 text-md rounded-lg focus:ring-[#16A34A] focus:border-[#16A34A] block w-full px-7 py-2.5"
            placeholder="Select date "
          />
        </div>
        {/* Second input */}
        <div className="relative px-2">
          <label htmlFor="nextDate">ZIP Code</label>
          <input className="bg-gray-50 border-2 border-[#16A34A] text-gray-900 text-md rounded-lg focus:ring-v focus:border-[#16A34A] block w-full px-7 py-2.5" />
        </div>
        {/* Gender */}
        <div className="flex-grow  ">
          <div className="flex flex-col py-5  items-center">
            <label htmlFor="gender" className="mt-0   text-md font-medium  mr-[18.5rem]">
              Gender
            </label>
            <div
              className="inline-flex space-x-9 py-3  rounded-2xl shadow-sm"
              role="group"
            >
              <button
                id="gender"
                type="button"
                className="inline-flex items-center px-10 py-4 text-md font-medium text-secondary-foreground bg-primary-foreground border border-border rounded-xl hover:bg-green-100 hover:text-[#16A34A] focus:z-10 focus:ring-2 focus:ring-ring focus:text-[#16A34A] focus:bg-green-100"
              >
                <div className="text-xl px-2">
                  <IoIosMale />
                </div>
                Male
              </button>

              <button
                type="button"
                className="inline-flex items-center px-10 py-4 text-md font-medium text-secondary-foreground bg-primary-foreground border border-border rounded-xl hover:bg-green-100 hover:text-[#16A34A] focus:z-10 focus:ring-2 focus:ring-ring focus:text-[#16A34A] focus:bg-green-100"
              >
                <div className="text-xl px-2">
                  <IoIosFemale />
                </div>
                Female
              </button>
            </div>
          </div>
          {/* Submit Information button */}
          <button className="  text-center    bg-primary py-4 px-10 font-semibold text-primary-foreground rounded-2xl text-xl ">
            Submit Information
          </button>
        </div>
      </div>
    </div>
  );
}
