"use client";

import { useState } from "react";
import Image from "next/image";
import { useLiked } from "./likedContext";

const LikedIcon = ({ car }: { car: any }) => {
  const [liked, setLiked] = useState(false);
  const { addLikedCar, removeLikedCar } = useLiked();

  const handleClick = () => {
    if (liked) {
      removeLikedCar(car._id);
    } else {
      addLikedCar(car);
    }
    setLiked(!liked);
  };

  return (
    <div className="absolute top-4 right-4">
      <Image
        src={liked ? "/red-heart.png" : "/white-heart.png"}
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
