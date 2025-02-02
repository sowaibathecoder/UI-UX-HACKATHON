"use client";

import { useState } from "react";
import CarCards from "./carCards";


export default function ShowMore() {
  const [visibleCar, setVisibleCar] = useState(12); // Initially 12 cars
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    if (showMore) {
      setVisibleCar(12); // Show only initial 12 cars
    } else {
      setVisibleCar(16); // Show more cars (adjust as needed)
    }
    setShowMore(!showMore);
  };

  return (
    <div className="relative">
      <CarCards visibleCar={visibleCar} />
      <button
        onClick={handleToggle}
        className="bg-[#3563E9] text-white hover:bg-blue-700 active:bg-[#5c84fb] text-base rounded-[4px] w-[156px] h-[44px] flex justify-center items-center mt-6 mx-auto cursor-pointer"
      >
        {showMore ? "Hide Cars" : "Show More Cars"}
      </button>
    </div>
  );
}
