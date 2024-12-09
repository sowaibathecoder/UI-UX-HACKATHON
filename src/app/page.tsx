import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO SECTION WORK */}

      <div className="w-[1440px] h-[2120px] absolute top-[124px] bg-[#F6F7F9]">
        {/* AD_ONE */}
        <div className="w-[640px] h-[360px] absolute top-[32px] left-[64px] rounded-[10px] bg-[#54A6FF]">
          <div className="w-[284px] h-[224px] absolute top-[24px] left-[24px] gap-[20px]">
            <div className="w-[284px] h-[160px] gap-[16px]">
              <div className="w-[272px] h-[96px] font-['Plus_Jakarta_Sans'] text-2xl font-semibold leading-[48px] tracking-tight text-left text-white">
                The Best Platform
                <br /> for Car Rental
              </div>
              <div className="w-[284px] h-[48px] font-['Plus_Jakarta_Sans'] text-base font-medium leading-6 tracking-[-0.02em] text-left text-white">
                Ease of doing a car rental safely and reliably. Of course at a
                low price.
              </div>
            </div>
            <button className="w-[120px] h-[44px] px-5 gap-2 rounded bg-[#3563E9] mt-[18px] font-['Plus_Jakarta_Sans'] text-base font-semibold leading-6 tracking-[-0.02em] text-center text-white">
              Rental Car
            </button>
          </div>
          <Image
            src="/car-ad-1.png"
            alt="Car_Ad_1"
            width={406}
            height={116}
            className="absolute top-[234px] left-[137px]"
          />
        </div>

        {/* AD_TWO */}
        <div className="w-[640px] h-[360px] absolute top-[32px] left-[736px] rounded-[10px] bg-[#3563E9]">
          <div className="w-[284px] h-[224px] absolute top-[24px] left-[24px] gap-[20px]">
            <div className="w-[284px] h-[160px] gap-[16px]">
              <div className="w-[272px] h-[96px] font-['Plus_Jakarta_Sans'] text-2xl font-semibold leading-[48px] tracking-tight text-left text-white">
                Easy way to rent a car at a low price
              </div>
              <div className="w-[284px] h-[48px] font-['Plus_Jakarta_Sans'] text-base font-medium leading-6 tracking-[-0.02em] text-left text-white">
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


        {/* Pick-Up-Div */}
        <div className="w-[582px] h-[132px] absolute top-[424px] left-[64px] rounded-[10px]">
          <div className="w-[94px] h-[20px] absolute top-[24px] left-[48px] gap-[8px] flex">
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
          <div className="w-[480px] h-[48px] absolute top-[60px] left-[48px] gap-[24px] flex">
            <div className="w-[126px] h-[48px] gap-[8px]">
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
            <div className="w-[126px] h-[48px] gap-[8px]">
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
            <div className="w-[126px] h-[48px] gap-[8px]">
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
          className="absolute top-[430px] left-[640px] cursor-pointer"
        />

        {/* Drop-Off-Div*/}
        <div className="w-[582px] h-[132px] absolute top-[424px] left-[794px] rounded-[10px]">
          <div className="w-[94px] h-[20px] absolute top-[24px] left-[48px] gap-[8px] flex">
            <Image
              src="/mark-2.png"
              alt="Dot_Mark"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <div className="w-[78px] h-[20px] font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-left absolute bottom-[1px] left-[23px]">
              Drop - Off
            </div>
          </div>
          <div className="w-[480px] h-[48px] absolute top-[60px] left-[48px] gap-[24px] flex">
            <div className="w-[126px] h-[48px] gap-[8px]">
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
            <div className="w-[126px] h-[48px] gap-[8px]">
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
            <div className="w-[126px] h-[48px] gap-[8px]">
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


        {/* Main */}
        <div className="w-[1312px] h-[1391px] absolute top-[592px] left-[64px] gap-[32px]">

          {/* View-All-Cars-Div */}
          <div className="w-[1312] h-[44px] gap-[1076px] flex justify-between items-center">
            <div className=" w-[132px] h-[24px] font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-[20.16px] pl-[8px] text-center text-[#90A3BF]">
              Popular Car
            </div>
            <div className=" w-[132px] h-[24px] font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-[20.16px] text-center text-[#3563E9]">
              View All
            </div>
          </div>

          {/* Popular Cars Div */}

          {/* First Cars Row */}
          <div className="w-[1310px] h-[390px] gap-[32px] flex absolute top-[65px]">
            {/* Card 1 */}
            <div className="w-[304px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
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
                width={250}
                height={72}
                className="absolute top-[122px] left-[30px]"
              />
              <Image
                src="/p-Spesification-1.png"
                alt="Specification-Data"
                height={24}
                width={256}
                className="absolute top-[272px] left-[24px] gap-[16px]"
              />
              <div className="w-[128px] h-[48px] absolute top-[330px] left-[24px] flex">
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
                className="absolute top-[320px] left-[140px] px-[20px] gap-[8px] cursor-pointer"
              />
            </div>

            {/* Card 2 */}
            <div className="w-[304px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
              <div className="w-[128px] h-[48px] absolute top-[24px] left-[358px] gap-[4px]">
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
                className="absolute top-[24px] left-[592px]"
              />
              <Image
                src="/p-car-2.png"
                alt="Car-2"
                width={204}
                height={64}
                className="absolute top-[122px] left-[385px]"
              />
              <Image
                src="/Spesification-2.png"
                alt="Specification-Data"
                height={24}
                width={256}
                className="absolute top-[272px] left-[360px] gap-[16px]"
              />
              <div className="w-[128px] h-[48px] absolute top-[316px] left-[360px] flex">
                <p className="w-[128px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[25.2px] text-left">
                  $80.00/
                </p>
                <p className="text-[#90A3BF] text-[15px] font-semibold pr-5 pt-[3px]">
                  day
                </p>
              </div>
              <span className="text-[14px] font-bold absolute top-[350px] left-[360px] font-['Plus_Jakarta_Sans'] w-[128px] h-[20px] leading-[17.64px] line-through text-left text-[#90A3BF]">
                $100.00
              </span>
              <Image
                src="/rental-button.png"
                alt="Rent-Button"
                width={160}
                height={55}
                className="absolute top-[320px] left-[477px] px-[20px] gap-[8px] cursor-pointer"
              />
            </div>

            {/* Card 3 */}
            <div className="w-[304px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
              <div className="w-[128px] h-[48px] absolute top-[24px] left-[693px] gap-[4px]">
                <div className="w-[128px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[30px] tracking-[-0.03em] text-left text-[#1A202C]">
                 Rolls - Royce
                </div>
                <div className="w-[128px] h-[20px] font-['Plus_Jakarta_Sans'] text-[14px] font-bold leading-[21px] tracking-[-0.02em] text-left text-[#90A3BF] pt-[5px]">
                 Sedan
                </div>
              </div>
              <Image
                src="/red-heart.png"
                alt="Heart"
                width={24}
                height={24}
                className="absolute top-[24px] left-[925px]"
              />
              <Image
                src="/p-car-3.png"
                alt="Car-3"
                width={220}
                height={68}
                className="absolute top-[122px] left-[715px]"
              />
              <Image
                src="/p-Spesification-3.png"
                alt="Specification-Data"
                height={24}
                width={256}
                className="absolute top-[272px] left-[695px] gap-[16px]"
              />
              <div className="w-[128px] h-[48px] absolute top-[330px] left-[695px] flex">
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
                className="absolute top-[320px] left-[812px] px-[20px] gap-[8px] cursor-pointer"
              />
            </div>

            {/* Card 4 */}
            <div className="w-[304px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
              <div className="w-[128px] h-[48px] absolute top-[24px] left-[1030px] gap-[4px]">
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
                className="absolute top-[24px] left-[1260px]"
              />
              <Image
                src="/p-car-4.png"
                alt="Car-4"
                width={204}
                height={64}
                className="absolute top-[122px] left-[1038px]"
              />
              <Image
                src="/p-Spesification-2.png"
                alt="Specification-Data"
                height={24}
                width={256}
                className="absolute top-[272px] left-[1032px] gap-[16px]"
              />
              <div className="w-[128px] h-[48px] absolute top-[316px] left-[1033px] flex">
                <p className="w-[128px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[25.2px] text-left">
                  $80.00/
                </p>
                <p className="text-[#90A3BF] text-[15px] font-semibold pr-5 pt-[3px]">
                  day
                </p>
              </div>
              <span className="text-[14px] font-bold absolute top-[350px] left-[1033px] font-['Plus_Jakarta_Sans'] w-[128px] h-[20px] leading-[17.64px] line-through text-left text-[#90A3BF]">
                $100.00
              </span>
              <Image
                src="/rental-button.png"
                alt="Rent-Button"
                width={160}
                height={55}
                className="absolute top-[320px] left-[1148px] px-[20px] gap-[8px] cursor-pointer"
              />
            </div>
          </div>


          {/* Recomendation Cars Div */}
            <div className=" w-[196px] h-[44px] font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-[20.16px] pr-1 text-center text-[#90A3BF] absolute top-[500px] items-center justify-center flex">
              Recomendation Car
            </div>

          {/* Second Cars Row */}
          <div className="w-[1310px] h-[390px] gap-[32px] flex absolute top-[565px]">
            {/* Card 1 */}
            <div className="w-[304px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
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
                className="absolute top-[272px] left-[24px] gap-[16px]"
              />
              <div className="w-[128px] h-[48px] absolute top-[316px] left-[24px] flex">
                <p className="w-[128px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[25.2px] text-left">
                  $72.00/
                </p>
                <p className="text-[#90A3BF] text-[15px] font-semibold pr-5 pt-[3px]">
                  day
                </p>
              </div>
              <span className="text-[14px] font-bold absolute top-[350px] left-[24px] font-['Plus_Jakarta_Sans'] w-[128px] h-[20px] leading-[17.64px] text-left text-[#90A3BF]">
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
            <div className="w-[304px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
              <div className="w-[128px] h-[48px] absolute top-[24px] left-[358px] gap-[4px]">
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
                className="absolute top-[24px] left-[592px]"
              />
              <Image
                src="/car-2.png"
                alt="Car-2"
                width={248}
                height={100}
                className="absolute top-[122px] left-[365px]"
              />
              <Image
                src="/Spesification-2.png"
                alt="Specification-Data"
                height={24}
                width={256}
                className="absolute top-[272px] left-[360px] gap-[16px]"
              />
              <div className="w-[128px] h-[48px] absolute top-[330px] left-[360px] flex">
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
                className="absolute top-[320px] left-[477px] px-[20px] gap-[8px] cursor-pointer"
              />
            </div>

            {/* Card 3 */}
            <div className="w-[304px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
              <div className="w-[128px] h-[48px] absolute top-[24px] left-[693px] gap-[4px]">
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
                className="absolute top-[24px] left-[925px]"
              />
              <Image
                src="/car-3.png"
                alt="Car-3"
                width={224}
                height={100}
                className="absolute top-[122px] left-[710px]"
              />
              <Image
                src="/Spesification-3.png"
                alt="Specification-Data"
                height={24}
                width={256}
                className="absolute top-[272px] left-[695px] gap-[16px]"
              />
              <div className="w-[128px] h-[48px] absolute top-[330px] left-[695px] flex">
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
                className="absolute top-[320px] left-[812px] px-[20px] gap-[8px] cursor-pointer"
              />
            </div>

            {/* Card 4 */}
            <div className="w-[304px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
              <div className="w-[128px] h-[48px] absolute top-[24px] left-[1030px] gap-[4px]">
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
                className="absolute top-[24px] left-[1260px]"
              />
              <Image
                src="/car-4.png"
                alt="Car-4"
                width={248}
                height={100}
                className="absolute top-[122px] left-[1038px]"
              />
              <Image
                src="/Spesification-4.png"
                alt="Specification-Data"
                height={24}
                width={256}
                className="absolute top-[272px] left-[1032px] gap-[16px]"
              />
              <div className="w-[128px] h-[48px] absolute top-[330px] left-[1033px] flex">
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
                className="absolute top-[320px] left-[1148px] px-[20px] gap-[8px] cursor-pointer"
              />
            </div>
          </div>


          {/* Third Cars Row */}
          <div className="w-[1310px] h-[390px] gap-[32px] flex absolute top-[1000px]">
            {/* Card 1 */}
            <div className="w-[304px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
              <div className="w-[128px] h-[48px] absolute top-[24px] left-[24px] gap-[4px]">
                <div className="w-[150px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[30px] tracking-[-0.03em] text-left text-[#1A202C]">
                  MG ZX Exclusice
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
            <div className="w-[304px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
              <div className="w-[128px] h-[48px] absolute top-[24px] left-[358px] gap-[4px]">
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
                className="absolute top-[24px] left-[592px]"
              />
              <Image
                src="/car-6.png"
                alt="Car-2"
                width={288}
                height={112}
                className="absolute top-[122px] left-[345px]"
              />
              <Image
                src="/Spesification-2.png"
                alt="Specification-Data"
                height={24}
                width={256}
                className="absolute top-[272px] left-[360px] gap-[16px]"
              />
              <div className="w-[128px] h-[48px] absolute top-[330px] left-[360px] flex">
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
                className="absolute top-[320px] left-[477px] px-[20px] gap-[8px] cursor-pointer"
              />
            </div>

            {/* Card 3 */}
            <div className="w-[304px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
              <div className="w-[128px] h-[48px] absolute top-[24px] left-[693px] gap-[4px]">
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
                className="absolute top-[24px] left-[925px]"
              />
              <Image
                src="/car-5.png"
                alt="Car-3"
                width={264}
                height={108}
                className="absolute top-[122px] left-[690px]"
              />
              <Image
                src="/Spesification-5.png"
                alt="Specification-Data"
                height={24}
                width={256}
                className="absolute top-[272px] left-[695px] gap-[16px]"
              />
              <div className="w-[128px] h-[48px] absolute top-[330px] left-[695px] flex">
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
                className="absolute top-[320px] left-[812px] px-[20px] gap-[8px] cursor-pointer"
              />
            </div>

            {/* Card 4 */}
            <div className="w-[304px] h-[388px] rounded-[10px] bg-[#FFFFFF]">
              <div className="w-[128px] h-[48px] absolute top-[24px] left-[1030px] gap-[4px]">
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
                className="absolute top-[24px] left-[1260px]"
              />
              <Image
                src="/car-7.png"
                alt="Car-4"
                width={288}
                height={112}
                className="absolute top-[122px] left-[1015px]"
              />
              <Image
                src="/Spesification-4.png"
                alt="Specification-Data"
                height={24}
                width={256}
                className="absolute top-[272px] left-[1032px] gap-[16px]"
              />
              <div className="w-[128px] h-[48px] absolute top-[330px] left-[1033px] flex">
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
                className="absolute top-[320px] left-[1148px] px-[20px] gap-[8px] cursor-pointer"
              />
            </div>
          </div>


          {/* Show More Car */}
          <div className="w-[734px] h-[44px] absolute top-[1442px] left-[580px] gap-[438px] flex justify-between cursor-pointer">
            <Image src="/Show-More.png" alt="show more button" width={156} height={44}/>
            <div className="w-[140px] h-[24px] font-['Plus_Jakarta_Sans'] text-sm font-medium leading-[48px] tracking-[-0.02em] text-right text-[#90A3BF]">
              120 Car
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
