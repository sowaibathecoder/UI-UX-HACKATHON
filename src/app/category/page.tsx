import Image from "next/image";

export default function Category() {
  return(
    <>
      {/* Main Div */}
      <div className="w-[1440px] h-[1600px] absolute tpo-[124px] border border-orange-600 bg-[#F6F7F9]">
        
        <div className="w-[360px] h-[1600px] p-[32px] pt-[32px] pb-[760px] bg-[#FFFFFF] border border-green-700">
          <div className="w-[176px] h-[352px] absolute top-[32px] gap-[28px]">
            <div className="w-[104px] h-[20px] font-['Plus_Jakarta_Sans'] text-[12px] font-semibold leading-[15.12px] tracking-[-0.02em] text-left text-[#90A3BF]">
              TYPE
            </div>

            <ul className="w-[176px] h-[304px] gap-[32px] flex flex-col py-[22px]">
              <li className="flex gap-[10px]">
                <Image src="/blue-tick-square.png" alt="check-mark" width={24} height={24}/>
                <div className="w-[144px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-semibold leading-[30px] tracking-[-0.02em] text-[#596780]">Sport  (10)</div>
              </li>

              <li className="flex gap-[10px]">
                <Image src="/blue-tick-square.png" alt="check-mark" width={24} height={24}/>
                <div className="w-[144px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-semibold leading-[30px] tracking-[-0.02em] text-[#596780]">SUV  (12)</div>
              </li>

              <li className="flex gap-[10px]">
                <Image src="/tick-square.png" alt="check-mark" width={24} height={24}/>
                <div className="w-[144px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-semibold leading-[30px] tracking-[-0.02em] text-[#596780]">MPV  (16)</div>
              </li>

              <li className="flex gap-[10px]">
                <Image src="/tick-square.png" alt="check-mark" width={24} height={24}/>
                <div className="w-[144px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-semibold leading-[30px] tracking-[-0.02em] text-[#596780]">Sedan  (20)</div>
              </li>

              <li className="flex gap-[10px]">
                <Image src="/tick-square.png" alt="check-mark" width={24} height={24}/>
                <div className="w-[144px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-semibold leading-[30px] tracking-[-0.02em] text-[#596780]">Coupe  (14)</div>
              </li>

              <li className="flex gap-[10px]">
                <Image src="/tick-square.png" alt="check-mark" width={24} height={24}/>
                <div className="w-[144px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-semibold leading-[30px] tracking-[-0.02em] text-[#596780]">Hatchback  (14)</div>
              </li>
            </ul>
          </div>


          {/* Capacity */}
          <div className="w-[176px] h-[240px] absolute top-[440px] left-[32px] gap-[28px]">
            <div className="w-[104px] h-[20px] font-['Plus_Jakarta_Sans'] text-[12px] font-semibold leading-[15.12px] tracking-[-0.02em] text-left text-[#90A3BF]">
              CAPACITY
            </div>

            <ul className="w-[176px] h-[304px] gap-[32px] flex flex-col py-[22px]">
              <li className="flex gap-[10px]">
                <Image src="/blue-tick-square.png" alt="check-mark" width={24} height={24}/>
                <div className="w-[144px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-semibold leading-[30px] tracking-[-0.02em] text-[#596780]">2 Person  (10)</div>
              </li>

              <li className="flex gap-[10px]">
                <Image src="/tick-square.png" alt="check-mark" width={24} height={24}/>
                <div className="w-[144px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-semibold leading-[30px] tracking-[-0.02em] text-[#596780]">4 Person  (14)</div>
              </li>

              <li className="flex gap-[10px]">
                <Image src="/tick-square.png" alt="check-mark" width={24} height={24}/>
                <div className="w-[144px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-semibold leading-[30px] tracking-[-0.02em] text-[#596780]">6 Person  (12)</div>
              </li>

              <li className="flex gap-[10px]">
                <Image src="/blue-tick-square.png" alt="check-mark" width={24} height={24}/>
                <div className="w-[144px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-semibold leading-[30px] tracking-[-0.02em] text-[#596780]">8 or More  (16)</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}



