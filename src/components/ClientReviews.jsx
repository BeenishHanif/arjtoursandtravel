import React from 'react';
import { motion } from 'framer-motion';
import quote from "../assets/svg/quote.svg";

const ClientReviews = ({ 
  testimonials = [
    {
      text: "ARJ Travel and Tours planned our vacation perfectly. From hotel bookings to guided tours, everything was seamless and enjoyable.",
      author: "Sarah Khan"
    },
    {
      text: "I've traveled with other agencies, but ARJ was by far the most professional and accommodating. Highly recommended!",
      author: "Ahmed Raza"
    },
    {
      text: "Thanks to ARJ Travel, our Umrah trip was peaceful, comfortable, and incredibly well-organized. Truly grateful.",
      author: "Fatima Noor"
    }
  ]
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardHover = {
    scale: 1.01,
    y: -10,
    transition: {
      duration: 0.1,
      ease: "easeInOut"
    }
  };

  const quoteVariants = {
    hidden: { 
      opacity: 0, 
      rotate: -180,
      scale: 0
    },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <motion.div 
      className="container !my-10 w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div 
        className="text-center mb-8 sm:mb-10 lg:mb-12"
        variants={textVariants}
      >
        <motion.h2 
          className="title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4"
          variants={textVariants}
        >
          Customer Reviews
        </motion.h2>
        <motion.p 
          className="subtitle text-xs sm:text-sm md:text-base text-gray-600 tracking-wide"
          variants={textVariants}
        >
          What our customers say about us
        </motion.p>
      </motion.div>

      <motion.div 
        className="max-w-7xl !mt-5 mx-auto"
        variants={containerVariants}
      >
        <div className="flex flex-row flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="text-center w-[300px] duration-300 "
              variants={cardVariants}
              whileHover={cardHover}
              custom={index}
            >
              <motion.div 
                className="flex justify-center mb-4 sm:mb-5 lg:mb-6"
                variants={quoteVariants}
              >
                <motion.img 
                  src={quote} 
                  className="size-8" 
                  alt="quote icon"
                  whileHover={{ 
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                />
              </motion.div>
              
              <motion.p 
                className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4 min-h-[60px] sm:min-h-[80px] lg:min-h-[100px] flex items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {testimonial.text}
              </motion.p>
              
              <motion.div 
                className="text-xs sm:text-sm md:text-base font-bold text-[#023f82]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {testimonial.author}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ClientReviews;