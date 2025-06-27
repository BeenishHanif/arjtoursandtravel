import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import image3 from '/public/images/network.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';

const OurNetwork = () => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  // Header animation variants
  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Image animation variants
  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Content animation variants
  const contentVariants = {
    hidden: { 
      opacity: 0, 
      x: 100
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Button animation variants
  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  // Button hover animation
  const buttonHover = {
    scale: 1.05,
    y: -2,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  };

  // Image hover animation
  const imageHover = {
    scale: 1.05,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Header Section */}
      <motion.div 
        className="flex w-full flex-col justify-center items-center"
        variants={headerVariants}
      >
        <motion.h1 
          className="title"
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          Our Network
        </motion.h1>
      </motion.div>

      {/* Main Content Section */}
      <motion.div 
        className="flex flex-col gap-4 lg:flex-row !px-8 lg:!px-3 bg-base-100 my-5"
        variants={containerVariants}
      >
        {/* Image Section */}
        <motion.div
          className="flex relative justify-center items-center w-full lg:w-1/2 p-4 overflow-hidden"
          variants={imageVariants}
        >
          <motion.img 
            className="w-full h-full object-cover rounded-lg shadow-lg" 
            src={image3} 
            alt="ARJ Travel"
            whileHover={imageHover}
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="w-full lg:w-1/2 py-8 flex flex-col p-4"
          variants={contentVariants}
        >
          <motion.div 
            className="flex flex-col gap-3 h-full"
            variants={containerVariants}
          >
            {/* Title */}
            <motion.p 
              className="!text-lg font-[700] text-[#535252] md:text-3xl mb-4"
              variants={textVariants}
              whileHover={{ 
                color: '#023f82',
                transition: { duration: 0.3 }
              }}
            >
              Discover The World With Us
            </motion.p>

            {/* Description Text */}
            <motion.p 
              className="text-sm font-inter text-gray-700"
              variants={textVariants}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                At ARJ Travel and Tours, we specialize in crafting unforgettable journeys tailored to your dreams and desires.
                With years of experience in the travel industry, we offer a wide range of domestic and international travel packages
                that cater to families, solo travelers, business professionals, and groups alike. Whether you're planning a spiritual
                pilgrimage such as Umrah or Hajj, an exotic vacation to serene landscapes, or a cultural exploration of vibrant cities,
                we are committed to delivering experiences that go beyond expectations.
              </motion.span>
              <br /><br />
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Our dedicated team of travel experts works closely with you to understand your preferences, budget, and timing, ensuring
                every detail of your trip is perfectly managed — from visa processing and airline bookings to hotel accommodations and guided tours.
                With strong partnerships across airlines, hotels, and local operators worldwide, we guarantee competitive rates, seamless coordination,
                and 24/7 support throughout your journey.
              </motion.span>
            </motion.p>

            {/* Button */}
            <motion.div
              variants={buttonVariants}
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/about">
                <Button
                  variant="contained"
                  endIcon={
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowForwardIcon />
                    </motion.div>
                  }
                  sx={{
                    backgroundColor: '#023f82',
                    color: '#fff',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    px: 4,
                    py: 1.5,
                    borderRadius: 0,
                    boxShadow: '0 4px 12px rgba(2, 63, 130, 0.3)',
                    '&:hover': {
                      backgroundColor: '#2c72b5',
                      boxShadow: '0 6px 16px rgba(2, 63, 130, 0.4)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  Explore More
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default OurNetwork;