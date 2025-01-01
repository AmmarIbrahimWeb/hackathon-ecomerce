//import { SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import React from "react";

const Store = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-start">
        {/* Left Section */}
        <div className="pt-8 px-4 lg:px-10 w-full lg:w-1/2">
          <div className="mb-6">
            <span className="text-2xl font-semibold">Find a Nike Store</span>
          </div>

          {/* Search Input */}
          <div className="flex items-center gap-x-4 mb-6">
            <div className="relative w-full max-w-md">
              <input
                className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg outline-none text-sm"
                type="text"
                placeholder="Search Location"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_20)">
                  <path
                    d="M13.962 16.296C12.916 16.9224 11.7192 17.2521 10.5 17.25C9.6134 17.2512 8.7353 17.0772 7.91618 16.7379C7.09707 16.3986 6.35308 15.9008 5.72701 15.273C5.09924 14.6469 4.6014 13.9029 4.26212 13.0838C3.92284 12.2647 3.7488 11.3866 3.75001 10.5C3.75001 8.63601 4.50501 6.94901 5.72701 5.72701C6.35308 5.09924 7.09707 4.6014 7.91618 4.26212C8.7353 3.92284 9.6134 3.7488 10.5 3.75001C12.364 3.75001 14.051 4.50501 15.273 5.72701C15.9008 6.35308 16.3986 7.09707 16.7379 7.91618C17.0772 8.7353 17.2512 9.6134 17.25 10.5C17.2517 11.6974 16.9338 12.8736 16.329 13.907C15.812 14.789 15.895 15.895 16.618 16.618L20.471 20.471"
                    stroke="#111111"
                    strokeWidth="1.5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_20">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          {/* Store Listings */}
          <div className="space-y-6">
            {[
              {
                name: "Nike NYC - House of Innovation 000",
                address: "650 5th Ave.",
                city: "New York, NY, 10019, US",
                status: "Closed",
                opens: "11:00 am",
              },
              {
                name: "Nike By Upper East Side",
                address: "1131 3rd Ave.",
                city: "New York, NY, 10065, US",
                status: "Closed",
                opens: "11:00 am",
              },
              {
                name: "Nike By Flatiron",
                address: "156 Fifth Ave.",
                city: "New York, NY, 10010, US",
                status: "Closed",
                opens: "11:00 am",
              },
            ].map((store, index) => (
              <div key={index}>
                <span className="font-semibold">{store.name}</span>
                <br />
                <span className="text-gray-500">{store.address}</span>
                <br />
                <span className="text-gray-500">{store.city}</span>
                <br />
                <span className="text-red-500">
                  {store.status}{" "}
                  <span className="text-gray-500">• Opens at {store.opens}</span>
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <span className="underline font-semibold text-black text-lg cursor-pointer">
              View All Stores
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 hidden lg:block mt-6 lg:mt-0">
          <Image
            src="/stores.png"
            alt="Map showing Nike stores"
            width={900}
            height={700}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Store;
