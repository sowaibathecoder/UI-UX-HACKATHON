"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import LikedIcon from "./likedIcon";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef, useEffect } from "react";

export default function CarSlider({
  carData,
  visibleCar,
}: {
  carData: any[];
  visibleCar: number;
}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="md:hidden flex items-center justify-center relative">
      <div className="w-full max-w-[350px] pl-6">
        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          slidesPerView={1}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {carData.slice(0, visibleCar).map((item: any) => (
            <SwiperSlide key={item._id}>
              <div className="bg-white shadow-md rounded-lg p-4 w-[304px] h-[388px] relative">
                <LikedIcon car={item} />
                <h1 className="text-xl font-bold text-[#1A202C]">
                  {item.name}
                </h1>
                <p className="text-sm font-bold text-[#90A3BF]">{item.type}</p>
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  height={120}
                  width={250}
                  className="my-4 mx-auto rounded absolute top-[120px] left-1/2 transform -translate-x-1/2"
                />
                <div className="flex justify-between items-center text-sm font-medium text-[#90A3BF] absolute top-[272px] right-[35px] gap-5">
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
                    <span className="text-[#90A3BF] text-[15px] font-semibold">
                      day
                    </span>
                  </h3>
                  <button className="bg-[#3563E9] text-white hover:bg-blue-700 active:bg-[#5c84fb] absolute top-[330px] right-[20px] text-sm rounded-[4px] h-[36px] w-[100px]">
                    Rent Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <button
          ref={prevRef}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 text-3xl z-10"
        >
          &#10094;
        </button>
        <button
          ref={nextRef}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 text-3xl z-10"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
