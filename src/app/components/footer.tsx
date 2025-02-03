export default function Footer() {
  return (
    <div className="w-full bg-[#FFFFFF] pb-12 pt-20">
      <div className="max-w-[1320px] mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap gap-8 justify-between">
          {/* Brand Section */}
          <div className="w-[292px]">
            <div className="text-[32px] font-bold leading-[48px] tracking-[-0.03em] text-[#3563E9]">
              MORENT
            </div>
            <div className="text-[16px] font-medium leading-[24px] tracking-[-0.02em] text-[#13131399] mt-4">
              Our vision is to provide convenience and help increase your sales
              business.
            </div>
          </div>

          {/* About Section */}
          <div className="w-[152px]">
            <div className="text-[20px] font-semibold leading-[30px] tracking-[-0.02em] text-[#1A202C]">
              About
            </div>
            <ul className="text-[16px] font-medium leading-[24px] tracking-[-0.02em] text-[#13131399] mt-4 space-y-2">
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="w-[152px]">
            <div className="text-[20px] font-semibold leading-[30px] tracking-[-0.02em] text-[#1A202C]">
              Community
            </div>
            <ul className="text-[16px] font-medium leading-[24px] tracking-[-0.02em] text-[#13131399] mt-4 space-y-2">
              <li>Events</li>
              <li>Blogs</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>

          {/* Socials Section */}
          <div className="w-[152px]">
            <div className="text-[20px] font-semibold leading-[30px] tracking-[-0.02em] text-[#1A202C]">
              Socials
            </div>
            <ul className="text-[16px] font-medium leading-[24px] tracking-[-0.02em] text-[#13131399] mt-4 space-y-2">
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>

        {/* Footer Line */}
        <div className="w-full h-px bg-[#13131329] my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-wrap justify-between text-[16px] font-semibold leading-[24px] tracking-[-0.02em] text-[#1A202C]">
          <div>©2022 MORENT. All rights reserved</div>
          <div className="flex gap-4">
            <div>Privacy & Policy</div>
            <div>Terms & Condition</div>
          </div>
        </div>
      </div>
    </div>
  );
}