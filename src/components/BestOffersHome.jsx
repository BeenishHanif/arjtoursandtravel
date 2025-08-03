import React, { useState } from 'react'
import { motion } from 'framer-motion'
import location from "../assets/svg/location.svg"
import { useNavigate } from 'react-router-dom';
import { domestictour } from '../assets/data/domestictour';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';


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
    y: 20
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



const BestOffersHome = () => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  const handleClick = (tour) => {
    navigate(`/tours/domestic/${tour.id}`);
  };

  // Setup Cloudinary once per component or file
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dqqt4usxi', // Replace with your actual cloud name
    },
  });

  return (
    <motion.div
      className="w-full mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Header */}
      <motion.div
        className="flex flex-col items-center justify-center w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
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

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6"
        initial="hidden"
        animate="visible"
      >
        {domestictour.slice(0, 9).map((tour, index) => {
          // Create and transform the image
          const img = cld
            .image(tour.image) // tour.image should be public ID like '15_veu1zp'
            .format('auto')
            .quality('auto')
            .resize(fill().width(600).height(208).gravity(autoGravity())); // 208px = ~h-52


          return (
            <motion.div
              key={tour.id}
              onClick={() => handleClick(tour)}
              className="bg-white rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition duration-300 p-4 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {/* Image */}
              <div className="rounded-xl overflow-hidden relative h-52 w-full">
                {!loaded && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl" />
                )}
                <AdvancedImage
                  cldImg={img}
                  onLoad={() => setLoaded(true)}
                  className={`w-full h-full object-cover rounded-xl transition-transform duration-300 ${loaded ? "opacity-100" : "opacity-0"
                    } group-hover:scale-105`}
                />

              </div>

              {/* Text Content */}
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {tour.title}
                </h3>

                {tour.departure && (
                  <p className="text-sm text-gray-500">
                    Departure:{" "}
                    <span className="font-medium">{tour.departure}</span>
                  </p>
                )}

                <div className="flex justify-between items-center pt-2 mt-3 text-sm text-gray-700">
                  <span>{tour.duration}</span>
                  {/* If you want price later, uncomment this:
                  <span className="font-bold text-blue-800">{tour.price}</span>
                  */}
                  {/* <motion.div
                  className="price-section"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                > */}
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
                  {/* </motion.div>  */}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default BestOffersHome;

