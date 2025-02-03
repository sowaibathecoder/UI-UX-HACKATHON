import Image from "next/image";
import Link from "next/link";

export default function Details() {
  return (
    <>
      <div className="w-full h-[2016px] absolute top-[124] bg-[#F6F7F9]">
        {/* Side Div */}
        <div className="w-[360px] h-[2016px] bg-[#FFFFFF] p-[32px]">
          <div className="w-[176px] h-[352px] absolute top-[32px] gap-[28px]">
            <div className="w-[104px] h-[20px] font-['Plus_Jakarta_Sans'] text-[12px] font-semibold leading-[15.12px] tracking-[-0.02em] text-left text-[#90A3BF]">
              TYPE
            </div>

            <ul className="w-[176px] h-[304px] gap-[32px] flex flex-col py-[22px]">
              <li className="flex gap-[10px]">
                <Image
                  src="/blue-tick-square.png"
                  alt="check-mark"
                  width={24}
                  height={24}
                />
                <div className="w-[144px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-semibold leading-[30px] tracking-[-0.02em] text-[#596780]">
                  Sport (10)
                </div>
              </li>

              <li className="flex gap-[10px]">
                <Image
                  src="/blue-tick-square.png"
                  alt="check-mark"
                  width={24}
                  height={24}
                />
                <div className="w-[144px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-semibold leading-[30px] tracking-[-0.02em] text-[#596780]">
                  SUV (12)
                </div>
              </li>

              <li className="flex gap-[10px]">
                <Image
                  src="/tick-square.png"
                  alt="check-mark"
                  width={24}
                  height={24}
                />
                <div className="w-[144px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-semibold leading-[30px] tracking-[-0.02em] text-[#596780]">
                  MPV (16)
                </div>
              </li>

              <li className="flex gap-[10px]">
                <Image
                  src="/tick-square.png"
                  alt="check-mark"
                  width={24}
                  height={24}
                />
                <div className="w-[144px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-semibold leading-[30px] tracking-[-0.02em] text-[#596780]">
                  Sedan (20)
                </div>
              </li>

              <li className="flex gap-[10px]">
                <Image
                  src="/tick-square.png"
                  alt="check-mark"
                  width={24}
                  height={24}
                />
                <div className="w-[144px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-semibold leading-[30px] tracking-[-0.02em] text-[#596780]">
                  Coupe (14)
                </div>
              </li>

              <li className="flex gap-[10px]">
                <Image
                  src="/tick-square.png"
                  alt="check-mark"
                  width={24}
                  height={24}
                />
                <div className="w-[144px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-semibold leading-[30px] tracking-[-0.02em] text-[#596780]">
                  Hatchback (14)
                </div>
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
                <Image
                  src="/blue-tick-square.png"
                  alt="check-mark"
                  width={24}
                  height={24}
                />
                <div className="w-[144px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-semibold leading-[30px] tracking-[-0.02em] text-[#596780]">
                  2 Person (10)
                </div>
              </li>

              <li className="flex gap-[10px]">
                <Image
                  src="/tick-square.png"
                  alt="check-mark"
                  width={24}
                  height={24}
                />
                <div className="w-[144px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-semibold leading-[30px] tracking-[-0.02em] text-[#596780]">
                  4 Person (14)
                </div>
              </li>

              <li className="flex gap-[10px]">
                <Image
                  src="/tick-square.png"
                  alt="check-mark"
                  width={24}
                  height={24}
                />
                <div className="w-[144px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-semibold leading-[30px] tracking-[-0.02em] text-[#596780]">
                  6 Person (12)
                </div>
              </li>

              <li className="flex gap-[10px]">
                <Image
                  src="/blue-tick-square.png"
                  alt="check-mark"
                  width={24}
                  height={24}
                />
                <div className="w-[144px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-semibold leading-[30px] tracking-[-0.02em] text-[#596780]">
                  8 or More (16)
                </div>
              </li>
            </ul>
          </div>

          {/* Price */}
          <div className="w-[296px] h-[104px] absolute top-[736px] left-[32px] gap-[28px]">
            <div className="w-[104px] h-[20px] text-[#90A3BF] font-['Plus_Jakarta_Sans'] text-[12px] font-semibold leading-[15.12px] tracking-[-0.02em] text-left">
              PRICE
            </div>
            <Image
              src="/price-range.png"
              alt="price-bar"
              width={296}
              height={20}
              className="mt-[23px]"
            />
            <div className="w-[296px] h-[24px] text-[#596780] font-['Plus_Jakarta_Sans'] text-[20px] font-semibold leading-[30px] tracking-[-0.02em] text-justify mt-[7px]">
              Max. $100.00
            </div>
          </div>
        </div>
 
        {/* Blue Car Div */}
        <div className="w-[492px] h-[360px] absolute top-[32px] left-[392px] rounded-[10px] bg-[#3563E9]">
          <div className="w-[372px] h-[160px] absolute top-[24px] left-[24px] gap-[16px]">
            <div className="w-[372px] h-[96px] font-['Plus_Jakarta_Sans'] text-[32px] text-white font-semibold leading-[48px] tracking-[-0.03em] text-left">
              Sports car with the best design and acceleration
            </div>
            <div className="w-[284px] h-[48px] font-['Plus_Jakarta_Sans'] text-[16px] font-medium leading-[24px] tracking-[-0.02em] text-left text-white mt-3">
              Safety and comfort while driving a futuristic and elegant sports car
            </div>
          </div>
          <Image src="/nissan.png" alt="Nissan GT - R" width={380} height={120} className="absolute top-[216px] left-[60px]"/>
        </div>

        {/* View Cars */}
        <Image src="/View-1.png" alt="view-car" width={148} height={124} className="absolute top-[416px] left-[392px]"/>
        <Image src="/View-2.png" alt="view-car" width={148} height={124} className="absolute top-[416px] left-[564px]"/>
        <Image src="/View-3.png" alt="view-car" width={148} height={124} className="absolute top-[416px] left-[736px]"/>

        {/* Detail div of Nissan GT - R*/}
        <div className="w-[492px] h-[508px] absolute top-[32px] left-[916px] rounded-[10px] bg-[#FFFFFF]">
          <div className="w-[220px] h-[72px] absolute top-[24px] left-[24px] gap-[8px]">
            <div className="w-[220px] h-[40px] font-['Plus_Jakarta_Sans'] text-[32px] font-bold leading-[48px] tracking-[-0.03em] text-left text-[#1A202C]">
              Nissan GT - R
            </div>
            <div className="w-[220px] h-[20px] gap-[8px] flex mt-2">
              <Image src="/Review-Star.png" alt="stars" width={108} height={20} className="gap-[2px]"/>
              <div className="w-[104px] h-[20px] font-['Plus_Jakarta_Sans'] text-[13.9px] font-medium leading-[17.64px] tracking-[0.02em] text-left text-[#596780] pt-1">
                440+ Reviewer
              </div>
            </div>
          </div>
          <div className="w-[444px] h-[120px] absolute top-[128px] left-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-normal leading-[40px] tracking-[-0.02em] text-left text-[#596780]">
            NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
          </div>
          <Image src="/Spesification-7.png" alt="specification" width={444} height={72} className="absolute top-[280px] left-[24px] gap-[44px]"/>
          <div className="w-[200px] h-[56px] absolute top-[420px] left-[24px] gap-[4px] flex">
            <p className="w-[200px] h-[38px] font-['Plus_Jakarta_Sans'] text-[32px] font-bold leading-[35.28px] tracking-[40.32] text-left">
              $80.00/
            </p>
            <p className="text-[#90A3BF] text-[18px] font-semibold pr-5 pt-[8px]">
              days
            </p>
          </div>
          <span className="w-[200px] h-[20px] font-['Plus_Jakarta_Sans'] absolute top-[460px] left-[24px] text-[16px] font-bold leading-[20.16px] text-left line-through text-[#90A3BF]">
            $100.00
          </span>
          <Link href="/payment">
            <Image src="/Button-Rental.png" alt="Rent-Button" width={180} height={56} className="absolute top-[420px] left-[305px] px-[20px] gap-[8px] cursor-pointer"/>
          </Link>
          <Image src="/red-heart.png" alt="heart" width={24} height={24} className="absolute top-[24px] left-[444px]"/>
        </div>

        {/* Person Reviews */}
        <div className="w-[1016px] h-[452px] absolute top-[572px] left-[392px] rounded-[10px]">

          {/* Total Reviews */}
          <div className="absolute top-[24px] left-[24px] w-[136px] h-[28px] gap-[12px] flex cursor-pointer">
            <p className="w-[80px] h-[28px] font-['Plus_Jakarta_Sans'] text-[20px] font-semibold leading-[25.2px] tracking-[-0.02em] text-left text-[#1A202Cpx]">
              Reviews
            </p>
            <Image src="/Total-Review.png" alt="total-review" height={28} width={44} />
          </div>

          {/* First Review Div */}
          <div className="w-[968px] h-[124px] absolute top-[84px] left-[24px]">
            <Image src="/Profile-1.png" alt="profile-pick" width={56} height={56} />
            <div className="w-[128px] h-[56px] absolute left-[70px] bottom-[67px] gap-[8px]">
              <p className="w-[128px] h-[28px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[30px] tracking-[-0.03em] text-left text-[#1A202C]">
                Alex Stanton
              </p>
              <p className="w-[128px] h-[20px] font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[21px] tracking-[-0.02em] text-left text-[#90A3BF] pt-[7px]">
                CEO at Bukalapak
              </p>
              <div className="w-[128px] h-[56px] absolute bottom-[-2px] left-[767px] gap-[8px]">
                <div className="w-[128px] h-[28px] font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[21px] tracking-[-0.02em] text-right text-[#90A3BF] pt-[2px]">
                  21 July 2022
                </div>
                <Image src="/Review-Star.png" alt="stars" width={108} height={20} className="gap-[2px] ml-5 mt-1"/>
              </div>
            </div>
            <p className="w-[896px] h-[56px] absolute top-[66px] left-[70px] font-['Plus_Jakarta_Sans'] text-[14px] font-normal leading-[28px] tracking-[-0.02em] text-left text-[#596780]">
              We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and
              comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
            </p>
          </div>

          {/* Second Review Div */}
          <div className="w-[968px] h-[124px] absolute top-[232px] left-[24px]">
            <Image src="/Profile-2.png" alt="profile-pick" width={56} height={56} />
            <div className="w-[128px] h-[56px] absolute left-[70px] bottom-[67px] gap-[8px]">
              <p className="w-[128px] h-[28px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[30px] tracking-[-0.03em] text-left text-[#1A202C]">
                Skylar Dias
              </p>
              <p className="w-[128px] h-[20px] font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[21px] tracking-[-0.02em] text-left text-[#90A3BF] pt-[7px]">
                CEO at Amazon
              </p>
              <div className="w-[128px] h-[56px] absolute bottom-[-2px] left-[767px] gap-[8px]">
                <div className="w-[128px] h-[28px] font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[21px] tracking-[-0.02em] text-right text-[#90A3BF] pt-[2px]">
                  20 July 2022
                </div>
                <Image src="/Review-Star.png" alt="stars" width={108} height={20} className="gap-[2px] ml-5 mt-1"/>
              </div>
            </div>
            <p className="w-[896px] h-[56px] absolute top-[66px] left-[70px] font-['Plus_Jakarta_Sans'] text-[14px] font-normal leading-[28px] tracking-[-0.02em] text-left text-[#596780]">
              We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars
              with good and comfortable facilities. In addition, the service provided by the officers is also very friendly
              and very polite.
            </p>
          </div>

         {/* Show All Div */}
         <div className="w-[132px] h-[44px] absolute top-[384px] left-[454px] px-[20px] gap-[8px] flex justify-between items-center cursor-pointer">
          <div className="w-[68px] h-[24px] font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-center text-[#90A3BF]">
            Show All
          </div>
          <Image src="/arrow-down-1.png" alt="down-arrow" width={16} height={16}/>
         </div>

        </div>


      </div>
    </>
  );
}



