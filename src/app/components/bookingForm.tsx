"use client"

import React, { useState } from "react";
import Image from "next/image";

export default function BookingForm() {
  const [selectedOption, setSelectedOption] = useState("Pick-Up");

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div>
      {/* Pick-Up Div */}
      <div className="w-[582px] h-[132px] absolute top-[424px] left-[64px] rounded-[10px] bg-white shadow-md p-4">
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
        <div className="flex items-center justify-between mt-2">
          {/* Location */}
          <div className="flex flex-col">
            <label className="text-[16px] font-bold">Locations</label>
            <select className="w-[126px] p-2 mt-1 border rounded text-gray-600">
              <option>Select your city</option>
              <option>City 1</option>
              <option>City 2</option>
            </select>
          </div>

          <div className="w-0 h-[55px] border border-solid border-[#C3D4E966] "></div>

          {/* Date */}
          <div className="flex flex-col">
            <label className="text-[16px] font-bold">Date</label>
            <input
              type="date"
              className="w-[126px] p-2 mt-1 border rounded text-gray-600"
            />
          </div>

          <div className="w-0 h-[55px] border border-solid border-[#C3D4E966] "></div>

          {/* Time */}
          <div className="flex flex-col">
            <label className="text-[16px] font-bold">Time</label>
            <input
              type="time"
              className="w-[126px] p-2 mt-1 border rounded text-gray-600"
            />
          </div>
        </div>
      </div>

      {/* Switch Button */}
      <Image
        src="/Switch.png"
        alt="Switch Button"
        width={150}
        height={150}
        className="absolute top-[430px] left-[640px] cursor-pointer"
      />

      {/* Drop-Off Div */}
      <div className="w-[582px] h-[132px] absolute top-[424px] left-[794px] rounded-[10px] bg-white shadow-md p-4">
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
        <div className="flex items-center justify-between mt-2">
          {/* Location */}
          <div className="flex flex-col">
            <label className="text-[16px] font-bold">Locations</label>
            <select className="w-[126px] p-2 mt-1 border rounded text-gray-600">
              <option>Select your city</option>
              <option>City 1</option>
              <option>City 2</option>
            </select>
          </div>

          <div className="w-0 h-[55px] border border-solid border-[#C3D4E966] "></div>

          {/* Date */}
          <div className="flex flex-col">
            <label className="text-[16px] font-bold">Date</label>
            <input
              type="date"
              className="w-[126px] p-2 mt-1 border rounded text-gray-600"
            />
          </div>

          <div className="w-0 h-[55px] border border-solid border-[#C3D4E966] "></div>

          {/* Time */}
          <div className="flex flex-col">
            <label className="text-[16px] font-bold">Time</label>
            <input
              type="time"
              className="w-[126px] p-2 mt-1 border rounded text-gray-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
