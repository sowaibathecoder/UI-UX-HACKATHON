import Image from "next/image";

export default function AdTwo() {
  return (
    <div className="w-full max-w-[640px] h-[360px] rounded-[10px] bg-[#3563E9] relative overflow-hidden">
      {/* Text and Button */}
      <div className="w-[284px] h-[224px] absolute top-[24px] left-[24px]">
        <div className="w-[284px] h-[160px]">
          <div className="w-[290px] h-[96px] text-[32px] font-semibold leading-[48px] text-left text-white">
          Easy way to rent a<br /> car at a low price
          </div>
          <div className="w-[284px] h-[48px] text-base font-medium leading-6 text-left text-white mt-4">
            Providing cheap car rental services
            <br /> and safe and comfortable facilities.
          </div>
        </div>
        <button className="w-[120px] h-[44px] bg-[#54A6FF] rounded text-base font-semibold text-white mt-[18px]">
          Rental Car
        </button>
      </div>

      {/* Image */}
      <div className="w-[340px] h-[108px] absolute bottom-3 right-[90px]">
        <Image
          src="/car-ad-2.png"
          alt="Car_Ad_2"
          width={340}
          height={108}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
