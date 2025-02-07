import Image from "next/image";

export default function SideDiv() {
  return (
    <div className="w-full h-full rounded-[10px] max-w-sm bg-white p-6 md:p-8 shadow-md">
      {/* Type Section */}
      <div className="w-full">
        <h3 className="text-sm font-semibold text-[#90A3BF]">TYPE</h3>
        <ul className="flex flex-col gap-4 py-4">
          {[
            "Sport (10)",
            "SUV (12)",
            "MPV (16)",
            "Sedan (20)",
            "Coupe (14)",
            "Hatchback (14)",
          ].map((type, index) => (
            <li key={index} className="flex items-center gap-2">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-lg font-semibold text-[#596780]">
                {type}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Capacity Section */}
      <div className="w-full mt-6">
        <h3 className="text-sm font-semibold text-[#90A3BF]">CAPACITY</h3>
        <ul className="flex flex-col gap-4 py-4">
          {[
            "2 Person (10)",
            "4 Person (14)",
            "6 Person (12)",
            "8 or More (16)",
          ].map((capacity, index) => (
            <li key={index} className="flex items-center gap-2">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-lg font-semibold text-[#596780]">
                {capacity}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Section */}
      <div className="w-full mt-6">
        <h3 className="text-sm font-semibold text-[#90A3BF]">PRICE</h3>
        <Image
          src="/price-range.png"
          alt="price-bar"
          width={296}
          height={20}
          className="mt-4 w-full"
        />
        <p className="mt-2 text-lg font-semibold text-[#596780]">
          Max. $100.00
        </p>
      </div>
    </div>
  );
}
