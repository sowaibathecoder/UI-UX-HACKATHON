import Image from "next/image";

export default function AdOne() {
  return (
    <div className="w-full max-w-[640px] h-[260px] lg:h-[360px] rounded-[10px] bg-[#54A6FF] relative overflow-hidden">
      {/* Text and Button */}
      <div className="w-full md:w-[284px] h-auto md:h-[224px] absolute top-[8px] lg:top-[24px] left-[8px] lg:left-[24px]">
        <div className="w-full md:w-[284px] h-auto md:h-[160px] px-1">
          {/* Heading */}
          <div className="w-full md:w-[272px] text-2xl md:text-[32px] font-semibold leading-[36px] md:leading-[48px] text-left text-white">
            The Best Platform
            <br /> for Car Rental
          </div>
          {/* Description */}
          <div className="w-full md:w-[284px] text-sm md:text-base font-medium leading-5 md:leading-6 text-left text-white mt-2 md:mt-4">
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </div>
        </div>
        {/* Button */}
        <button className="w-[80px] lg:w-[120px] h-[30px] lg:h-[44px] bg-[#3563E9] rounded text-[12px] md:text-base font-semibold text-white mt-4 md:mt-[18px]">
          Rental Car
        </button>
      </div>

      {/* Image */}
      <div className="w-[200px] md:w-[406px] h-[80px] md:h-[116px] absolute bottom-3 right-[15px] md:right-[90px]">
        <Image
          src="/car-ad-1.png"
          alt="Car_Ad_1"
          width={406}
          height={116}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}