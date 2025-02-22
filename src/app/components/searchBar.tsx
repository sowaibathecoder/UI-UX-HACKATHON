"use client";

import Image from "next/image";
import Link from "next/link";
import NavLinks from "../routesMenu/page";
import { useLiked } from "./likedContext"; 

export default function SearchBar() {
  const { isLiked } = useLiked(); 

  return (
    <div className="w-full border border-[#C3D4E966] bg-white flex flex-col md:flex-row items-center justify-between px-4 md:px-8 h-auto md:h-[124px] py-4 md:py-0">
      {/* Logo */}
      <div className="text-[32px] font-bold leading-[48px] tracking-[-0.03em] text-[#3563E9] lg:ml-10">
        MORENT
      </div>

      {/* Icons - Center on mobile */}
      <div className="flex items-center gap-4 mt-4 md:mt-0 md:hidden">
        <Image src="/profile.jpg" alt="Profile_Icon" width={44} height={44} />
        
        {/* Liked Icon with Red Dot */}
        <div className="relative">
          <Link href="/liked">
            <Image src="/Like.png" alt="Like_Icon" width={44} height={44} />
          </Link>
          {isLiked && (
            <span className="absolute top-0 right-0 bg-red-500 text-white w-3 h-3 rounded-full"></span>
          )}
        </div>

        <Image src="/Notification.png" alt="Notification_Icon" width={44} height={44} />
        <Link href="/settingsPage">
          <Image src="/Settings.png" alt="Settings Icon" width={44} height={44} className="cursor-pointer" />
        </Link>
        <NavLinks />
      </div>

      {/* Search Bar - Centered on Desktop */}
      <div className="w-full max-w-[492px] h-[44px] rounded-full border border-solid border-[#C3D4E966] flex items-center relative mt-4 md:mt-0 md:mx-auto">
        <Image src="/search-normal.png" alt="search-icon" width={24} height={24} className="ml-4" />
        <input
          type="text"
          placeholder="Search something here"
          className="w-full h-full text-sm font-medium leading-[21px] tracking-[-0.02em] text-[#596780] placeholder-[#596780] outline-none ml-2"
        />
        <Image src="/filter.png" alt="filter-icon" width={24} height={24} className="mr-4 cursor-pointer" />
      </div>

      {/* Icons - Right on Desktop */}
      <div className="items-center gap-4 mt-4 md:mt-0 hidden md:flex">
        <NavLinks />

        {/* Liked Icon with Red Dot */}
        <div className="relative">
          <Link href="/liked">
            <Image src="/Like.png" alt="Like_Icon" width={44} height={44} />
          </Link>
          {isLiked && (
            <span className="absolute top-0 right-0 bg-red-500 text-white w-3 h-3 rounded-full"></span>
          )}
        </div>

        <Image src="/Notification.png" alt="Notification_Icon" width={44} height={44} />
        <Link href="/settingsPage">
          <Image src="/Settings.png" alt="Settings Icon" width={44} height={44} className="cursor-pointer" />
        </Link>
        <Image src="/profile.jpg" alt="Profile_Icon" width={44} height={44} />
      </div>
    </div>
  );
}
