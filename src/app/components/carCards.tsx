import { useState, useEffect } from "react"; // Import hooks
import Image from "next/image";
import LikedIcon from "../components/likedIcon";
import { client } from "../../../sanity/lib/client";


interface CarCardsProps {
  visibleCar: number; // Number of cars to display
}

export default function CarCards({ visibleCar }: CarCardsProps) {
  const [carData, setCarData] = useState<any[]>([]); // Define state for car data

  useEffect(() => {
    // Fetch the car data on the client side
    const fetchData = async () => {
      const data = await client.fetch(`
        *[_type == "car"] {
          name,
          type,
          fuelCapacity,
          transmission,
          seatingCapacity,
          pricePerDay,
          "imageUrl": image.asset->url,
          _id
        }
      `);
      setCarData(data); // Update state with fetched data
    };

    fetchData(); // Call fetch function
  }, []); // Empty dependency array to run only once

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {carData.slice(0, visibleCar).map((item: any) => {
        return (
          <div
            key={item._id}
            className="bg-white shadow-md rounded-lg p-4 w-[304px] h-[388px] relative"
          >
            {/* Heart Icon */}
            <LikedIcon car={item}/>

            {/* Car Name and Type */}
            <h1 className="text-xl font-bold text-[#1A202C]">{item.name}</h1>
            <p className="text-sm font-bold text-[#90A3BF]">{item.type}</p>

            {/* Car Image */}
            <Image
              src={item.imageUrl}
              alt={item.name}
              height={120}
              width={250}
              className="my-4 mx-auto rounded absolute top-[120px] left-1/2 transform -translate-x-1/2"
            />

            {/* Features */}
            <div className="flex justify-between items-center text-sm font-medium text-[#90A3BF] absolute top-[272px] right-[13px] md:right-7 mr-5 md:mr-0 gap-5 md:gap-6">
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

            {/* Pricing and Button */}
            <div className="flex justify-between items-center mt-4 ">
              <h3 className="text-lg font-bold text-[#1A202C] absolute top-[340px]">
                {item.pricePerDay}
                <span className="text-[#90A3BF] text-[15px] font-semibold ">
                  day
                </span>
              </h3>
              <button className="bg-[#3563E9] text-white hover:bg-blue-700 active:bg-[#5c84fb] absolute top-[330px] right-[20px] text-sm md:text-base rounded-[4px] h-[36px] w-[100px] md:h-[44px] md:w-[116px]">
                Rent Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
