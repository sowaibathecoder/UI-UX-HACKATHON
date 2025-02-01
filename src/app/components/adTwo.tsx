import Image from "next/image";

export default function AdTwo() {
  return (
    <div className="w-[640px] h-[360px] absolute top-[32px] left-[736px] rounded-[10px] bg-[#3563E9]">
      <div className="w-[284px] h-[224px] absolute top-[24px] left-[24px] gap-[20px]">
        <div className="w-[284px] h-[160px] gap-[16px]">
          <div className="w-[272px] h-[96px] font-['Plus_Jakarta_Sans'] text-[32px] font-semibold leading-[48px] tracking-tight text-left text-white">
            Easy way to rent a car at a low price
          </div>
          <div className="w-[284px] h-[48px] font-['Plus_Jakarta_Sans'] text-base font-medium leading-6 tracking-[-0.02em] text-left text-white mt-4">
            Providing cheap car rental services
            <br /> and safe and comfortable facilities.
          </div>
        </div>
        <button className="w-[120px] h-[44px] px-5 gap-2 rounded bg-[#54A6FF] mt-[18px] font-['Plus_Jakarta_Sans'] text-base font-semibold leading-6 tracking-[-0.02em] text-center text-white">
          Rental Car
        </button>
      </div>
      <Image
        src="/car-ad-2.png"
        alt="Car_Ad_2"
        width={340}
        height={108}
        className="absolute top-[232px] left-[190px]"
      />
    </div>
  );
}
