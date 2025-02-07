"use client";

import { useLiked } from "../components/likedContext";
import Image from "next/image";

export default function LikedPage() {
  const { likedCars, removeLikedCar } = useLiked(); 
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-[#1A202C] mb-8">❤️ Liked Cars</h1>

      {likedCars.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[50vh]">
          <p className="text-lg font-semibold text-gray-500">No cars liked yet!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {likedCars.map((car) => (
            <div key={car._id} className="bg-white shadow-lg rounded-lg p-5 transition-transform transform hover:scale-105">
              <h2 className="text-xl font-semibold text-[#1A202C]">{car.name}</h2>
              <p className="text-sm text-gray-500">{car.type}</p>
              <Image
                src={car.imageUrl}
                alt={car.name}
                width={250}
                height={140}
                className="rounded my-3 object-cover"
              />
              <div className="flex justify-between items-center mt-3">
                <span className="text-lg font-bold text-blue-600">{car.pricePerDay}day</span>
                
                <button 
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  onClick={() => removeLikedCar(car._id)} 
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
