import React from 'react'
import { motion } from 'framer-motion'
import location from "../assets/svg/location.svg"
import { useNavigate } from 'react-router-dom';
import { domestictour } from '../assets/data/domestictour';

const BestOffersHome = () => {
  

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  };

  // Header animation variants
  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 50
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

  // Grid container animation
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  // Card animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
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

  // Image animation variants
  const imageVariants = {
    hidden: { 
      opacity: 0,
      scale: 1.1
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Content animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3
      }
    }
  };

  // Card hover animation
  const cardHover = {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  };

  // Image hover animation
  const imageHover = {
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  };

  const navigate = useNavigate();

  const handleClick = (tour) => {
    navigate(`/tour/${tour.id}`);
  };


  return (
    <motion.div 
      className='w-full !mb-20'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Header Section */}
      <motion.div 
        className="flex w-full flex-col justify-center items-center"
        variants={containerVariants}
      >
        <motion.h1 
          className="title"
          variants={headerVariants}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          Best Offers
        </motion.h1>
        <motion.p 
          className="!text-lg font-[700] text-[#535252] md:text-3xl mb-4"
          variants={headerVariants}
        >
          Explore Our top rated tours
        </motion.p>
      </motion.div>

      {/* Tour Cards Grid */}
      <motion.div 
        className="grid-offers"
        variants={gridVariants}
      >
        {domestictour.map((tour, index) => (
          <motion.div
            key={tour.id}
            className="card"
            variants={cardVariants}
            whileHover={cardHover}
            whileTap={{ scale: 0.98 }}
            custom={index}
            style={{
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'box-shadow 0.3s ease'
            }}
              onClick={()=>handleClick(tour)}
            onHoverStart={() => {
              // Enhanced shadow on hover via style
            }}
          >
            {/* Card Image */}
            <motion.div className="card-image-container overflow-hidden">
              <motion.img
                src={tour.image}
                alt={tour.title}
                className="card-image"
                variants={imageVariants}
                whileHover={imageHover}
                loading="lazy"
              />
            </motion.div>

            {/* Card Content */}
            <motion.div 
              className="card-content"
              variants={contentVariants}
            >
              {/* Title */}
              <motion.h3 
                className="card-title"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.2 + index * 0.1, 
                  duration: 0.5 
                }}
                viewport={{ once: true }}
              >
                {tour.title}
              </motion.h3>

              {/* Departure Info */}
              {/* <motion.div 
                className="departure-info"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: 0.3 + index * 0.1, 
                  duration: 0.5 
                }}
                viewport={{ once: true }}
              >
                <span className="departure-text">
                  Departure Dates: {tour.departure}
                </span>
              </motion.div> */}

              {/* Footer Section */}
              <motion.div 
                className="footer-offers"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.4 + index * 0.1, 
                  duration: 0.5 
                }}
                viewport={{ once: true }}
              >
                {/* Duration */}
                <motion.div 
                  className="duration-section"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <span className="duration-text">{tour.duration}</span>
                </motion.div>

                {/* Price */}
                <motion.div 
                  className="price-section"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* <motion.span 
                    className="price-from"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                    from
                  </motion.span> */}
                  {/* <motion.span 
                    className="price-amount"
                    whileHover={{ 
                      color: '#023f82',
                      transition: { duration: 0.3 }
                    }}
                  >
                    {tour.price}
                  </motion.span> */}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default BestOffersHome