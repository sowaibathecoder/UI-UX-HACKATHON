"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface CarType {
  _id: string;
  type: string;
  name: string;
  imageUrl: string;
  pricePerDay: number;
}

interface LikedContextType {
  likedCars: CarType[];
  addLikedCar: (car: CarType) => void;
  removeLikedCar: (id: string) => void;
  isLiked: boolean;
}

const LikedContext = createContext<LikedContextType | undefined>(undefined);

export function LikedProvider({ children }: { children: ReactNode }) {
  const [likedCars, setLikedCars] = useState<CarType[]>([]);

  useEffect(() => {
    const storedCars = localStorage.getItem("likedCars");
    if (storedCars) {
      setLikedCars(JSON.parse(storedCars));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("likedCars", JSON.stringify(likedCars));
  }, [likedCars]);

  const isLiked = likedCars.length > 0;

  const addLikedCar = (car: CarType) => {
    setLikedCars((prev) => {
      if (prev.some((likedCar) => likedCar._id === car._id)) {
        return prev;
      }
      return [...prev, car];
    });
  };

  const removeLikedCar = (id: string) => {
    setLikedCars((prev) => prev.filter((car) => car._id !== id));
  };

  return (
    <LikedContext.Provider value={{ likedCars, addLikedCar, removeLikedCar, isLiked }}>
      {children}
    </LikedContext.Provider>
  );
}

export function useLiked() {
  const context = useContext(LikedContext);
  if (!context) {
    throw new Error("useLiked must be used within a LikedProvider");
  }
  return context;
}
