/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { detectDeviceType } from "../(Fun)/DetectDeviceType";
import { useState } from "react";

interface NavProps {
  points: string | number;
  selectedDeviceSortType: string;
  setSelectedDeviceSortType: React.Dispatch<React.SetStateAction<string>>;
}
export default function Nav({
  points,
  selectedDeviceSortType,
  setSelectedDeviceSortType,
}: NavProps) {
  let deviceType = detectDeviceType(navigator.userAgent);
  const [deviceTypeSortMenuOpening, setDeviceTypeSortMenuOpening] =
    useState(false);
  return (
    <div
      className="fixed top-0 left-0 w-full z-50 bg-white"
      style={{ boxShadow: "2px 10px 21px #0000001a" }}
    >
      <div className="flex justify-between lg:px-48 py-7">
        <div className="flex items-center px-3  lg:px-16 justify-start">
          <span className="text-[#16a34a] text-3xl font-bold">
            Aff<span className="text-black  px-1">Titan</span>
          </span>
          <span className="text-black px-8 mt-2 font-medium  hidden lg:block">
            Get Coins
          </span>
        </div>

        <div className="flex items-center  lg:px-16 justify-end">
          <div className="flex px-4 bg-[#16a34a]   rounded-3xl py-1">
            <img src="/wallet_583985.png" alt="money" />
            <span className="text-white px-2">{points}</span>
          </div>
          <Link href="https://freecash.com/w/revu">
            <div className="px-5 cursor-pointer">
              <img src="/support 24.png" alt="support" />
            </div>
          </Link>
          <div
            onClick={() =>
              setDeviceTypeSortMenuOpening(!deviceTypeSortMenuOpening)
            }
            className="p-1 relative flex justify-center items-center rounded-3xl bg-[#16a34a] z-[51] cursor-pointer"
          >
            <img
              src={
                deviceType == "iOS"
                  ? "/ios-icon.svg"
                  : deviceType == "Android"
                  ? "/android.png"
                  : deviceType == "Web"
                  ? "/desktop.svg"
                  : ""
              }
              className={`w-6 h-6 ${
                deviceType == "Android" && "bg-white rounded-lg"
              }`}
              alt="Device"
            />
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="h-5 w-5 text-white"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <div
              className={` ${
                deviceTypeSortMenuOpening == false && "hidden"
              } bg-[#16a34a] border-2 w-24 h-fit px-[2px] py-2 rounded-md absolute top-9 right-3 `}
            >
              <h1
                onClick={() => {
                  setSelectedDeviceSortType("Android");
                  if (selectedDeviceSortType === "Android") {
                    setSelectedDeviceSortType("");
                  }
                }}
<<<<<<< HEAD
                className={`flex flex-row items-center w-full h-fit p-1  ${
=======
                className={`w-full h-fit p-1  ${
>>>>>>> a1f38010274e6e247266b66fb432c19788f07812
                  selectedDeviceSortType == "Android" && "bg-white"
                } rounded-md transition-shadow`}
              >
                <span
                  className={`text-[#16a34a] ${
                    selectedDeviceSortType == "Android" ? "inline" : "hidden"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                Android
              </h1>
              <h1
                onClick={() => {
                  setSelectedDeviceSortType("iOS");
                  if (selectedDeviceSortType === "iOS") {
                    setSelectedDeviceSortType("");
                  }
                }}
                className={`flex flex-row items-center w-full h-fit p-1 ${
                  selectedDeviceSortType == "iOS" && "bg-white"
                } rounded-md transition-shadow`}
              >
                <span
                  className={`text-[#16a34a] mr-1 ${
                    selectedDeviceSortType == "iOS" ? "inline" : "hidden"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                iOS
              </h1>
              <h1
                onClick={() => {
                  setSelectedDeviceSortType("Web");
                  if (selectedDeviceSortType === "Web") {
                    setSelectedDeviceSortType("");
                  }
                }}
<<<<<<< HEAD
                className={`flex flex-row items-center w-full h-fit p-1 ${
=======
                className={`w-full h-fit p-1 ${
>>>>>>> a1f38010274e6e247266b66fb432c19788f07812
                  selectedDeviceSortType == "Web" && "bg-white"
                } rounded-md transition-shadow`}
              >
                <span
                  className={`text-[#16a34a] mr-1 ${
                    selectedDeviceSortType == "Web" ? "inline" : "hidden"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                Web
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
