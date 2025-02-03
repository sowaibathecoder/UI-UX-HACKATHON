// import Image from "next/image";

// export default function AdOne() {
//   return (
//     <div className="w-[640px] h-[360px] absolute top-[32px] left-[64px] rounded-[10px] bg-[#54A6FF]">
//       <div className="w-[284px] h-[224px] absolute top-[24px] left-[24px] gap-[20px]">
//         <div className="w-[284px] h-[160px] gap-[16px]">
//           <div className="w-[272px] h-[96px] text-[32px] font-semibold leading-[48px] tracking-tight text-left text-white">
//             The Best Platform
//             <br /> for Car Rental
//           </div>
//           <div className="w-[284px] h-[48px] text-base font-medium leading-6 tracking-[-0.02em] text-left text-white mt-4">
//             Ease of doing a car rental safely and reliably. Of course at a low
//             price.
//           </div>
//         </div>
//         <button className="w-[120px] h-[44px] px-5 gap-2 rounded bg-[#3563E9] mt-[18px] text-base font-semibold leading-6 tracking-[-0.02em] text-center text-white">
//           Rental Car
//         </button>
//       </div>
//       <Image
//         src="/car-ad-1.png"
//         alt="Car_Ad_1"
//         width={406}
//         height={116}
//         className="absolute top-[234px] left-[137px]"
//       />
//     </div>
//   );
// }


import Image from "next/image";

export default function AdOne() {
  return (
    <div className="w-full max-w-[640px] h-[360px] rounded-[10px] bg-[#54A6FF] relative overflow-hidden">
      {/* Text and Button */}
      <div className="w-[284px] h-[224px] absolute top-[24px] left-[24px]">
        <div className="w-[284px] h-[160px]">
          <div className="w-[272px] h-[96px] text-[32px] font-semibold leading-[48px] text-left text-white">
            The Best Platform
            <br /> for Car Rental
          </div>
          <div className="w-[284px] h-[48px] text-base font-medium leading-6 text-left text-white mt-4">
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </div>
        </div>
        <button className="w-[120px] h-[44px] bg-[#3563E9] rounded text-base font-semibold text-white mt-[18px]">
          Rental Car
        </button>
      </div>

      {/* Image */}
      <div className="w-[406px] h-[116px] absolute bottom-3 right-[90px]">
        <Image
          src="/car-ad-1.png"
          alt="Car_Ad_1"
          width={406}
          height={116}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}