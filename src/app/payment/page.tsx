"use client";
import Image from "next/image";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  phone: string;
  address: string;
  city: string;
  pickUpCity: string;
  pickUpDate: string;
  pickUpTime: string;
  dropOffCity: string;
  dropOffDate: string;
  dropOffTime: string;
  cardNumber: string;
  expirationDate: string;
  cardHolder: string;
  cvc: string;
  paymentMethod: "credit-card" | "paypal" | "bitcoin";
  agreeMarketing: boolean;
  agreeTerms: boolean;
}

export default function Payment() {
  const locations = ["Karachi", "Multan", "Islamabad", "Lahore", "Hyderabad"];
  const dates = ["Today", "Tomorrow", "Next Week"];
  const times = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"];

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    address: "",
    city: "",
    pickUpCity: "",
    pickUpDate: "",
    pickUpTime: "",
    dropOffCity: "",
    dropOffDate: "",
    dropOffTime: "",
    cardNumber: "",
    expirationDate: "",
    cardHolder: "",
    cvc: "",
    paymentMethod: "credit-card",
    agreeMarketing: false,
    agreeTerms: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else if (type === "radio") {
      setFormData((prev) => ({
        ...prev,
        [name]: value, // Directly set the value for radio buttons
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Payment Form Submitted Successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full min-h-screen pt-8 bg-[#F6F7F9] px-4 md:px-8 lg:px-16 xl:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section: Form */}
        <div className="lg:col-span-2">
          {/* Billing Info */}
          <div className="bg-white rounded-[10px] shadow-md p-6 mb-8">
            <div className="mb-4">
              <h2 className="text-[20px] font-bold text-[#1A202C]">
                Billing Info
              </h2>
              <p className="text-[14px] text-[#90A3BF]">
                Please enter your billing info
              </p>
            </div>
            <p className="text-[14px] font-medium text-[#90A3BF] text-right">
              Step 1 of 4
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[16px] font-semibold text-[#1A202C] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-[56px] rounded-[10px] bg-[#F6F7F9] px-7 flex items-center text-[14px] font-medium leading-[21px] text-[#90A3BF] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-[16px] font-semibold text-[#1A202C] mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter Your Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-[56px] rounded-[10px] bg-[#F6F7F9] px-7 flex items-center text-[14px] font-medium leading-[21px] text-[#90A3BF] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-[16px] font-semibold text-[#1A202C] mb-2"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter Your Current Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full h-[56px] rounded-[10px] bg-[#F6F7F9] px-7 flex items-center text-[14px] font-medium leading-[21px] text-[#90A3BF] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-[16px] font-semibold text-[#1A202C] mb-2"
                >
                  Town/City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Enter Your City or Town Name"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full h-[56px] rounded-[10px] bg-[#F6F7F9] px-7 flex items-center text-[14px] font-medium leading-[21px] text-[#90A3BF] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Rental Info */}
          <div className="bg-white rounded-[10px] shadow-md p-6 mb-8">
            <div className="mb-4">
              <h2 className="text-[20px] font-bold text-[#1A202C]">
                Rental Info
              </h2>
              <p className="text-[14px] text-[#90A3BF]">
                Please select your rental date
              </p>
            </div>
            <p className="text-[14px] font-medium text-[#90A3BF] text-right">
              Step 2 of 4
            </p>

            {/* Pick-Up Section */}
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-[16px] font-semibold text-[#1A202C]">
                  Pick-Up
                </h3>
                <select
                  name="pickUpCity"
                  value={formData.pickUpCity}
                  onChange={handleChange}
                  className="w-full h-[56px] rounded-[10px] bg-[#F6F7F9] px-7 flex items-center text-[14px] font-medium leading-[21px] text-[#90A3BF] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select your city</option>
                  {locations.map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
              <select
                name="pickUpDate"
                value={formData.pickUpDate}
                onChange={handleChange}
                className="w-full h-[56px] rounded-[10px] bg-[#F6F7F9] px-7 flex items-center text-[14px] font-medium leading-[21px] text-[#90A3BF] focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select your date</option>
                {dates.map((date, index) => (
                  <option key={index} value={date}>
                    {date}
                  </option>
                ))}
              </select>
              <select
                name="pickUpTime"
                value={formData.pickUpTime}
                onChange={handleChange}
                className="w-full h-[56px] rounded-[10px] bg-[#F6F7F9] px-7 flex items-center text-[14px] font-medium leading-[21px] text-[#90A3BF] focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select your time</option>
                {times.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>

              {/* Drop-Off Section */}
              <div>
                <h3 className="text-[16px] font-semibold text-[#1A202C]">
                  Drop-Off
                </h3>
                <select
                  name="dropOffCity"
                  value={formData.dropOffCity}
                  onChange={handleChange}
                  className="w-full h-[56px] rounded-[10px] bg-[#F6F7F9] px-7 flex items-center text-[14px] font-medium leading-[21px] text-[#90A3BF] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select your city</option>
                  {locations.map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
              <select
                name="dropOffDate"
                value={formData.dropOffDate}
                onChange={handleChange}
                className="w-full h-[56px] rounded-[10px] bg-[#F6F7F9] px-7 flex items-center text-[14px] font-medium leading-[21px] text-[#90A3BF] focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select your date</option>
                {dates.map((date, index) => (
                  <option key={index} value={date}>
                    {date}
                  </option>
                ))}
              </select>
              <select
                name="dropOffTime"
                value={formData.dropOffTime}
                onChange={handleChange}
                className="w-full h-[56px] rounded-[10px] bg-[#F6F7F9] px-7 flex items-center text-[14px] font-medium leading-[21px] text-[#90A3BF] focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select your time</option>
                {times.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-[10px] shadow-md p-6 mb-8">
            <div className="mb-4">
              <h2 className="text-[20px] font-bold text-[#1A202C]">
                Payment Method
              </h2>
              <p className="text-[14px] text-[#90A3BF]">
                Please enter your payment method
              </p>
            </div>
            <p className="text-[14px] font-medium text-[#90A3BF] text-right">
              Step 3 of 4
            </p>

            <div className="mt-4 space-y-4">
              {/* Credit Card Option */}
              <div className="bg-[#F6F7F9] rounded-[10px] p-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="credit-card"
                    checked={formData.paymentMethod === "credit-card"}
                    onChange={handleChange}
                    className="mr-2 w-6 h-6 cursor-pointer"
                  />
                  <span className="text-[16px] font-semibold text-[#1A202C]">
                    Credit Card
                  </span>
                </label>
                {formData.paymentMethod === "credit-card" && (
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center space-x-4 mb-2">
                      <Image
                        src="/Visa.png"
                        alt="Visa"
                        width={48}
                        height={16}
                      />
                      <Image
                        src="/mc.png"
                        alt="Mastercard"
                        width={32}
                        height={20}
                      />
                    </div>
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card Number"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      className="w-full h-[56px] rounded-[10px] bg-white px-7 flex items-center text-[14px] font-medium leading-[21px] text-[#90A3BF] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      name="expirationDate"
                      placeholder="Expiration Date"
                      value={formData.expirationDate}
                      onChange={handleChange}
                      className="w-full h-[56px] rounded-[10px] bg-white px-7 flex items-center text-[14px] font-medium leading-[21px] text-[#90A3BF] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      name="cardHolder"
                      placeholder="Card Holder"
                      value={formData.cardHolder}
                      onChange={handleChange}
                      className="w-full h-[56px] rounded-[10px] bg-white px-7 flex items-center text-[14px] font-medium leading-[21px] text-[#90A3BF] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      name="cvc"
                      placeholder="CVC"
                      value={formData.cvc}
                      onChange={handleChange}
                      className="w-full h-[56px] rounded-[10px] bg-white px-7 flex items-center text-[14px] font-medium leading-[21px] text-[#90A3BF] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}
              </div>

              {/* PayPal Option */}
              <div className="bg-[#F6F7F9] rounded-[10px] p-4 flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === "paypal"}
                  onChange={handleChange}
                  className="w-6 h-6 cursor-pointer"
                />
                <span className="text-[16px] font-semibold text-[#1A202C]">
                  PayPal
                </span>
                <Image src="/PayPal.png" alt="PayPal" width={100} height={24} />
              </div>

              {/* Bitcoin Option */}
              <div className="bg-[#F6F7F9] rounded-[10px] p-4 flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bitcoin"
                  checked={formData.paymentMethod === "bitcoin"}
                  onChange={handleChange}
                  className="w-6 h-6 cursor-pointer"
                />
                <span className="text-[16px] font-semibold text-[#1A202C]">
                  Bitcoin
                </span>
                <Image
                  src="/Bitcoin.png"
                  alt="Bitcoin"
                  width={94}
                  height={20}
                />
              </div>
            </div>
          </div>

          {/* Confirmation */}
          <div className="bg-white rounded-[10px] shadow-md p-6 mb-8">
            <div className="mb-4">
              <h2 className="text-[20px] font-bold text-[#1A202C]">
                Confirmation
              </h2>
              <p className="text-[14px] text-[#90A3BF]">
                We are getting to the end. Just few clicks and your rental is
                ready!
              </p>
            </div>
            <p className="text-[14px] font-medium text-[#90A3BF] text-right">
              Step 4 of 4
            </p>

            <div className="mt-4 space-y-4">
              <div className="bg-[#F6F7F9] rounded-[10px] p-4 flex items-center">
                <input
                  type="checkbox"
                  name="agreeMarketing"
                  checked={formData.agreeMarketing}
                  onChange={handleChange}
                  className="mr-2 w-5 h-5 cursor-pointer"
                />
                <label className="text-[16px] font-semibold text-[#1A202C]">
                  I agree with sending Marketing and newsletter emails. No spam,
                  promised!
                </label>
              </div>
              <div className="bg-[#F6F7F9] rounded-[10px] p-4 flex items-center">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mr-2 w-5 h-5"
                />
                <label className="text-[16px] font-semibold text-[#1A202C]">
                  I agree with our terms and conditions and privacy policy.
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#3563E9] text-white hover:bg-blue-700 active:bg-[#5c84fb] w-full h-[56px] rounded-[10px] shadow-md transition duration-300 text-[16px] font-bold mt-10"
            >
              Confirm Payment
            </button>
          </div>
        </div>

        {/* Right Section: Rental Summary */}
        <div className="bg-white rounded-[10px] shadow-md p-4 mb-8">
          <div className="mb-4">
            <h2 className="text-[20px] font-bold text-[#1A202C]">
              Rental Summary
            </h2>
            <p className="text-[14px] text-[#90A3BF]">
              Prices may change depending on the length of the rental and the
              price of your rental car.
            </p>
          </div>

          <Image
            src="/Look.png"
            alt=""
            width={132}
            height={108}
            className="mb-4"
          />
          <div className="mb-4">
            <h3 className="text-[32px] font-bold text-[#1A202C]">
              Nissan GT - R
            </h3>
            <div className="flex items-center">
              <Image
                src="/Review-Star.png"
                alt="stars"
                width={108}
                height={20}
                className="mr-2"
              />
              <p className="text-[14px] text-[#596780]">440+ Reviewer</p>
            </div>
          </div>

          <div className="border-b border-[#C3D4E966] mb-4"></div>

          <div className="flex justify-between mb-2">
            <p className="text-[16px] text-[#90A3BF]">Subtotal</p>
            <p className="text-[16px] font-bold text-[#1A202C]">$80.00</p>
          </div>

          <div className="flex justify-between mb-2">
            <p className="text-[16px] text-[#90A3BF]">Tax</p>
            <p className="text-[16px] font-bold text-[#1A202C]">$0</p>
          </div>

          <div className="bg-[#F6F7F9] rounded-[10px] p-4 cursor-pointer mb-4">
            <p className="text-[14px] text-[#90A3BF]">Apply promo code</p>
            <p className="text-[16px] font-semibold text-[#1A202C] text-right">
              Apply now
            </p>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-[20px] font-bold text-[#1A202C]">
                Total Rental Price
              </h3>
              <p className="text-[14px] text-[#90A3BF]">
                Overall price and includes rental discount
              </p>
            </div>
            <p className=" text-[32px] font-bold text-[#1A202C]">$80.00</p>
          </div>
        </div>
      </div>
    </form>
  );
}