import React from 'react';
import image3 from '/public/images/slider-three.jpg';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

const WhyChooseUsBanner = ({ 
  title = "Why Choose ARJ Travel and Tours?",
  subtitle = "Trusted travel partner for unforgettable experiences",
  features = [
    {
      icon: <AttachMoneyIcon fontSize="large" style={{ color: '#4a4a4a' }} />,
      title: "Best Price Guarantee",
      description: "We offer competitive prices without compromising on quality, ensuring value for every journey."
    },
    {
      icon: <TravelExploreIcon fontSize="large" style={{ color: '#4a4a4a' }} />,
      title: "Wide Range of Destinations",
      description: "From local wonders to international adventures, ARJ covers a broad spectrum of travel spots."
    },
    {
      icon: <ThumbUpAltIcon fontSize="large" style={{ color: '#4a4a4a' }} />,
      title: "Professional Travel Experts",
      description: "Our dedicated team ensures each trip is planned and executed with the highest standards of service."
    }
  ]
}) => {
  return (
    <div className="relative !mt-20 w-full h-auto mb-10">
      <img 
        className="w-full h-full object-cover absolute inset-0 z-0" 
        src={image3} 
        alt="ARJ Travel Background" 
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] z-10" />
      <div className="relative z-20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 !pt-10 md:mb-12">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-2 md:mb-4">
            {title}
          </h1>
          <p className="text-white text-center text-base md:text-lg mx-auto px-4 ">
            {subtitle}
          </p>
        </div>
        <div className="container">
          <div className="flex md:flex-row flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <div key={index} className="text-center w-[300px] text-white px-4">
                <div className="flex justify-center !mb-5">
                  <div className="md:size-16 size-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-sm md:text-md font-semibold mb-2 md:mb-4 tracking-wide px-2">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm opacity-90 leading-relaxed mx-auto">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsBanner;
