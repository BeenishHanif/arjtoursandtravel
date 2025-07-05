import React, { useEffect, useMemo, useState } from 'react'
import image3 from '/public/images/slider-one.jpg'
import { Slide } from '../../components/Slide'
import { motion } from 'framer-motion'
import { tourData } from '../../assets/data/tours';
import CardTour from '../../components/CardTour';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

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

const DomesticTour = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Only filter when searchQuery is updated
  const filteredTours = useMemo(() => {
    if (!searchQuery) return tourData;
    return tourData.filter((tour) =>
      tour.Destinations?.some((dest) =>
        dest.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  const handleSearchClick = () => {
    setSearchQuery(searchTerm);
  };
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchQuery('');
    }
  }, [searchTerm]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Slide Section */}
      <Slide
        image={image3}
        heading="Domestic Tours"
        subheading="Discover the Beauty of Pakistan"
        description="Explore the breathtaking landscapes and cultural heritage of Pakistan with our comfortable domestic tour packages."
      />

      {/* Search Bar with Search Button */}
      <div className="w-full flex justify-center -mt-10 px-4 z-10 relative">
        <div className="flex items-center w-full max-w-4xl bg-white rounded-[20px] shadow  overflow-hidden">
          <TextField
            variant="outlined"
            placeholder="Destination"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            fullWidth
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearchClick();
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                border: 'none',
                height: 60,
                borderRadius: 0,
                pl: 2,
              },
              '& fieldset': {
                border: 'none',
              },
            }}
          />

          <Button
            variant="contained"
            color="primary"
            sx={{
              height: '60px',
              borderRadius: 0,
              px: 4,
              textTransform: 'none',
              bgcolor: '#3b82f6',
              fontSize: '15px',
              '&:hover': {
                bgcolor: '#2563eb',
              },
            }}
            onClick={handleSearchClick}
          >
            Search
          </Button>
        </div>
      </div>

      {/* Tour Cards */}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {filteredTours.map((tour, index) => (
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
  );
};

export default DomesticTour
