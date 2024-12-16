import Image from "next/image";
import Link from "next/link";

export default function Category() {
  return (
    <>
      {/* Main Div */}
      <div className="w-[1440px] h-[1600px] absolute top-[124px] bg-[#F6F7F9]">
        {/* Side Div */}
        <div className="w-[360px] h-[1600px] p-[32px] bg-[#FFFFFF]">
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

        {/* Pick-Up-Div */}
        <div className="w-[486px] h-[132px] absolute top-[32px] left-[392px] rounded-[10px] bg-white">
          <div className="w-[92px] h-[20px] absolute top-[24px] left-[24px] gap-[8px] flex">
            <Image
              src="/mark-1.png"
              alt="Dot_Mark"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <div className="w-[68px] h-[20px] font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-left absolute bottom-[1px] left-[23px]">
              Pick - Up
            </div>
          </div>
          <div className="w-[438px] h-[48px] absolute top-[60px] left-[24px] gap-[24px] flex">
            <div className="w-[110px] h-[48px] gap-[8px]">
              <div className="w-[77px] h-[20px] font-['Plus_Jakarta_Sans'] text-[16px] font-bold leading-[24px] tracking-[-0.02em] text-left text-[#1A202C]">
                Locations
              </div>
              <div className="w-[126px] h-[20px] gap-[8px] flex">
                <div className="w-[126px] h-[20px] gap-[8px] font-['Plus_Jakarta_Sans'] text-[12px] font-medium leading-[15.12px] tracking-[-0.02em] text-left text-[#90A3BF] mt-[6px]">
                  Select your city
                </div>
                <div>
                  <Image
                    src="/arrow-down.png"
                    alt="Arrow-Down-Image"
                    width={16}
                    height={16}
                    className="mt-[5px] mr-[8px]"
                  />
                </div>
              </div>
            </div>
            <div className="w-0 h-[48px] border border-solid border-[#C3D4E966] "></div>
            <div className="w-[110px] h-[48px] gap-[8px]">
              <div className="w-[77px] h-[20px] font-['Plus_Jakarta_Sans'] text-[16px] font-bold leading-[24px] tracking-[-0.02em] text-left text-[#1A202C]">
                Date
              </div>
              <div className="w-[126px] h-[20px] gap-[8px] flex">
                <div className="w-[126px] h-[20px] gap-[8px] font-['Plus_Jakarta_Sans'] text-[12px] font-medium leading-[15.12px] tracking-[-0.02em] text-left text-[#90A3BF] mt-[6px]">
                  Select your date
                </div>
                <div>
                  <Image
                    src="/arrow-down.png"
                    alt="Arrow-Down-Image"
                    width={16}
                    height={16}
                    className="mt-[5px] mr-[8px]"
                  />
                </div>
              </div>
            </div>
            <div className="w-0 h-[48px] border border-solid border-[#C3D4E966] "></div>
            <div className="w-[110px] h-[48px] gap-[8px]">
              <div className="w-[77px] h-[20px] font-['Plus_Jakarta_Sans'] text-[16px] font-bold leading-[24px] tracking-[-0.02em] text-left text-[#1A202C]">
                Time
              </div>
              <div className="w-[126px] h-[20px] gap-[8px] flex">
                <div className="w-[126px] h-[20px] gap-[8px] font-['Plus_Jakarta_Sans'] text-[12px] font-medium leading-[15.12px] tracking-[-0.02em] text-left text-[#90A3BF] mt-[6px]">
                  Select your time
                </div>
                <div>
                  <Image
                    src="/arrow-down.png"
                    alt="Arrow-Down-Image"
                    width={16}
                    height={16}
                    className="mt-[5px] mr-[8px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Drop-Off-Div */}
        <div className="w-[486px] h-[132px] absolute top-[32px] left-[921px] rounded-[10px] bg-white">
          <div className="w-[92px] h-[20px] absolute top-[24px] left-[24px] gap-[8px] flex">
            <Image
              src="/mark-2.png"
              alt="Dot_Mark"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <div className="w-[68px] h-[20px] font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-left absolute bottom-[1px] left-[23px]">
              Pick - Up
            </div>
          </div>
          <div className="w-[438px] h-[48px] absolute top-[60px] left-[24px] gap-[24px] flex">
            <div className="w-[110px] h-[48px] gap-[8px]">
              <div className="w-[77px] h-[20px] font-['Plus_Jakarta_Sans'] text-[16px] font-bold leading-[24px] tracking-[-0.02em] text-left text-[#1A202C]">
                Locations
              </div>
              <div className="w-[126px] h-[20px] gap-[8px] flex">
                <div className="w-[126px] h-[20px] gap-[8px] font-['Plus_Jakarta_Sans'] text-[12px] font-medium leading-[15.12px] tracking-[-0.02em] text-left text-[#90A3BF] mt-[6px]">
                  Select your city
                </div>
                <div>
                  <Image
                    src="/arrow-down.png"
                    alt="Arrow-Down-Image"
                    width={16}
                    height={16}
                    className="mt-[5px] mr-[8px]"
                  />
                </div>
              </div>
            </div>
            <div className="w-0 h-[48px] border border-solid border-[#C3D4E966] "></div>
            <div className="w-[110px] h-[48px] gap-[8px]">
              <div className="w-[77px] h-[20px] font-['Plus_Jakarta_Sans'] text-[16px] font-bold leading-[24px] tracking-[-0.02em] text-left text-[#1A202C]">
                Date
              </div>
              <div className="w-[126px] h-[20px] gap-[8px] flex">
                <div className="w-[126px] h-[20px] gap-[8px] font-['Plus_Jakarta_Sans'] text-[12px] font-medium leading-[15.12px] tracking-[-0.02em] text-left text-[#90A3BF] mt-[6px]">
                  Select your date
                </div>
                <div>
                  <Image
                    src="/arrow-down.png"
                    alt="Arrow-Down-Image"
                    width={16}
                    height={16}
                    className="mt-[5px] mr-[8px]"
                  />
                </div>
              </div>
            </div>
            <div className="w-0 h-[48px] border border-solid border-[#C3D4E966] "></div>
            <div className="w-[110px] h-[48px] gap-[8px]">
              <div className="w-[77px] h-[20px] font-['Plus_Jakarta_Sans'] text-[16px] font-bold leading-[24px] tracking-[-0.02em] text-left text-[#1A202C]">
                Time
              </div>
              <div className="w-[126px] h-[20px] gap-[8px] flex">
                <div className="w-[126px] h-[20px] gap-[8px] font-['Plus_Jakarta_Sans'] text-[12px] font-medium leading-[15.12px] tracking-[-0.02em] text-left text-[#90A3BF] mt-[6px]">
                  Select your time
                </div>
                <div>
                  <Image
                    src="/arrow-down.png"
                    alt="Arrow-Down-Image"
                    width={16}
                    height={16}
                    className="mt-[5px] mr-[8px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Switch Button */}
        <Image
          src="/Switch.png"
          alt="Switch Button"
          width={150}
          height={150}
          className="absolute w-[140px] h-[125px] top-[50px] left-[828px] cursor-pointer"
        />

        {/* Cars Div */}
        <div className="w-[1015px] h-[1228px] absolute top-[200px] left-[392px] gap-[32px]">

          {/* First Car Row */}
          <div className="w-[1014px] h-[388px] gap-[32px] flex">
            {/* Card 1 */}
            <div className="w-[317px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
              <div className="w-[128px] h-[48px] absolute top-[24px] left-[24px] gap-[4px]">
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
                className="absolute top-[24px] left-[256px]"
              />
              <Image
                src="/p-car-1.png"
                alt="Car-1"
                width={272}
                height={84}
                className="absolute top-[122px] left-[20px]"
              />
              <Image
                src="/p-Spesification-1.png"
                alt="Specification-Data"
                height={24}
                width={256}
                className="absolute top-[272px] left-[30px] gap-[16px]"
              />
              <div className="w-[128px] h-[48px] absolute top-[330px] left-[30px] flex">
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
                className="absolute top-[320px] left-[145px] px-[20px] gap-[8px] cursor-pointer"
              />
            </div>

            {/* Card 2 */}
            <Link href="/detail">
              <div className="w-[317px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
                <div className="w-[128px] h-[48px] absolute top-[24px] left-[375px] gap-[4px]">
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
                  className="absolute top-[24px] left-[608px]"
                />
                <Image
                  src="/nissan.png"
                  alt="Car-2"
                  width={228}
                  height={72}
                  className="absolute top-[122px] left-[395px]"
                />
                <Image
                  src="/Spesification-2.png"
                  alt="Specification-Data"
                  height={24}
                  width={256}
                  className="absolute top-[272px] left-[380px] gap-[16px]"
                />
                <div className="w-[128px] h-[48px] absolute top-[316px] left-[381px] flex">
                  <p className="w-[128px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[25.2px] text-left">
                    $80.00/
                  </p>
                  <p className="text-[#90A3BF] text-[15px] font-semibold pr-5 pt-[3px]">
                    day
                  </p>
                </div>
                <span className="text-[14px] font-bold absolute top-[350px] left-[381px] font-['Plus_Jakarta_Sans'] w-[128px] h-[20px] leading-[17.64px] line-through text-left text-[#90A3BF]">
                  $100.00
                </span>
                <Image
                  src="/rental-button.png"
                  alt="Rent-Button"
                  width={160}
                  height={55}
                  className="absolute top-[320px] left-[497px] px-[20px] gap-[8px] cursor-pointer"
                />
              </div>
            </Link>

            {/* Card 3 */}
            <div className="w-[317px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
              <div className="w-[128px] h-[48px] absolute top-[24px] left-[725px] gap-[4px]">
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
                className="absolute top-[24px] left-[958px]"
              />
              <Image
                src="/p-car-3.png"
                alt="Car-3"
                width={220}
                height={68}
                className="absolute top-[122px] left-[740px]"
              />
              <Image
                src="/p-Spesification-3.png"
                alt="Specification-Data"
                height={24}
                width={256}
                className="absolute top-[272px] left-[727px] gap-[16px]"
              />
              <div className="w-[128px] h-[48px] absolute top-[330px] left-[728px] flex">
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
                className="absolute top-[320px] left-[843px] px-[20px] gap-[8px] cursor-pointer"
              />
            </div>
          </div>

          {/* Second Car Row */}
          <div className="w-[1014px] h-[388px] gap-[32px] absolute top-[420px] flex">
            {/* Card 1 */}
            <div className="w-[317px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
              <div className="w-[128px] h-[48px] absolute top-[24px] left-[24px] gap-[4px]">
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
                className="absolute top-[24px] left-[256px]"
              />
              <Image
                src="/car-1.png"
                alt="Car-1"
                width={224}
                height={100}
                className="absolute top-[122px] left-[40px]"
              />
              <Image
                src="/Spesification-1.png"
                alt="Specification-Data"
                height={24}
                width={256}
                className="absolute top-[272px] left-[30px] gap-[16px]"
              />
              <div className="w-[128px] h-[48px] absolute top-[316px] left-[30px] flex">
                <p className="w-[128px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[25.2px] text-left">
                  $72.00/
                </p>
                <p className="text-[#90A3BF] text-[15px] font-semibold pr-5 pt-[3px]">
                  day
                </p>
              </div>
              <span className="text-[14px] font-bold absolute top-[350px] left-[30px] font-['Plus_Jakarta_Sans'] w-[128px] h-[20px] leading-[17.64px] text-left text-[#90A3BF]">
                $80.00
              </span>
              <Image
                src="/rental-button.png"
                alt="Rent-Button"
                width={160}
                height={55}
                className="absolute top-[320px] left-[145px] px-[20px] gap-[8px] cursor-pointer"
              />
            </div>

            {/* Card 2 */}
            <div className="w-[317px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
              <div className="w-[128px] h-[48px] absolute top-[24px] left-[375px] gap-[4px]">
                <div className="w-[128px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[30px] tracking-[-0.03em] text-left text-[#1A202C]">
                  CR - V
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
                className="absolute top-[24px] left-[608px]"
              />
              <Image
                src="/car-2.png"
                alt="Car-2"
                width={248}
                height={100}
                className="absolute top-[122px] left-[385px]"
              />
              <Image
                src="/Spesification-2.png"
                alt="Specification-Data"
                height={24}
                width={256}
                className="absolute top-[272px] left-[380px] gap-[16px]"
              />
              <div className="w-[128px] h-[48px] absolute top-[330px] left-[381px] flex">
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
                className="absolute top-[320px] left-[497px] px-[20px] gap-[8px] cursor-pointer"
              />
            </div>

            {/* Card 3 */}
            <div className="w-[317px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
              <div className="w-[128px] h-[48px] absolute top-[24px] left-[725px] gap-[4px]">
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
                className="absolute top-[24px] left-[958px]"
              />
              <Image
                src="/car-3.png"
                alt="Car-3"
                width={224}
                height={100}
                className="absolute top-[122px] left-[740px]"
              />
              <Image
                src="/Spesification-3.png"
                alt="Specification-Data"
                height={24}
                width={256}
                className="absolute top-[272px] left-[727px] gap-[16px]"
              />
              <div className="w-[128px] h-[48px] absolute top-[330px] left-[728px] flex">
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
                className="absolute top-[320px] left-[843px] px-[20px] gap-[8px] cursor-pointer"
              />
            </div>
          </div>


          {/* Third Car Row */}
          <div className="w-[1014px] h-[388px] gap-[32px] flex absolute top-[839px]">
            {/* Card 1 */}
            <div className="w-[317px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
              <div className="w-[128px] h-[48px] absolute top-[24px] left-[24px] gap-[4px]">
                <div className="w-[150px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[30px] tracking-[-0.03em] text-left text-[#1A202C]">
                  MG ZX Exclusice
                </div>
                <div className="w-[128px] h-[20px] font-['Plus_Jakarta_Sans'] text-[14px] font-bold leading-[21px] tracking-[-0.02em] text-left text-[#90A3BF] pt-[5px]">
                  Hatchback
                </div>
              </div>
              <Image
                src="/heart-1.png"
                alt="Heart"
                width={24}
                height={24}
                className="absolute top-[24px] left-[256px]"
              />
              <Image
                src="/car-5.png"
                alt="Car-1"
                width={264}
                height={108}
                className="absolute top-[122px] left-[25px]"
              />
              <Image
                src="/Spesification-6.png"
                alt="Specification-Data"
                height={24}
                width={256}
                className="absolute top-[272px] left-[24px] gap-[16px]"
              />
              <div className="w-[128px] h-[48px] absolute top-[316px] left-[24px] flex">
                <p className="w-[128px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[25.2px] text-left">
                  $76.00/
                </p>
                <p className="text-[#90A3BF] text-[15px] font-semibold pr-5 pt-[3px]">
                  day
                </p>
              </div>
              <span className="text-[14px] font-bold absolute top-[350px] left-[24px] font-['Plus_Jakarta_Sans'] w-[128px] h-[20px] leading-[17.64px] line-through text-left text-[#90A3BF]">
                $80.00
              </span>
              <Image
                src="/rental-button.png"
                alt="Rent-Button"
                width={160}
                height={55}
                className="absolute top-[320px] left-[140px] px-[20px] gap-[8px] cursor-pointer"
              />
            </div>

            {/* Card 2 */}
            <div className="w-[317px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
              <div className="w-[128px] h-[48px] absolute top-[24px] left-[375px] gap-[4px]">
                <div className="w-[128px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[30px] tracking-[-0.03em] text-left text-[#1A202C]">
                  New MG ZS
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
                className="absolute top-[24px] left-[608px]"
              />
              <Image
                src="/car-6.png"
                alt="Car-2"
                width={288}
                height={112}
                className="absolute top-[122px] left-[365px]"
              />
              <Image
                src="/Spesification-2.png"
                alt="Specification-Data"
                height={24}
                width={256}
                className="absolute top-[272px] left-[380px] gap-[16px]"
              />
              <div className="w-[128px] h-[48px] absolute top-[330px] left-[381px] flex">
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
                className="absolute top-[320px] left-[497px] px-[20px] gap-[8px] cursor-pointer"
              />
            </div>

            {/* Card 3 */}
            <div className="w-[317px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
              <div className="w-[128px] h-[48px] absolute top-[24px] left-[725px] gap-[4px]">
                <div className="w-[128px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[30px] tracking-[-0.03em] text-left text-[#1A202C]">
                  MG ZX Excite
                </div>
                <div className="w-[128px] h-[20px] font-['Plus_Jakarta_Sans'] text-[14px] font-bold leading-[21px] tracking-[-0.02em] text-left text-[#90A3BF] pt-[5px]">
                  Hatchback
                </div>
              </div>
              <Image
                src="/red-heart.png"
                alt="Heart"
                width={24}
                height={24}
                className="absolute top-[24px] left-[958px]"
              />
              <Image
                src="/car-5.png"
                alt="Car-3"
                width={264}
                height={108}
                className="absolute top-[122px] left-[723px]"
              />
              <Image
                src="/Spesification-5.png"
                alt="Specification-Data"
                height={24}
                width={256}
                className="absolute top-[272px] left-[727px] gap-[16px]"
              />
              <div className="w-[128px] h-[48px] absolute top-[330px] left-[728px] flex">
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
                className="absolute top-[320px] left-[843px] px-[20px] gap-[8px] cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Show more car div */}
        <div className="w-[586px] h-[44px] absolute top-[1492px] left-[822px] gap-[290px] flex cursor-pointer">
          <Image src="/Show-More.png" alt="show more button" width={156} height={44}/>
          <div className="w-[140px] h-[24px] font-['Plus_Jakarta_Sans'] text-sm font-medium leading-[48px] tracking-[-0.02em] text-right text-[#90A3BF]">
              120 Car
          </div>
        </div>

      </div>
    </>
  );
}
