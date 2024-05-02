/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#16A34A]">
      <div className="flex justify-between px-5 py-7">
        <div className="flex items-center  lg:px-60 justify-start">
          <span className="text-green-400 text-3xl font-bold">
            Aff<span className="text-white px-1">Titan</span>
          </span>
          <span className="text-[#FFF1F2] px-8 mt-2 font-medium  hidden lg:block">
            Get Coins
          </span>
        </div>

        <div className="flex items-center  lg:px-96 justify-end">
          <div className="flex px-4 bg-black rounded-3xl py-1">
            <img src="/money.png" alt="money" />
            <span className="text-white px-2">0</span>
          </div>
          <Link href="https://freecash.com/w/revu">
            <div className="px-5 cursor-pointer">
              <img src="/support 24.png" alt="support" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
