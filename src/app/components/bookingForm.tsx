"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function BookingForm() {
  const [selectedOption, setSelectedOption] = useState("Pick-Up");

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-2 justify-between">
        {/* Pick-Up Div */}
        <div className="w-full md:w-[50%] rounded-[10px] bg-white shadow-md p-4">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="option"
              id="pick-up"
              checked={selectedOption === "Pick-Up"}
              onChange={() => handleOptionChange("Pick-Up")}
              className="w-4 h-4 text-blue-500"
            />
            <label htmlFor="pick-up" className="text-lg font-semibold">
              Pick-Up
            </label>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between mt-2 gap-4">
            {/* Location */}
            <div className="flex flex-col w-full md:w-auto">
              <label className="text-[16px] font-bold">Locations</label>
              <select className="w-full p-2 mt-1 border rounded text-gray-600">
                <option>Select your city</option>
                <option>City 1</option>
                <option>City 2</option>
              </select>
            </div>

            <div className="w-full md:w-px h-px md:h-[55px] bg-[#C3D4E966]"></div>

            {/* Date */}
            <div className="flex flex-col w-full md:w-auto">
              <label className="text-[16px] font-bold">Date</label>
              <input
                type="date"
                className="w-full p-2 mt-1 border rounded text-gray-600"
              />
            </div>

            <div className="w-full md:w-px h-px md:h-[55px] bg-[#C3D4E966]"></div>

            {/* Time */}
            <div className="flex flex-col w-full md:w-auto">
              <label className="text-[16px] font-bold">Time</label>
              <input
                type="time"
                className="w-full p-2 mt-1 border rounded text-gray-600"
              />
            </div>
          </div>
        </div>

        {/* Switch Button */}
        <div className="flex items-center justify-center">
          <Image
            src="/Switch.png"
            alt="Switch Button"
            width={160}
            height={160}
            className="cursor-pointer"
          />
        </div>

        {/* Drop-Off Div */}
        <div className="w-full md:w-[50%] rounded-[10px] bg-white shadow-md p-4">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="option"
              id="drop-off"
              checked={selectedOption === "Drop-Off"}
              onChange={() => handleOptionChange("Drop-Off")}
              className="w-4 h-4 text-blue-500"
            />
            <label htmlFor="drop-off" className="text-lg font-semibold">
              Drop-Off
            </label>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between mt-2 gap-4">
            {/* Location */}
            <div className="flex flex-col w-full md:w-auto">
              <label className="text-[16px] font-bold">Locations</label>
              <select className="w-full p-2 mt-1 border rounded text-gray-600">
                <option>Select your city</option>
                <option>City 1</option>
                <option>City 2</option>
              </select>
            </div>

            <div className="w-full md:w-px h-px md:h-[55px] bg-[#C3D4E966]"></div>

            {/* Date */}
            <div className="flex flex-col w-full md:w-auto">
              <label className="text-[16px] font-bold">Date</label>
              <input
                type="date"
                className="w-full p-2 mt-1 border rounded text-gray-600"
              />
            </div>

            <div className="w-full md:w-px h-px md:h-[55px] bg-[#C3D4E966]"></div>

            {/* Time */}
            <div className="flex flex-col w-full md:w-auto">
              <label className="text-[16px] font-bold">Time</label>
              <input
                type="time"
                className="w-full p-2 mt-1 border rounded text-gray-600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}