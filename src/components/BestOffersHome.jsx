import React from 'react'
import { motion } from 'framer-motion'
import location from "../assets/svg/location.svg"

const BestOffersHome = () => {
  const tourData = [
    {
      id: 1,
      title: "Maldives & Sri Lanka ~ 7 Days Group Tour",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop",
      duration: "7 Days",
      price: "Rs. 340000",
      departure: "21st July, 11th and 25th August 2025",
      rating: 0,
      hasReview: false
    },
    {
      id: 2,
      title: "Bali & Singapore with Star Dream Cruise ~ 11 Days Group Tour",
      image: "https://images.unsplash.com/photo-1544467255-f8d562b45a8b?w=400&h=250&fit=crop",
      duration: "11 Days",
      price: "Rs. 580000",
      departure: "23rd August 2025",
      rating: 0,
      hasReview: false
    },
    {
      id: 3,
      title: "Phuket & Krabi ~ 05 Days Group Tour",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73273?w=400&h=250&fit=crop",
      duration: "5 Days",
      price: "Rs. 245000",
      departure: "14 August and 28 August 2025",
      rating: 0,
      hasReview: false
    },
    {
      id: 4,
      title: "Turkey ~ 9 Days Group Tour",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=250&fit=crop",
      duration: "9 Days",
      price: "Rs. 490000",
      departure: "08 August and 22 August 2025",
      rating: 0,
      hasReview: false
    },
    {
      id: 5,
      title: "The Grand Europe ~ 09 Days Group Tour",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=250&fit=crop",
      duration: "9 Days",
      price: "Rs. 590000",
      departure: "07 August 2025",
      rating: 0,
      hasReview: false
    },
    {
      id: 6,
      title: "Magical Bali ~ 07 Days Group Tour",
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&h=250&fit=crop",
      duration: "7 Days",
      price: "Rs. 340000",
      departure: "04 July 2025 and 09 August 2025",
      rating: 0,
      hasReview: false
    }
  ];

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
        {tourData.map((tour, index) => (
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
              <motion.div 
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
              </motion.div>

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
                  <motion.span 
                    className="price-from"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                    from
                  </motion.span>
                  <motion.span 
                    className="price-amount"
                    whileHover={{ 
                      color: '#023f82',
                      transition: { duration: 0.3 }
                    }}
                  >
                    {tour.price}
                  </motion.span>
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