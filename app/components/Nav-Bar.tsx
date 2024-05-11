/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";

export default function Nav({ points }: { points: string | number }) {
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
        </div>
      </div>
    </div>
  );
}
