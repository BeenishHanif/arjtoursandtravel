import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slide } from './Slide';
import image1 from '../images/international.jpeg'

const SliderHome = () => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
  };

  return (
    <div className="w-full h-auto">
      <Slider {...settings}>
        <Slide
          image={image1}
          heading="Explore Pakistan"
          subheading="Customized Northern Areas Tours"
          description="Discover the breathtaking beauty of Hunza, Skardu, Swat & Murree with our guided and custom travel packages."
          buttonText="Explore Tours"
          link="/pakistan-tours"
        />
        <Slide
          image="https://images.pexels.com/photos/1611446/pexels-photo-1611446.jpeg"
          heading="Spiritual Journey"
          subheading="Affordable Umrah Packages"
          description="Let us assist you in fulfilling your spiritual journey with our well-planned and budget-friendly Umrah packages."
          buttonText="View Packages"
          link="/umrah"
        />
        <Slide
          image="https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg"
          heading="Global Destinations"
          subheading="International Tour Offers"
          description="Travel the world with ease. Enjoy amazing deals on international tours including Dubai, Turkey, Malaysia & more."
          buttonText="Book Now"
          link="/international-tours"
        />
      </Slider>
    </div>
  );
};

export default SliderHome;
