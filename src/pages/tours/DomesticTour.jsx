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
{/* Premium Search Bar with Enhanced Visuals */}
<div className="w-full flex justify-center -mt-10 px-4 z-10 relative">
  <div className="flex items-center w-full max-w-4xl bg-white rounded-[20px] shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100/30">
    <TextField
      variant="outlined"
      placeholder="Discover your dream destination..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      fullWidth
      onKeyDown={(e) => e.key === 'Enter' && handleSearchClick()}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon 
              sx={{ 
                color: '#3B82F6', 
                fontSize: '28px',
                transition: 'all 0.3s ease-out',
                '&:hover': { 
                  transform: 'scale(1.15) rotate(-5deg)',
                  color: '#2563EB'
                }
              }} 
            />
          </InputAdornment>
        ),
        endAdornment: searchTerm && (
          <InputAdornment position="end">
            <IconButton onClick={() => setSearchTerm('')}>
              <CloseIcon sx={{ color: '#9CA3AF', fontSize: '20px' }} />
            </IconButton>
          </InputAdornment>
        ),
        sx: {
          fontSize: '17px',
          '&::placeholder': { 
            color: '#9CA3AF', 
            opacity: 0.9,
            letterSpacing: '0.3px'
          },
        },
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          height: 68,
          borderRadius: 0,
          pl: 3,
          pr: 2,
          '&:hover fieldset': { 
            borderColor: '#E5E7EB',
            boxShadow: 'inset 0 0 0 1px #3B82F6'
          },
          '&.Mui-focused fieldset': { 
            borderColor: 'transparent',
            boxShadow: 'inset 0 0 0 2px #3B82F6, 0 0 0 2px rgba(59, 130, 246, 0.2)',
          },
        },
        '& fieldset': { 
          border: 'none',
          background: 'rgba(249, 250, 251, 0.7)'
        },
      }}
    />

    <Button
      variant="contained"
      sx={{
        height: '68px',
        borderRadius: 0,
        px: 5,
        textTransform: 'none',
        background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
        fontSize: '17px',
        fontWeight: 600,
        letterSpacing: '0.5px',
        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
        boxShadow: '0 2px 4px rgba(29, 78, 216, 0.15)',
        '&:hover': {
          background: 'linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%)',
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 12px rgba(37, 99, 235, 0.25)',
        },
        '&:active': {
          transform: 'translateY(0)',
          boxShadow: '0 2px 4px rgba(29, 78, 216, 0.2)',
        },
      }}
      onClick={handleSearchClick}
    >
      Find Tours
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
