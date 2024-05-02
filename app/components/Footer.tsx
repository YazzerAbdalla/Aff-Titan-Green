"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1"></main>
      <div className="bg-white rounded-lg shadow ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="my-6 border-2  border-gray-200 sm:mx-auto " />
          <div className="text-sm text-gray-500 font-bold sm:text-center flex justify-center">
            <Link href="https://freecash.com/w/revu">
              <span className="mr-4 ">TOS</span>
            </Link>
            <Link href="https://freecash.com/w/revu">
              <span>Privacy Policy</span>
            </Link>
          </div>
          <span className="flex justify-center items-center text-gray-500  ">
            Support ID: 100133754
          </span>
        </div>
      </div>
    </div>
  );
}
