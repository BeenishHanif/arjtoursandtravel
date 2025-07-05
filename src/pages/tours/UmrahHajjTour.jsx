import React from 'react'
import image2 from '/public/images/slider-two.jpg'
import { Slide } from '../../components/Slide'
import { motion } from 'framer-motion'
import { tourData } from '../../assets/data/tours';
import CardTour from '../../components/CardTour';

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
const UmrahHajjTour = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Slide
        image={image2}
        heading="Hajj & Umrah"
        subheading="Spiritual Journeys with Care"
        description="Experience a spiritually fulfilling Hajj and Umrah with our trusted and well-organized pilgrimage packages."
      />

      <div className='container'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {tourData.map((tour, index) => (
            <CardTour
              key={tour.id}
              tour={tour}
              index={index}
              cardVariants={cardVariants}
              cardHover={cardHover}
              imageVariants={imageVariants}
              imageHover={imageHover}
              contentVariants={contentVariants}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default UmrahHajjTour
