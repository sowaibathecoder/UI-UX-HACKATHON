import AdOne from "./components/adOne";
import AdTwo from "./components/adTwo";
import BookingForm from "./components/bookingForm";
import ShowMore from "./components/showMore";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow">
        <div className="flex justify-center gap-7 p-7">
          <AdOne />
          <AdTwo />
        </div>

        {/* Other Components */}
        <BookingForm />
        <div className="w-full max-w-[1312px] mx-auto mt-8 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base font-semibold text-[#90A3BF]">
              Popular Car
            </h2>
            <a
              href=""
              className="text-base font-semibold text-[#3563E9] hover:underline"
            >
              View All
            </a>
          </div>
        </div>
        <div>
        <ShowMore />
        </div>
      </div>
    </div>
  );
}