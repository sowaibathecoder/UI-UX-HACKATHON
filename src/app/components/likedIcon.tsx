"use client";

import Image from "next/image";
import { useLiked } from "./likedContext";

const LikedIcon = ({ car }: { car: any }) => {
  const { likedCars, addLikedCar, removeLikedCar } = useLiked();

  const isLiked = likedCars.some((likedCar) => likedCar._id === car._id);

  const handleClick = () => {
    if (isLiked) {
      removeLikedCar(car._id); 
    } else {
      addLikedCar(car); 
    }
  };

  return (
    <div className="absolute top-4 right-4">
      <Image
        src={isLiked ? "/red-heart.png" : "/white-heart.png"} 
        alt="liked-icon"
        width={24}
        height={24}
        onClick={handleClick}
        className="cursor-pointer"
      />
    </div>
  );
};

export default LikedIcon;
