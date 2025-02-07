"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LikedIcon from "./likedIcon";
import { fetchCars } from "../../../sanity/lib/fetchCars";
import CarSlider from "./carSlider"; 
interface CarCardsProps {
  visibleCar: number;
}

export default function CarCards({ visibleCar }: CarCardsProps) {
  const [carData, setCarData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCars = async () => {
      try {
        const data = await fetchCars();
        setCarData(data);
        setError(null);
      } catch (err: any) {
        setError(err.message);
      }
    };

    getCars();
  }, []);

  return (
    <div>
      <CarSlider carData={carData} visibleCar={visibleCar} />

      <div className="hidden md:flex flex-wrap gap-6 justify-center">
        {error ? (
          <p className="text-red-500 font-bold">{error}</p>
        ) : (
          carData.slice(0, visibleCar).map((item: any) => (
            <div key={item._id} className="bg-white shadow-md rounded-lg p-4 w-[304px] h-[388px] relative transition-transform transform hover:scale-105">
              <LikedIcon car={item} />

              <h1 className="text-xl font-bold text-[#1A202C]">{item.name}</h1>
              <p className="text-sm font-bold text-[#90A3BF]">{item.type}</p>

              <Image
                src={item.imageUrl}
                alt={item.name}
                height={120}
                width={250}
                className="my-4 mx-auto rounded absolute top-[120px] left-1/2 transform -translate-x-1/2"
              />

              <div className="flex justify-between items-center text-sm font-medium text-[#90A3BF] absolute top-[272px] right-[33px] gap-5">
                <div className="flex items-center gap-1">
                  <span>⛽</span>
                  <span>{item.fuelCapacity}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>⚙️</span>
                  <span>{item.transmission}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>👥</span>
                  <span>{item.seatingCapacity}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <h3 className="text-lg font-bold text-[#1A202C] absolute top-[340px]">
                  {item.pricePerDay}
                  <span className="text-[#90A3BF] text-[15px] font-semibold">day</span>
                </h3>
                <Link href="/detail">
                <button className="bg-[#3563E9] text-white hover:bg-blue-700 active:bg-[#5c84fb] absolute top-[330px] right-[20px] text-sm rounded-[4px] h-[36px] w-[100px]">
                  Rent Now
                </button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}