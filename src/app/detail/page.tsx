"use client";
import Image from "next/image";
import Link from "next/link";
import SideDiv from "../components/sideDiv";
import PersonReview from "../components/personReview";

export default function Details() {
  return (
    <div className="w-full min-h-screen px-4 md:pr-4 pt-5 md:pt-6 flex flex-col md:flex-row gap-6 mb-8">
      {/* Sidebar - Hidden on Mobile */}
      <aside className="hidden md:block md:w-[280px] lg:w-[320px] xl:w-[360px]">
        <SideDiv />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col gap-6">
        {/* Car Details Section */}
        <div className="w-full bg-[#3563E9] text-white p-6 rounded-lg">
          <h1 className="text-xl md:text-3xl font-semibold">Sports car with the best design and acceleration</h1>
          <p className="text-sm md:text-base mt-2">Safety and comfort while driving a futuristic and elegant sports car</p>
          <Image src="/nissan.png" alt="Nissan GT-R" width={600} height={200} className="w-full max-w-lg mx-auto mt-4" />
        </div>

        {/* Image Views */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {["/View-1.png", "/View-2.png", "/View-3.png"].map((src, i) => (
            <Image key={i} src={src} alt={`view-car-${i}`} width={200} height={150} className="w-full object-cover rounded-lg" />
          ))}
        </div>

        {/* Review Section for laptop*/}
        <div className="hidden md:flex">
        <PersonReview />
        </div>
      </main>

      {/* Car Detail Card */}
      <aside className="md:w-[320px] xl:w-[360px] bg-white rounded-lg p-6 shadow-md">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#1A202C]">Nissan GT - R</h2>
            <div className="flex items-center gap-2 mt-1">
              <Image src="/Review-Star.png" alt="stars" width={108} height={20} />
              <p className="text-sm text-[#596780]">440+ Reviewer</p>
            </div>
          </div>
          <Image src="/red-heart.png" alt="heart" width={24} height={24} className="cursor-pointer" />
        </div>

        <p className="text-sm md:text-base text-[#596780] leading-relaxed mt-4">
          NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
        </p>

        <Image src="/Spesification.png" alt="specification" width={444} height={72} className="w-full h-auto mt-4"/>

        <div className="flex items-center mt-4">
          <p className="text-xl font-bold">$80.00/<span className="text-sm text-[#90A3BF]">day</span></p>
          <Link href="/payment" className="ml-auto">
          <button className="bg-[#3563E9] text-white hover:bg-blue-700 active:bg-[#5c84fb] w-[80px] lg:w-[120px] h-[30px] lg:h-[44px] rounded text-[12px] md:text-base font-semibold mt-4 md:mt-[18px]">
          Rent Now
        </button>
          </Link>
        </div>
      </aside>
      {/* Review Section for laptop*/}
      <div className="flex md:hidden">
        <PersonReview />
        </div>

    </div>
  );
}
