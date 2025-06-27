
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import image3 from '/public/images/slider-three.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';

const OurNetwork = () => {
  return (
    <>
      <div className="flex w-full flex-col justify-center items-center">
        <h1 className="title">Our Network</h1>
      </div>

      <div className="flex flex-col gap-4 lg:flex-row !px-8 lg:!px-3 bg-base-100 my-5">
        <motion.div
          initial={{ translateX: -150 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration: 0.6, type: 'tween' }}
          className="flex relative justify-center items-center w-full lg:w-1/2 p-4"
        >
          <img className="w-full h-full object-cover" src={image3} alt="ARJ Travel" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          exit={{ opacity: 0 }}
          className="w-full lg:w-1/2 py-8 flex flex-col p-4"
        >
          <div className="flex flex-col gap-3 h-full">
            <p className="!text-lg font-[700] text-[#535252] md:text-3xl  mb-4">
              Discover The World With Us
            </p>

            <p className="text-sm font-inter text-gray-700">
              At ARJ Travel and Tours, we specialize in crafting unforgettable journeys tailored to your dreams and desires.
              With years of experience in the travel industry, we offer a wide range of domestic and international travel packages
              that cater to families, solo travelers, business professionals, and groups alike. Whether you're planning a spiritual
              pilgrimage such as Umrah or Hajj, an exotic vacation to serene landscapes, or a cultural exploration of vibrant cities,
              we are committed to delivering experiences that go beyond expectations.
              <br /><br />
              Our dedicated team of travel experts works closely with you to understand your preferences, budget, and timing, ensuring
              every detail of your trip is perfectly managed — from visa processing and airline bookings to hotel accommodations and guided tours.
              With strong partnerships across airlines, hotels, and local operators worldwide, we guarantee competitive rates, seamless coordination,
              and 24/7 support throughout your journey.
              <br />

            </p>


            <Link to="/about">
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  backgroundColor: '#023f82',
                  color: '#fff',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  px: 4,
                  py: 1.5,
                  borderRadius: 0,
                  '&:hover': {
                    backgroundColor: '#2c72b5',
                  },
                }}
              >
                Explore More
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};


export default OurNetwork;