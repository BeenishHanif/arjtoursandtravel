import React from 'react';
import quote from "../assets/svg/quote.svg";

const ClientReviews = ({ 
  testimonials = [
  {
  text: "ARJ Travel and Tours planned our vacation perfectly. From hotel bookings to guided tours, everything was seamless and enjoyable.",
  author: "Sarah Khan"
},
    {
      text: "I’ve traveled with other agencies, but ARJ was by far the most professional and accommodating. Highly recommended!",
      author: "Ahmed Raza"
    },
    {
      text: "Thanks to ARJ Travel, our Umrah trip was peaceful, comfortable, and incredibly well-organized. Truly grateful.",
      author: "Fatima Noor"
    }
  ]
}) => {
  return (
    <div className="container !mt-10 w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h2 className="title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4">
          Customer Reviews
        </h2>
        <p className="subtitle text-xs sm:text-sm md:text-base text-gray-600 tracking-wide">
          What our customers say about us
        </p>
      </div>

      <div className="max-w-7xl !mt-5 mx-auto">
        <div className="flex flex-row flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center bg-white w-[300px] p-4 sm:p-6 lg:p-8 duration-300">
              <div className="flex justify-center mb-4 sm:mb-5 lg:mb-6">
                <img src={quote} className="size-8" alt="quote icon" />
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4 sm:mb-5 lg:mb-6 px-2 sm:px-3 lg:px-4 min-h-[60px] sm:min-h-[80px] lg:min-h-[100px] flex items-center">
                {testimonial.text}
              </p>
              <div className="text-xs sm:text-sm md:text-base font-bold text-[#023f82] pt-3 sm:pt-4">
                {testimonial.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
