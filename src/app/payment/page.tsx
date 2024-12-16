import Link from "next/link";
import Image from "next/image";

export default function Payment() {
  return (
    <>
      <div className="w-[1440px] h-[2240px] pt-[32px] bg-[#F6F7F9]">

        {/* ******************* Div One **********************/}

        <div className="w-[852px] h-[2176px] absolute left-[32px] gap-[32px]">

          {/* Billing Info Div */}
          <div className="w-[852px] h-[336px] rounded-[10px] bg-white">
            <div className="w-[192px] h-[48px] absolute top-[24px] left-[24px] gap-[4px]">
              <h2 className="font-['Plus_Jakarta_Sans'] text-[20px] font-bold text-[#1A202C]">
                Billing Info
              </h2>
              <p className="font-['Plus_Jakarta_Sans'] text-[14px] text-[#90A3BF]">
                Please enter your billing info
              </p>
            </div>
            <p className="w-[72px] h-[20px] absolute top-[52px] left-[756px] font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[21px] tracking-[-0.02em] text-right text-[#90A3BF]">
              Step 1 of 4
            </p>

            <div className="w-[386px] h-[92px] absolute top-[104px] left-[24px] gap-[16px]">
              <label className="w-[48px] h-[20px] font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-left text-[#1A202C]">
                Name
              </label>
              <input
                type="text"
                className="w-[383px] h-[56px] rounded-[10px] bg-[#F6F7F9] px-7 flex items-center font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[21px] tracking-[-0.02em] text-[#90A3BF] mt-[10px]"
                placeholder="Enter Your Name"
              />
            </div>

            <div className="w-[386px] h-[92px] absolute top-[104px] left-[442px] gap-[16px]">
              <label className="w-[48px] h-[20px] font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-left text-[#1A202C]">
                Phone Number
              </label>
              <input
                type="number"
                className="w-[383px] h-[56px] rounded-[10px] bg-[#F6F7F9] px-7 flex items-center font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[21px] tracking-[-0.02em] text-[#90A3BF] mt-[10px]"
                placeholder="Enter Your Phone number"
              />
            </div>

            <div className="w-[386px] h-[92px] absolute top-[220px] left-[24px] gap-[16px]">
              <label className="w-[48px] h-[20px] font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-left text-[#1A202C]">
                Address
              </label>
              <input
                type="address"
                className="w-[383px] h-[56px] rounded-[10px] bg-[#F6F7F9] px-7 flex items-center font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[21px] tracking-[-0.02em] text-[#90A3BF] mt-[10px]"
                placeholder="Enter Your Current Address"
              />
            </div>

            <div className="w-[386px] h-[92px] absolute top-[220px] left-[442px] gap-[16px]">
              <label className="w-[48px] h-[20px] font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-left text-[#1A202C]">
                Town/City
              </label>
              <input
                type="city"
                className="w-[383px] h-[56px] rounded-[10px] bg-[#F6F7F9] px-7 flex items-center font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[21px] tracking-[-0.02em] text-[#90A3BF] mt-[10px]"
                placeholder="Enter Your City or Town Name"
              />
            </div>
          </div>

          {/* Rental Info Div */}
          <div className="absolute top-[367px] w-[852px] h-[664px] rounded-[10px] bg-white p-6">
            <div className="w-[200px] h-[48px] gap-[4px]">
              <h2 className="w-[200px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[25px] tracking-[-0.03em] text-left text-[#1A202C]">
                Rental Info
              </h2>
              <p className="w-[200px] h-[20px] font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[25px] tracking-[-0.02em] text-left text-[#90A3BF]">
                Please select your rental date
              </p>
            </div>
            <p className="w-[72px] h-[20px] absolute top-[52px] left-[756px] font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[21px] tracking-[-0.02em] text-right text-[#90A3BF]">
              Step 2 of 4
            </p>

            {/* Pick-Up Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 absolute top-[104px] left-[24px]">
                <input type="radio" id="pickup" name="rental" defaultChecked />
                <label
                  htmlFor="pickup"
                  className="w-[68px] h-[20px] font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-[20.16px] tracking-[-0.02em] text-left text-[#1A202C]"
                >
                  Pick - Up
                </label>
              </div>
              {/* Pick-Up Locations */}
              <div className="w-[386px] h-[92px] absolute top-[120px] left-[24px] gap-[16px]">
                <label
                  htmlFor="pickup-location"
                  className="w-[80px] h-[20px] font-semibold text-[16px] leading-6 tracking-[-0.02em] text-[#1A202C] font-['Plus_Jakarta_Sans'] text-left"
                >
                  Locations
                </label>
                <select
                  id="pickup-location"
                  className="w-[386px] h-[56px] absolute bottom-0 left-0 px-5 rounded-[10px] text-[14px] bg-[#F6F7F9] text-[#90A3BF] font-medium leading-[21px] tracking-[-0.02em] text-left font-['Plus_Jakarta_Sans']"
                >
                  <option>Select your city</option>
                  <option>Karachi</option>
                  <option>Mulatn</option>
                  <option>Islamabad</option>
                  <option>Lahore</option>
                  <option>Hyderabad</option>
                </select>
              </div>

              {/* Pick-Up Date */}
              <div className="w-[386px] h-[92px] absolute top-[120px] left-[442px] gap-[16px]">
                <label
                  htmlFor="pickup-date"
                  className="w-[80px] h-[20px] font-semibold text-[16px] leading-6 tracking-[-0.02em] text-[#1A202C] font-['Plus_Jakarta_Sans'] text-left"
                >
                  Date
                </label>
                <select
                  id="pickup-date"
                  className="w-[386px] h-[56px] absolute bottom-0 left-0 px-5 rounded-[10px] text-[14px] bg-[#F6F7F9] text-[#90A3BF] font-medium leading-[21px] tracking-[-0.02em] text-left font-['Plus_Jakarta_Sans']"
                >
                  <option>Select your date</option>
                </select>
              </div>

              {/* Pick-Up Time */}
              <div className="w-[386px] h-[92px] absolute top-[235px] left-[24px] gap-[16px]">
                <label
                  htmlFor="pickup-time"
                  className="w-[80px] h-[20px] font-semibold text-[16px] leading-6 tracking-[-0.02em] text-[#1A202C] font-['Plus_Jakarta_Sans'] text-left"
                >
                  Time
                </label>
                <select
                  id="pickup-time"
                  className="w-[386px] h-[56px] absolute bottom-0 left-0 px-5 rounded-[10px] text-[14px] bg-[#F6F7F9] text-[#90A3BF] font-medium leading-[21px] tracking-[-0.02em] text-left font-['Plus_Jakarta_Sans']"
                >
                  <option>Select your time</option>
                </select>
              </div>
            </div>

            {/* Drop-Off Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 absolute top-[388px] left-[24px]">
                <input type="radio" id="pickup" name="rental" defaultChecked />
                <label
                  htmlFor="pickup"
                  className="w-[80px] h-[20px] font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-[20.16px] tracking-[-0.02em] text-left text-[#1A202C]"
                >
                  Drop - Off
                </label>
              </div>
              {/* Pick-Up Locations */}
              <div className="w-[386px] h-[92px] absolute top-[405px] left-[24px] gap-[16px]">
                <label
                  htmlFor="pickup-location"
                  className="w-[80px] h-[20px] font-semibold text-[16px] leading-6 tracking-[-0.02em] text-[#1A202C] font-['Plus_Jakarta_Sans'] text-left"
                >
                  Locations
                </label>
                <select
                  id="pickup-location"
                  className="w-[386px] h-[56px] absolute bottom-0 left-0 px-5 rounded-[10px] text-[14px] bg-[#F6F7F9] text-[#90A3BF] font-medium leading-[21px] tracking-[-0.02em] text-left font-['Plus_Jakarta_Sans']"
                >
                  <option>Select your city</option>
                  <option>Karachi</option>
                  <option>Mulatn</option>
                  <option>Islamabad</option>
                  <option>Lahore</option>
                  <option>Hyderabad</option>
                </select>
              </div>

              {/* Pick-Up Date */}
              <div className="w-[386px] h-[92px] absolute top-[405px] left-[442px] gap-[16px]">
                <label
                  htmlFor="pickup-date"
                  className="w-[80px] h-[20px] font-semibold text-[16px] leading-6 tracking-[-0.02em] text-[#1A202C] font-['Plus_Jakarta_Sans'] text-left"
                >
                  Date
                </label>
                <select
                  id="pickup-date"
                  className="w-[386px] h-[56px] absolute bottom-0 left-0 px-5 rounded-[10px] text-[14px] bg-[#F6F7F9] text-[#90A3BF] font-medium leading-[21px] tracking-[-0.02em] text-left font-['Plus_Jakarta_Sans']"
                >
                  <option>Select your date</option>
                </select>
              </div>

              {/* Pick-Up Time */}
              <div className="w-[386px] h-[92px] absolute bottom-[24px] left-[24px] gap-[16px]">
                <label
                  htmlFor="pickup-time"
                  className="w-[80px] h-[20px] font-semibold text-[16px] leading-6 tracking-[-0.02em] text-[#1A202C] font-['Plus_Jakarta_Sans'] text-left"
                >
                  Time
                </label>
                <select
                  id="pickup-time"
                  className="w-[386px] h-[56px] absolute bottom-0 left-0 px-5 rounded-[10px] text-[14px] bg-[#F6F7F9] text-[#90A3BF] font-medium leading-[21px] tracking-[-0.02em] text-left font-['Plus_Jakarta_Sans']"
                >
                  <option>Select your time</option>
                </select>
              </div>
            </div>
          </div>

          {/* Payment Method Div */}
          <div className="w-[852px] h-[596px] rounded-[10px] absolute top-[1063px] bg-white">

            {/* Payment Header */}
            <div className="w-[236px] h-[48px] gap-[4px] absolute top-[24px] left-[24px]">
              <h2 className="w-[200px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[21px] tracking-[-0.03em] text-left text-[#1A202C]">
                Payment Method
              </h2>
              <p className="w-[236px] h-[20px] font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[25px] tracking-[-0.02em] text-left text-[#90A3BF]">
                Please enter your payment method
              </p>
            </div>

            {/* Step Counter */}
            <p className="w-[72px] h-[20px] absolute top-[52px] left-[756px] font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[21px] tracking-[-0.02em] text-right text-[#90A3BF]">
              Step 3 of 4
            </p>

            {/* Payment Options */}
            <div className="absolute w-[804px] h-[308px] top-[104px] left-[24px] rounded-[10px] bg-[#F6F7F9]">
              {/* Credit Card Option */}
              <label className="absolute top-[24px] left-[24px] flex items-center gap-[8px]">
                <input type="radio" name="payment" defaultChecked className="w-[16px] h-[16px]"/>
                <span className="w-[88px] h-[20px] font-['Plus_Jakarta_Sans'] font-[600] text-[16px] leading-[20.16px] tracking-[-0.02em] text-left text-[#1A202C]">
                  Credit Card
                </span>
              </label>

              <div className="flex absolute top-[24px] left-[688px] w-[92px] h-[20px] gap-[12px]">
                <Image src="/Visa.png" alt="Visa" width={48} height={16} />
                <Image src="/mc.png" alt="Mastercard" width={32} height={20} />
              </div>

              <div className="w-[362px] h-[92px] absolute top-[76px] left-[24px] gap-[16px] font-['Plus_Jakarta_Sans']">
                <label className="w-[104px] h-[20px] font-[600] text-[16px] leading-[24px] tracking-[-0.02em] text-left text-[#1A202C]">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="Card number"
                  className="w-[362px] h-[56px] absolute bottom-0 left-0 rounded-[10px] text-[14px] px-5"
                />
              </div>

              <div className="w-[362px] h-[92px] absolute top-[76px] left-[418px] gap-[16px] font-['Plus_Jakarta_Sans']">
                <label className="w-[104px] h-[20px] font-[600] text-[16px] leading-[24px] tracking-[-0.02em] text-left text-[#1A202C]">
                  Expiration Date
                </label>
                <input
                  type="text"
                  placeholder="DD / MM / YY"
                  className="w-[362px] h-[56px] absolute bottom-0 left-0 rounded-[10px] text-[14px] px-5"
                />
              </div>

              <div className="w-[362px] h-[92px] absolute top-[192px] left-[24px] gap-[16px] font-['Plus_Jakarta_Sans']">
                <label className="w-[104px] h-[20px] font-[600] text-[16px] leading-[24px] tracking-[-0.02em] text-left text-[#1A202C]">
                  Card Holder
                </label>
                <input
                  type="text"
                  placeholder="Card holder"
                  className="w-[362px] h-[56px] absolute bottom-0 left-0 rounded-[10px] text-[14px] px-5"
                />
              </div>

              <div className="w-[362px] h-[92px] absolute top-[192px] left-[418px] gap-[16px] font-['Plus_Jakarta_Sans']">
                <label className="w-[104px] h-[20px] font-[600] text-[16px] leading-[24px] tracking-[-0.02em] text-left text-[#1A202C]">
                  CVC
                </label>
                <input
                  type="text"
                  placeholder="CVC"
                  className="w-[362px] h-[56px] absolute bottom-0 left-0 rounded-[10px] text-[14px] px-5"
                />
              </div>

            </div>

            {/* PayPal Option */}
            <div className="border rounded-[10px] p-4 flex items-center px-8 space-x-2 bg-[#F6F7F9] w-[804px] absolute top-[436px] left-[24px]">
              <input
                type="radio"
                name="payment"
                className="w-[24px] h-[24px] mr-[15px]"
              />
              <span className="w-[654px] h-[24px] font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-left text-[#1F2544]">
                PayPal
              </span>
              <Image src="/paypal.png" alt="PayPal" width={100} height={24} />
            </div>

            {/* Bitcoin Option */}
            <div className="border rounded-[10px] p-4 flex items-center px-8 space-x-2 bg-[#F6F7F9] w-[804px] absolute top-[516px] left-[24px]">
              <input
                type="radio"
                name="payment"
                className="w-[24px] h-[24px] mr-[15px]"
              />
              <span className="w-[654px] h-[24px] font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-left text-[#1F2544]">
                Bitcoin
              </span>
              <Image src="/bitcoin.png" alt="Bitcoin" width={94} height={20} />
            </div>
          </div>

          {/* Confirmation div */}
          <div className="absolute bottom-[0px] w-[852px] h-[484px] rounded-[10px] bg-white">
            <div className="w-[192px] h-[48px] absolute top-[24px] left-[24px] gap-[4px]">
              <h2 className="w-[200px] h-[24px] font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[20px] tracking-[-0.03em] text-left text-[#1A202C]">
                Confirmation
              </h2>
              <p className="w-[436px] h-[20px] font-['Plus_Jakarta_Sans'] text-[14px] text-[#90A3BF]">
                We are getting to the end. Just few clicks and your rental is
                ready!
              </p>
            </div>
            <p className="w-[72px] h-[20px] absolute top-[52px] left-[756px] font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[21px] tracking-[-0.02em] text-right text-[#90A3BF]">
              Step 4 of 4
            </p>

            <div className="w-[804px] h-[136px] absolute top-[104px] left-[24px] space-y-6 gap-[24px]">
              <div className="w-[804px] h-[56px] rounded-[10px] bg-[#F6F7F9]">
                <label className="w-[654px] h-[24px] flex items-center absolute top-[16px] left-[30px] font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-left text-[#1F2544]">
                  <input
                    type="checkbox"
                    className="w-[20px] h-[20px] mr-[15px]"
                  />
                  I agree with sending an Marketing and newsletter emails. No
                  spam, promissed!
                </label>
              </div>
              <div className="w-[804px] h-[56px] rounded-[10px] flex items-center bg-[#F6F7F9]">
                <label className="w-[654px] h-[24px] flex items-center absolute top-[94px] left-[30px] font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-left text-[#1F2544]">
                  <input
                    type="checkbox"
                    className="w-[20px] h-[20px] mr-[15px]"
                  />
                  I agree with our terms and conditions and privacy policy.
                </label>
              </div>
            </div>

            <Link href="/dashboard-admin">
              <Image
                src="/Button-Rental-2.png"
                alt=""
                width={140}
                height={56}
                className="absolute top-[272px] left-[24px]"
              />
            </Link>

            <div className="w-[548px] h-[100px] absolute bottom-[24px] left-[24px] gap-[16px]">
              <Image
                src="/ic-security-safety.png"
                alt=""
                height={32}
                width={32}
              />
              <div className="w-[548px] h-[52px] gap-[8px] mt-[15px]">
                <p className="w-[204px] h-[24px] font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-left text-[#1A202C]">
                  All your data are safe
                </p>
                <p className="w-[548px] h-[20px] font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[32px] tracking-[-0.02em] text-left text-[#90A3BF]">
                  We are using the most advanced security to provide you the
                  best experience ever.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* ****************** Div Two *********************** */}

        <div className="w-[492px] h-[560px] absolute left-[916px] rounded-[10px] bg-white">
          <div className="w-[444px] h-[76px] absolute top-[24px] left-[24px] gap-[4px]">
            <h2 className="w-[200px] h-[24px] font-bold text-[20px] font-['Plus_Jakarta_Sans'] leading-[30px] tracking-[-0.03em] text-left text-[#1A202C] mt-[-3px]">
              Rental Summary
            </h2>
            <p className="w-[444px] h-[48px] font-medium text-[14px] leading-[21px] tracking-[-0.02em] text-left text-[#90A3BF] font-['Plus_Jakarta_Sans'] mt-[9px]">
              Prices may change depending on the length of the rental and the price of your rental car.
            </p>
          </div>

          <Image src="/Look.png" alt="" width={132} height={108} className="absolute top-[132px] left-[24px]"/>
          <div className="w-[220px] h-[72px] absolute top-[150px] left-[172px] gap-[8px]">
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

          <div className="w-[444px] h-0 absolute top-[272px] left-[24px] border border-[#C3D4E966]"></div>

          <div className="w-[444px] h-[20px] absolute top-[304px] left-[24px] gap-[212px] flex justify-between items-center">
            <p className="w-[116px] h-[20px] font-medium text-[16px] font-['Plus_Jakarta_Sans'] leading-[24px] tracking-[-0.02em] text-left text-[#90A3BF]">
            Subtotal
            </p>
            <p className="w-[116px] h-[20px] font-medium text-[16px] font-['Plus_Jakarta_Sans'] leading-[24px] tracking-[-0.02em] text-right">
            $80.00
            </p>
          </div>

          <div className="w-[444px] h-[20px] absolute top-[348px] left-[24px] gap-[212px] flex justify-between items-center">
            <p className="w-[116px] h-[20px] font-medium text-[16px] font-['Plus_Jakarta_Sans'] leading-[24px] tracking-[-0.02em] text-left text-[#90A3BF]">
            Tax
            </p>
            <p className="w-[116px] h-[20px] font-medium text-[16px] font-['Plus_Jakarta_Sans'] leading-[24px] tracking-[-0.02em] text-right">
            $0
            </p>
          </div>

          <div className="w-[444px] h-[56px] absolute top-[400px] left-[24px] rounded-[10px] bg-[#F6F7F9] cursor-pointer">
            <p className="w-[128px] h-[24px] absolute top-[16px] left-[35px] font-medium text-[14px] font-['Plus_Jakarta_Sans'] leading-[21px] tracking-[-0.02em] text-left text-[#90A3BF]">
            Apply promo code
            </p>
            <p className="w-[100px] h-[24px] absolute top-[16px] right-[30px] font-semibold text-[16px] font-['Plus_Jakarta_Sans'] leading-[24px] tracking-[-0.02em] text-right text-[#1A202C]">
            Apply now
            </p>
          </div>

          <div className="w-[444px] h-[48px] absolute top-[488px] left-[24px] gap-[32px] flex">
            <div className="w-[284px] h-[48px] gap-[4px]">
              <p className="w-[200px] h-[24px] font-bold text-[20px] leading-[25px] tracking-[-0.03em] text-left text-[#1A202C] font-['Plus_Jakarta_Sans']">
              Total Rental Price
              </p>
              <p className="w-[284px] h-[20px] font-medium text-[14px] font-['Plus_Jakarta_Sans'] leading-[26px] tracking-[-0.02em] text-left text-[#90A3BF]">
                Overall price and includes rental discount
              </p>
            </div>
            <p className="w-[128px] h-[48px] font-bold text-[32px] leading-[40.32px] text-right text-[#1A202C] font-['Plus_Jakarta_Sans'] mt-[4px]">
              $80.00
            </p>
          </div>
        </div>

      </div>
    </>
  );
}
