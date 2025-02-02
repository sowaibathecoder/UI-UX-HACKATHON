"use client"

import { usePathname } from "next/navigation";

export default function Footer() {
  // Get the current page's pathname
  // const pathname = usePathname();

  // // Determine the `top` value based on the current page
  // const topClass =
  //   pathname === "/"
  //     ? "top-[2244px]"
  //     : pathname === "/category"
  //     ? "top-[1724px]"
  //     : pathname === "/detail"
  //     ? "top-[2140px]"
  //     : pathname === "/payment"
  //     ? "top-[2364px]"
  //     : pathname === "/dashboard-admin"
  //     ? "top-[1024px]"
  //     : "top-0"// Default case if no match

  return (
    <div className="w-[1440px] h-[480px] absolute bg-[#FFFFFF]">
      <div className="w-[292px] h-[108px] absolute top-[80px] left-[60px] gap-[16px]">
        <div className="w-[148px] h-[44px] text-[32px] font-bold leading-[48px] tracking-[-0.03em] text-left text-[#3563E9]">
          MORENT
        </div>
        <div className="w-[292] h-[48px] text-[16px] font-medium leading-[24px] tracking-[-0.02em] text-left text-[#13131399] pt-[15px]">
          Our vision is to provide convenience<br /> and help increase your
          sales business.
        </div>
      </div>

      {/* About Section */}
      <div className="w-[152px] h-[244px] absolute top-[80px] left-[804px]">
        <div className="w-[152px] h-[32px] text-[20px] font-semibold leading-[30px] tracking-[-0.02em] text-left text-[#1A202C]">
          About
        </div>
        <ul className="w-[152px] h-[188px] text-[16px] font-medium leading-[24px] tracking-[-0.02em] text-left text-[#13131399] mt-[23px] flex flex-col justify-between py-[15px] cursor-pointer">
          <li>How it works</li>
          <li>Featured</li>
          <li>Partnership</li>
          <li>Business Relation</li>
        </ul>
      </div>

      {/* Community Section */}
      <div className="w-[152px] h-[244px] absolute top-[80px] left-[1016px]">
        <div className="w-[152px] h-[32px] text-[20px] font-semibold leading-[30px] tracking-[-0.02em] text-left text-[#1A202C]">
          Community
        </div>
        <ul className="w-[152px] h-[188px] text-[16px] font-medium leading-[24px] tracking-[-0.02em] text-left text-[#13131399] mt-[23px] flex flex-col justify-between py-[15px] cursor-pointer">
          <li>Events</li>
          <li>Blogs</li>
          <li>Podcast</li>
          <li>Invite a friend</li>
        </ul>
      </div>

      {/* Socials Section */}
      <div className="w-[152px] h-[244px] absolute top-[80px] left-[1228px]">
        <div className="w-[152px] h-[32px] text-[20px] font-semibold leading-[30px] tracking-[-0.02em] text-left text-[#1A202C]">
          Socials
        </div>
        <ul className="w-[152px] h-[188px] text-[16px] font-medium leading-[24px] tracking-[-0.02em] text-left text-[#13131399] mt-[23px] flex flex-col justify-between py-[15px] cursor-pointer">
          <li>Discord</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Facebook</li>
        </ul>
      </div>

      {/* Footer Line */}
      <div className="w-[1320px] h-0 absolute top-[360px] left-[62px] border border-[#13131329]"></div>

      {/* Bottom Footer */}
      <div className="w-[1320px] h-[24px] absolute top-[396px] left-[60px] text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-left text-[#1A202C] flex justify-between">
        <div>©2022 MORENT. All rights reserved</div>
        <div className="absolute left-[1000px]">Privacy & Policy</div>
        <div>Terms & Condition</div>
      </div>
    </div>
  );
}
