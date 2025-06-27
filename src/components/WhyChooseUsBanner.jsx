import React from 'react';
import { motion } from 'framer-motion';
import image3 from '/public/images/bannerchooseus.jpg';
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

  // Background image animation
  const backgroundVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  // Overlay animation
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3
      }
    }
  };

  // Title animation variants
  const titleVariants = {
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

  // Subtitle animation variants
  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  // Feature card animation variants
  const featureVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Icon animation variants
  const iconVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  // Hover animation for feature cards
  const featureHover = {
    y: -10,
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  };

  // Icon hover animation
  const iconHover = {
    scale: 1.2,
    rotate: 10,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  };

  return (
    <div 
      className="relative !mt-20 w-full h-auto mb-10"
    >
      {/* Background Image with Animation */}
      <img 
        className="w-full h-full object-cover absolute inset-0 z-0" 
        src={image3} 
        alt="ARJ Travel Background"
      />
      
      {/* Animated Overlay */}
      <div 
        className="absolute inset-0 bg-[rgba(0,0,0,0.5)] z-10"
      />
      
      {/* Content Container */}
      <motion.div 
        className="relative z-20 py-12 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-8 !pt-10 md:mb-12"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-white title-white font-bold mb-2 md:mb-4"
            variants={titleVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            {title}
          </motion.h1>
          <motion.p 
            className="subtitle-white text-center text-base md:text-lg mx-auto px-4"
            variants={subtitleVariants}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          className="container"
          variants={containerVariants}
        >
          <div className="flex md:flex-row flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="text-center w-[300px] text-white px-4"
                variants={featureVariants}
                whileHover={featureHover}
                custom={index}
              >
                {/* Icon Container */}
                <motion.div 
                  className="flex justify-center !mb-5"
                  variants={iconVariants}
                >
                  <motion.div 
                    className="md:size-16 size-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                    whileHover={iconHover}
                    whileTap={{ scale: 0.9 }}
                  >
                    {feature.icon}
                  </motion.div>
                </motion.div>

                {/* Feature Title */}
                <motion.h3 
                  className="text-sm md:text-md font-semibold mb-2 md:mb-4 tracking-wide px-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.5 + index * 0.1, 
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                >
                  {feature.title}
                </motion.h3>

                {/* Feature Description */}
                <motion.p 
                  className="text-xs md:text-sm opacity-90 leading-relaxed mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.7 + index * 0.1, 
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyChooseUsBanner;