import Image from "next/image";
import Link from "next/link";

export default function Details() {
  return (
    <>
      <div className="w-[1440px] h-[2016px] absolute top-[124] bg-[#F6F7F9]">
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

        {/* Recent Cars */}
        <div className="w-[1016px] h-[448px] absolute top-[1056px] left-[392px] gap-[16px]">
          <div className="w-[1016px] h-[44px] gap-[756px] flex justify-between items-center px-7">
            <div className="w-[92px] h-[24px] gap[8px] font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-center text-[#90A3BF]">
              Recent Car
            </div>
            <div className="w-[64px] h-[24px] font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-center text-[#3563E9]">
              View All
            </div>
          </div>

          {/* Cars Row 1 */}
          <div className="w-[1016px] h-[388px] gap-[32px] mt-[15px] flex">
            {/* Card 1 */}
            <div className="w-[317px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
              <div className="w-[128px] h-[48px] absolute top-[83px] left-[24px] gap-[4px]">
                <div className="w-[128px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[30px] tracking-[-0.03em] text-left text-[#1A202C]">
                  Koenigsegg
                </div>
                <div className="w-[128px] h-[20px] font-['Plus_Jakarta_Sans'] text-[14px] font-bold leading-[21px] tracking-[-0.02em] text-left text-[#90A3BF] pt-[5px]">
                  Sport
                </div>
              </div>
              <Image
                src="/red-heart.png"
                alt="Heart"
                width={24}
                height={24}
                className="absolute top-[83px] left-[256px]"
              />
              <Image
                src="/p-car-1.png"
                alt="Car-1"
                width={272}
                height={84}
                className="absolute top-[190px] left-[20px]"
              />
              <Image
                src="/p-Spesification-1.png"
                alt="Specification-Data"
                height={24}
                width={256}
                className="absolute top-[315px] left-[30px] gap-[16px]"
              />
              <div className="w-[128px] h-[48px] absolute top-[385px] left-[30px] flex">
                <p className="w-[128px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[25.2px] text-left">
                  $99.00/
                </p>
                <p className="text-[#90A3BF] text-[15px] font-semibold pr-5 pt-[3px]">
                  day
                </p>
              </div>
              <Image
                src="/rental-button.png"
                alt="Rent-Button"
                width={160}
                height={55}
                className="absolute top-[375px] left-[145px] px-[20px] gap-[8px] cursor-pointer"
              />
            </div>

            {/* Card 2 */}
              <div className="w-[317px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
                <div className="w-[128px] h-[48px] absolute top-[83px] left-[375px] gap-[4px]">
                  <div className="w-[128px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[30px] tracking-[-0.03em] text-left text-[#1A202C]">
                    Nissan GT - R
                  </div>
                  <div className="w-[128px] h-[20px] font-['Plus_Jakarta_Sans'] text-[14px] font-bold leading-[21px] tracking-[-0.02em] text-left text-[#90A3BF] pt-[5px]">
                    Sport
                  </div>
                </div>
                <Image
                  src="/heart-1.png"
                  alt="Heart"
                  width={24}
                  height={24}
                  className="absolute top-[83px] left-[608px]"
                />
                <Image
                  src="/nissan.png"
                  alt="Car-2"
                  width={228}
                  height={72}
                  className="absolute top-[190px] left-[395px]"
                />
                <Image
                  src="/Spesification-2.png"
                  alt="Specification-Data"
                  height={24}
                  width={256}
                  className="absolute top-[315px] left-[380px] gap-[16px]"
                />
                <div className="w-[128px] h-[48px] absolute top-[372px] left-[381px] flex">
                  <p className="w-[128px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[25.2px] text-left">
                    $80.00/
                  </p>
                  <p className="text-[#90A3BF] text-[15px] font-semibold pr-5 pt-[3px]">
                    day
                  </p>
                </div>
                <span className="text-[14px] font-bold absolute top-[403px] left-[381px] font-['Plus_Jakarta_Sans'] w-[128px] h-[20px] leading-[17.64px] line-through text-left text-[#90A3BF]">
                  $100.00
                </span>
                <Image
                  src="/rental-button.png"
                  alt="Rent-Button"
                  width={160}
                  height={55}
                  className="absolute top-[375px] left-[497px] px-[20px] gap-[8px] cursor-pointer"
                />
              </div>

            {/* Card 3 */}
            <div className="w-[317px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
              <div className="w-[128px] h-[48px] absolute top-[83px] left-[725px] gap-[4px]">
                <div className="w-[128px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[30px] tracking-[-0.03em] text-left text-[#1A202C]">
                  Rolls - Royce
                </div>
                <div className="w-[128px] h-[20px] font-['Plus_Jakarta_Sans'] text-[14px] font-bold leading-[21px] tracking-[-0.02em] text-left text-[#90A3BF] pt-[5px]">
                  Sedan
                </div>
              </div>
              <Image
                src="/heart-1.png"
                alt="Heart"
                width={24}
                height={24}
                className="absolute top-[83px] left-[958px]"
              />
              <Image
                src="/p-car-3.png"
                alt="Car-3"
                width={240}
                height={75}
                className="absolute top-[190px] left-[735px]"
              />
              <Image
                src="/p-Spesification-3.png"
                alt="Specification-Data"
                height={24}
                width={256}
                className="absolute top-[315px] left-[727px] gap-[16px]"
              />
              <div className="w-[128px] h-[48px] absolute top-[385px] left-[728px] flex">
                <p className="w-[128px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[25.2px] text-left">
                  $96.00/
                </p>
                <p className="text-[#90A3BF] text-[15px] font-semibold pr-5 pt-[3px]">
                  day
                </p>
              </div>
              <Image
                src="/rental-button.png"
                alt="Rent-Button"
                width={160}
                height={55}
                className="absolute top-[375px] left-[843px] px-[20px] gap-[8px] cursor-pointer"
              />
            </div>
          </div>
        </div>
        
        {/* Recomendation Cars */}
        <div className="w-[1016px] h-[448px] absolute top-[1536px] left-[392px] gap-[16px]">
          <div className="w-[1016px] h-[44px] gap-[756px] flex justify-between items-center px-5">
            <div className="w-[156px] h-[24px] gap[8px] font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-center text-[#90A3BF]">
              Recomendation Car
            </div>
            <div className="w-[64px] h-[24px] font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-center text-[#3563E9]">
              View All
            </div>
          </div>

          {/* Cars Row 2 */}
          <div className="w-[1016px] h-[388px] gap-[32px] mt-[15px] flex">
            {/* Card 1 */}
            <div className="w-[317px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
              <div className="w-[128px] h-[48px] absolute top-[83px] left-[24px] gap-[4px]">
                <div className="w-[128px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[30px] tracking-[-0.03em] text-left text-[#1A202C]">
                  All New Rush
                </div>
                <div className="w-[128px] h-[20px] font-['Plus_Jakarta_Sans'] text-[14px] font-bold leading-[21px] tracking-[-0.02em] text-left text-[#90A3BF] pt-[5px]">
                  SUV
                </div>
              </div>
              <Image
                src="/heart-1.png"
                alt="Heart"
                width={24}
                height={24}
                className="absolute top-[83px] left-[256px]"
              />
              <Image
                src="/car-1.png"
                alt="Car-1"
                width={254}
                height={102}
                className="absolute top-[155px] left-[35px]"
              />
              <Image
                src="/Spesification-1.png"
                alt="Specification-Data"
                height={24}
                width={256}
                className="absolute top-[315px] left-[30px] gap-[16px]"
              />
              <div className="w-[128px] h-[48px] absolute top-[372px] left-[30px] flex">
                <p className="w-[128px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[25.2px] text-left">
                  $72.00/
                </p>
                <p className="text-[#90A3BF] text-[15px] font-semibold pr-5 pt-[3px]">
                  day
                </p>
              </div>
              <span className="text-[14px] font-bold absolute top-[403px] left-[30px] font-['Plus_Jakarta_Sans'] w-[128px] h-[20px] leading-[17.64px] line-through text-left text-[#90A3BF]">
                  $80.00
              </span>
              <Image
                src="/rental-button.png"
                alt="Rent-Button"
                width={160}
                height={55}
                className="absolute top-[375px] left-[145px] px-[20px] gap-[8px] cursor-pointer"
              />
            </div>

            {/* Card 2 */}
              <div className="w-[317px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
                <div className="w-[128px] h-[48px] absolute top-[83px] left-[375px] gap-[4px]">
                  <div className="w-[128px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[30px] tracking-[-0.03em] text-left text-[#1A202C]">
                    CR  - V
                  </div>
                  <div className="w-[128px] h-[20px] font-['Plus_Jakarta_Sans'] text-[14px] font-bold leading-[21px] tracking-[-0.02em] text-left text-[#90A3BF] pt-[5px]">
                    SUV
                  </div>
                </div>
                <Image
                  src="/red-heart.png"
                  alt="Heart"
                  width={24}
                  height={24}
                  className="absolute top-[83px] left-[608px]"
                />
                <Image
                  src="/car-2.png"
                  alt="Car-2"
                  width={254}
                  height={102}
                  className="absolute top-[160px] left-[385px]"
                />
                <Image
                  src="/Spesification-2.png"
                  alt="Specification-Data"
                  height={24}
                  width={256}
                  className="absolute top-[315px] left-[380px] gap-[16px]"
                />
                <div className="w-[128px] h-[48px] absolute top-[385px] left-[381px] flex">
                  <p className="w-[128px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[25.2px] text-left">
                    $80.00/
                  </p>
                  <p className="text-[#90A3BF] text-[15px] font-semibold pr-5 pt-[3px]">
                    day
                  </p>
                </div>
                <Image
                  src="/rental-button.png"
                  alt="Rent-Button"
                  width={160}
                  height={55}
                  className="absolute top-[375px] left-[497px] px-[20px] gap-[8px] cursor-pointer"
                />
              </div>

            {/* Card 3 */}
            <div className="w-[317px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
              <div className="w-[128px] h-[48px] absolute top-[83px] left-[725px] gap-[4px]">
                <div className="w-[128px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[30px] tracking-[-0.03em] text-left text-[#1A202C]">
                  All New Terios
                </div>
                <div className="w-[128px] h-[20px] font-['Plus_Jakarta_Sans'] text-[14px] font-bold leading-[21px] tracking-[-0.02em] text-left text-[#90A3BF] pt-[5px]">
                  SUV
                </div>
              </div>
              <Image
                src="/heart-1.png"
                alt="Heart"
                width={24}
                height={24}
                className="absolute top-[83px] left-[958px]"
              />
              <Image
                src="/car-3.png"
                alt="Car-3"
                width={252}
                height={112}
                className="absolute top-[155px] left-[730px]"
              />
              <Image
                src="/Spesification-3.png"
                alt="Specification-Data"
                height={24}
                width={256}
                className="absolute top-[315px] left-[727px] gap-[16px]"
              />
              <div className="w-[128px] h-[48px] absolute top-[385px] left-[728px] flex">
                <p className="w-[128px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[25.2px] text-left">
                  $74.00/
                </p>
                <p className="text-[#90A3BF] text-[15px] font-semibold pr-5 pt-[3px]">
                  day
                </p>
              </div>
              <Image
                src="/rental-button.png"
                alt="Rent-Button"
                width={160}
                height={55}
                className="absolute top-[375px] left-[843px] px-[20px] gap-[8px] cursor-pointer"
              />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}



