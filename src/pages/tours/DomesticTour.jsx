import React, { useEffect, useMemo, useState } from 'react'
import image3 from '/public/images/slider-one.jpg'
import { Slide } from '../../components/Slide'
import { motion } from 'framer-motion'
import { domestictour } from '../../assets/data/domestictour';
import CardTour from '../../components/CardTour';
import {
  TextField,
  InputAdornment,
  Button,
  Drawer,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Chip,
  Divider,
  Pagination
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterListIcon,
  Close as CloseIcon,
  Sort as SortIcon
} from '@mui/icons-material';
import { Helmet } from 'react-helmet-async';

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
  const [priceSort, setPriceSort] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Filter and sort tours
  const filteredTours = useMemo(() => {
    let filtered = domestictour;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter((tour) =>
        tour.Destinations?.some((dest) =>
          dest.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    // Sort by price
    if (priceSort) {
      filtered = [...filtered].sort((a, b) => {
        const priceA = parseFloat(a.price?.replace(/[^\d.]/g, '') || 0);
        const priceB = parseFloat(b.price?.replace(/[^\d.]/g, '') || 0);

        if (priceSort === 'low-to-high') {
          return priceA - priceB;
        } else if (priceSort === 'high-to-low') {
          return priceB - priceA;
        }
        return 0;
      });
    }

    return filtered;
  }, [searchQuery, priceSort]);

  const handleSearchClick = () => {
    setSearchQuery(searchTerm);
  };

  const handlePriceSortChange = (event) => {
    setPriceSort(event.target.value);
  };

  const clearFilters = () => {
    setPriceSort('');
    setSearchTerm('');
    setSearchQuery('');
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchQuery('');
    }
  }, [searchTerm]);

  // Filter component that can be used in both drawer and desktop
  const FilterComponent = () => (
    <Box sx={{ p: isMobile ? 2 : 0, minWidth: isMobile ? 250 : 200 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        {isMobile && (
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        )}
      </Box>

      <FormControl fullWidth size="small" sx={{ width: isMobile ? '100%' : 200 }}>
        <InputLabel id="filter-label">Filter</InputLabel>
        <Select
          labelId="filter-label"
          value={priceSort}
          label="Filter"
          onChange={handlePriceSortChange}
          MenuProps={{
            disableScrollLock: true,
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="low-to-high">Price: Low to High</MenuItem>
          <MenuItem value="high-to-low">Price: High to Low</MenuItem>
        </Select>
      </FormControl>

      {(priceSort || searchQuery) && (
        <Box sx={{ mt: 2 }}>
          {/* <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Active Filters:
          </Typography> */}
          {/* <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {priceSort && (
              <Chip
                label={priceSort === 'low-to-high' ? 'Price: Low to High' : 'Price: High to Low'}
                onDelete={() => setPriceSort('')}
                size="small"
                color="primary"
              />
            )}
            {searchQuery && (
              <Chip
                label={`Destination: ${searchQuery}`}
                onDelete={() => {
                  setSearchQuery('');
                  setSearchTerm('');
                }}
                size="small"
                color="primary"
              />
            )}
          </Box> */}
          {/* <Button
            variant="text"
            size="small"
            onClick={clearFilters}
            sx={{ mt: 1, textTransform: 'none' }}
          >
            Clear All Filters
          </Button> */}
        </Box>
      )}
    </Box>
  );

   const [currentPage, setCurrentPage] = useState(1);
  const toursPerPage = 6;

  const indexOfLastTour = currentPage * toursPerPage;
  const indexOfFirstTour = indexOfLastTour - toursPerPage;
  const currentTours = filteredTours.slice(indexOfFirstTour, indexOfLastTour);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <>
      <Helmet>
        <title>Domestic Tours | Arj Travel and Tours</title>
        <meta name="description" content="Explore the beauty of Pakistan with our specially crafted domestic tour packages. From valleys to cities, travel with comfort and ease." />
        <meta name="keywords" content="Pakistan Tours, Domestic Tours, Northern Areas, Murree, Skardu, Hunza, Arj Travel" />
      </Helmet>

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

        {/* Search Bar with Filter Button */}
        <div className="w-full flex justify-center -mt-10 px-4 z-10 relative">
          <div className="flex items-center w-full max-w-4xl bg-white rounded-[20px] shadow overflow-hidden">
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

            {isMobile && (
              <IconButton
                onClick={toggleDrawer(true)}
                sx={{
                  height: '60px',
                  width: '60px',
                  borderRadius: 0,
                  bgcolor: '#f3f4f6',
                  '&:hover': {
                    bgcolor: '#e5e7eb',
                  },
                }}
              >
                <FilterListIcon />
              </IconButton>
            )}
          </div>
        </div>

        {/* Mobile Filter Drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          sx={{
            '& .MuiDrawer-paper': {
              width: 300,
              maxWidth: '80vw',
            },
          }}
        >
          <FilterComponent />
        </Drawer>

        {/* Tour Cards */}
        <div className="container">
          {/* Desktop Filter Section */}
          {!isMobile && (
            <div className="flex justify-between items-start mb-4">
              <div></div>
              <div className="w-full md:w-auto">
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <FilterComponent />
                </Box>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {currentTours.map((tour, index) => (
              <CardTour
                key={tour.id}
                tour={tour}
                index={indexOfFirstTour + index}
              />
            ))}
          </div>

          {/* Pagination Controls */}
          {filteredTours.length > toursPerPage && (
            <div className="flex justify-center mt-8 pb-12">
              <Pagination
                count={Math.ceil(filteredTours.length / toursPerPage)}
                page={currentPage}
                onChange={(e, value) => setCurrentPage(value)}
                color="primary"
                shape="rounded"
                size="large"
              />
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};


export default DomesticTour;

