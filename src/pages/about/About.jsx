import React from 'react'
import image1 from '/public/images/img-about.jpg'
import { Slide } from '../../components/Slide'
import { motion } from 'framer-motion'
import Services from '../../components/Services';

const About = () => {
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
        <Slide
          image={image1}
          heading="About Us"
          subheading="Our Journey and Values"
          description="Discover our story, mission, and the values that drive us. We are committed to delivering excellence and innovation in everything we do. Learn more about our passion for quality and how we strive to make a difference every day."
          buttonText="Learn More"
          link='/about-us'
        />
      {/* Main Content Section */}
      <motion.div 
        className="flex w-full flex-col bg-gray-100 py-16"
        variants={backgroundVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className='container justify-center flex w-full flex-col items-center'
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Animated Title */}
          <motion.h1 
            className="title mb-8"
            variants={headerVariants}
            whileTap={{ scale: 0.98 }}
          >
            Best Tour Company in Pakistan!
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.div
            variants={paragraphVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.p 
              className="text-sm font-inter text-center text-gray-700 leading-relaxed"
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
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
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Our dedicated team of travel experts works closely with you to understand your preferences, budget, and timing, ensuring
                every detail of your trip is perfectly managed — from visa processing and airline bookings to hotel accommodations and guided tours.
                With strong partnerships across airlines, hotels, and local operators worldwide, we guarantee competitive rates, seamless coordination,
                and 24/7 support throughout your journey.
              </motion.span>
            </motion.p>
          </motion.div>

        </motion.div>
      </motion.div>

<div className='container'>
          <Services />
        </div>

     
    </motion.div>
  )
}

export default About