import SideDiv from "../components/sideDiv";
import BookingForm from "../components/bookingForm";
import ShowMore from "../components/showMore";

export default function Category() {
  return (
    <>
      {/* Main Div */}
      <div className="w-full min-h-screen bg-[#F6F7F9]">
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:block">
            <SideDiv />
          </div>

          <div className="flex-1 p-4">
            {/* Booking Form */}
            <div className="mt-8">
              <BookingForm />
            </div>

            {/* Show More Section */}
            <div className="mt-8">
              <ShowMore />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}