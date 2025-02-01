"use client";

import { useLiked } from "../components/likedContext";
import Image from "next/image";

export default function LikedPage() {
  const { likedCars } = useLiked();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Liked Cars</h1>
      {likedCars.length === 0 ? (
        <p>No cars liked yet!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {likedCars.map((car) => (
            <div key={car._id} className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-lg font-bold">{car.name}</h2>
              <p className="text-sm text-gray-600">{car.type}</p>
              <Image
                src={car.imageUrl}
                alt={car.name}
                width={200}
                height={100}
                className="rounded my-2"
              />
              <p className="text-sm font-bold">Price: {car.pricePerDay}/day</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
