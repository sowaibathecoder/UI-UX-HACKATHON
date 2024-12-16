import Image from "next/image";

export default function DashboardAdmin() {
  return (
    <>
    {/* Main div */}
     <div className="w-[1440px] h-[900px] absolute top-[124px] bg-[#F6F7F9] border border-purple-800">

      {/* Side Div */}
      <div className="w-[286px] h-[900px] bg-white border border-blue-600">
        {/* Logout Div*/}
        <div className="w-[104px] h-[28px] absolute top-[824px] left-[32px] gap-[12px] flex border border-green-600">
          <Image src="/logout.png" alt="" width={24} height={24}/>
          <p className="w-[68px] h-[28px] font-medium text-[16px] leading-[28px] tracking-[-0.02em] text-justify text-[#90A3BF] font-['Plus_Jakarta_Sans']">
            Log Out
          </p>
        </div>
      </div>
     </div>
    </>
  );
}
