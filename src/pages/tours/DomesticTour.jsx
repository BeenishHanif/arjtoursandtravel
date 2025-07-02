import React from 'react'
import image3 from '/public/images/slider-one.jpg'
import { Slide } from '../../components/Slide'
import { motion } from 'framer-motion'

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

  // Paragraph animation variants
  const paragraphVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Main section variants
  const sectionVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  // Services section variants
  const servicesVariants = {
    hidden: { 
      opacity: 0,
      y: 100
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Background animation variants
  const backgroundVariants = {
    hidden: { 
      backgroundColor: "rgba(243, 244, 246, 0)",
      backdropFilter: "blur(0px)"
    },
    visible: {
      backgroundColor: "rgba(243, 244, 246, 1)",
      backdropFilter: "blur(10px)",
      transition: {
        duration: 1.2,
        ease: "easeInOut"
      }
    }
  };
const DomesticTour = () => {
  return (
       <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
    <Slide
  image={image3}
  heading="Domestic Tours"
  subheading="Discover the Beauty of Pakistan"
  description="Explore the breathtaking landscapes and cultural heritage of Pakistan with our comfortable domestic tour packages."
/>    
    </motion.div>
  )
}

export default DomesticTour
