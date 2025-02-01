"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface LikedContextType {
  likedCars: any[];
  addLikedCar: (car: any) => void;
  removeLikedCar: (id: string) => void;
}

const LikedContext = createContext<LikedContextType | undefined>(undefined);

export function LikedProvider({ children }: { children: ReactNode }) {
  const [likedCars, setLikedCars] = useState<any[]>([]);

  const addLikedCar = (car: any) => {
    setLikedCars((prev) => [...prev, car]);
  };

  const removeLikedCar = (id: string) => {
    setLikedCars((prev) => prev.filter((car) => car._id !== id));
  };

  return (
    <LikedContext.Provider value={{ likedCars, addLikedCar, removeLikedCar }}>
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
