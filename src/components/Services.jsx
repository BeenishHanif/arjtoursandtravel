import React from 'react';
import { motion } from 'framer-motion';
import {
  Assignment,
  LocalShipping,
  Flight,
  Schedule,
  Hotel,
  TransferWithinAStation
} from '@mui/icons-material';

const ServiceCard = ({ icon: Icon, title, description, index }) => (
  <motion.div 
    className="flex flex-col items-center text-center p-6 transition-shadow duration-300"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.6, 
      delay: index * 0.1,
      ease: "easeOut"
    }}
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{ y: -10 }}
  >
    <motion.div 
      className="w-20 h-20 bg-orange-400 rounded-full flex items-center justify-center !mt-6 !mb-6"
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        whileHover={{ rotate: 90 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="text-white text-3xl" />
      </motion.div>
    </motion.div>
    <motion.h3 
      className="text-xl font-semibold text-gray-800 mb-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 0.1 + 0.3 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h3>
    <motion.p 
      className="text-gray-600 text-sm leading-relaxed"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 0.1 + 0.4 }}
      viewport={{ once: true }}
    >
      {description}
    </motion.p>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: Assignment,
      title: "Visa Support",
      description: "ARJ Travel & Tours Visa Assistance Services streamline the visa application process by providing expert guidance, documentation support, and professional assistance. Our team helps individuals, groups, and businesses obtain the necessary visas for seamless travel."
    },
    {
      icon: LocalShipping,
      title: "Travel Insurance",
      description: "ARJ Travel & Tours Insurance provides financial protection against unexpected events during travel, including medical emergencies, trip cancellations, and lost baggage. It offers peace of mind by covering unforeseen expenses, ensuring a worry-free journey."
    },
    {
      icon: Flight,
      title: "Premium Flights",
      description: "ARJ Travel & Tours offers 24/7 support for all your travel needs, covering international and domestic flights worldwide. With competitive rates, we cater to individuals and groups, ensuring flexible and cost-effective travel. Whether booking online, by phone, or in person, our clients can secure their seats with ease."
    },
    {
      icon: Schedule,
      title: "24/7 Support",
      description: "With ARJ Travel & Tours, enjoy round-the-clock assistance for all your travel needs. Our dedicated support team is available 24/7 to handle emergencies, provide guidance, and ensure your journey goes smoothly at any time of day or night."
    },
    {
      icon: Hotel,
      title: "Accommodation",
      description: "At ARJ Travel & Tours, our staff helps secure top hotels and resorts worldwide for group tours and individual travelers. Whether for a leisure trip or corporate retreat, we provide expert support in finding the perfect accommodations for a seamless experience."
    },
    {
      icon: TransferWithinAStation,
      title: "Global Transfer Services",
      description: "Our worldwide transfer services guarantee convenient and reliable transportation wherever you go. From airport transfers to city-to-city travel and sightseeing, we ensure comfortable, efficient journeys for both individuals and groups."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
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

  return (
    <div className="py-16 !px-8 lg:!px-3">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="title"
            variants={titleVariants}
          >
            Our Services
          </motion.h2>
          <motion.div 
            className="text-center"
            variants={descriptionVariants}
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              At <span className="font-semibold">ARJ Travel & Tours</span>, We Offer A Wide Range Of Travel Services Designed To Provide Hassle-Free And Memorable Experiences For Our Clients.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-2">
              Whether You Are Travelling For Leisure, Business, Or A Spiritual Journey, Our Expert Team Ensures A Smooth And Well-Planned Trip.
            </p>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;