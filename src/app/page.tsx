import AdOne from "./components/adOne";
import AdTwo from "./components/adTwo";
import BookingForm from "./components/bookingForm";
import ShowMore from "./components/showMore";

export default function Home() {
  return (
    <div>
      <div className="w-full relative">
        <AdOne />
        <AdTwo />
        <BookingForm />
        <div className="w-[1312px] h-auto border border-black absolute top-[592px] left-[64px]">
          <div className="flex justify-between items-center px-5 pt-4 pb-5">
            {/* Left Text */}
            <h2 className="text-base font-semibold text-[#90A3BF]">
              Popular Car
            </h2>

            {/* Right Link */}
            <a
              href="#"
              className="text-base font-semibold text-[#3563E9] hover:underline"
            >
              View All
            </a>
          </div>
          <ShowMore />
        </div>
      </div>
    </div>
  );
}



