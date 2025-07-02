import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CardTour = ({ tour, index, cardVariants, cardHover, imageVariants, imageHover, contentVariants }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/tour/${tour.id}`);
  };

  return (
    <motion.div
      key={tour.id}
      className="bg-white rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition duration-300 p-4"
      variants={cardVariants}
      whileHover={cardHover}
      whileTap={{ scale: 0.98 }}
      custom={index}
      onClick={handleClick}
    >
      {/* Card Image */}
      <motion.div className="rounded-xl overflow-hidden" variants={imageVariants} whileHover={imageHover}>
        <motion.img
          src={tour.image}
          alt={tour.title}
          className="w-full h-52 object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Card Content */}
      <motion.div className="mt-4 space-y-2" variants={contentVariants}>
        {/* Title */}
        <motion.h3
          className="text-lg font-semibold text-gray-800"
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
        {tour.departure && (
          <motion.p
            className="text-sm text-gray-500"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.3 + index * 0.1,
              duration: 0.5
            }}
            viewport={{ once: true }}
          >
            Departure Dates: <span className="font-medium">{tour.departure}</span>
          </motion.p>
        )}

        {/* Duration & Price */}
        <motion.div
          className="flex justify-between items-center pt-2 border-t mt-3"
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
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="text-sm text-gray-700"
          >
            {tour.duration}
          </motion.div>

          {/* Price */}
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="text-right text-sm text-gray-700"
          >
            <span className="text-gray-400">from </span>
            <span className="font-bold text-blue-800">{tour.price}</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CardTour;
