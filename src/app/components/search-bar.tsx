"use client";

import Image from "next/image";
import Link from "next/link";
import NavLinks from "../routes-menu/page";

export default function SearchBar() {
  return (
    <>
      <div className="w-full h-[124px] border border-[#C3D4E966] bg-white relative">
        <div className="w-[148px] h-[44px] absolute top-[40px] left-[60px] text-[32px] font-bold leading-[48px] tracking-[-0.03em] text-left text-[#3563E9]">
          MORENT
        </div>
        <div className="w-[492px] h-[44px] absolute top-[40px] left-[272px] rounded-full border border-solid border-[#C3D4E966]">
          <Image
            src="/search-normal.png"
            alt="search-icon"
            width={24}
            height={24}
            className="absolute top-[10px] left-5"
          />
          <input
            type="text"
            placeholder="Search something here"
            className="w-[149px] h-[20px] absolute top-[12px] left-16 text-sm font-medium leading-[21px] tracking-[-0.02em] text-[#596780] placeholder-[#596780] outline-none"
          />
          <Image
            src="/filter.png"
            alt="filter-icon"
            width={24}
            height={24}
            className="absolute top-[10px] left-[445px] cursor-pointer"
          />
        </div>
        <div className="w-[295px] h-[44px] absolute top-[40px] left-[1100px] gap-[20px] flex cursor-pointer ml-14">
          <NavLinks />
          <Link href="/liked">
            <Image src="/Like.png" alt="Like_Icon" width={44} height={44} />
          </Link>
          <Image
            src="/Notification.png"
            alt="Notification_Icon"
            width={44}
            height={44}
          />
          {/* Image with link */}
          <Link href="/settingsPage">
            <Image
              src="/Settings.png"
              alt="Settings Icon"
              width={44}
              height={44}
              className="cursor-pointer"
            />
          </Link>
          <Image src="/Profile.png" alt="Profile_Icon" width={44} height={44} />
        </div>
      </div>
    </>
  );
}
