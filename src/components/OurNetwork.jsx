
// import store from '../images/store1.jpeg'
// import customer from '../assets/svg/customer.svg'
// import quality from '../assets/svg/quality.svg'
// import recipe from '../assets/svg/recipe.svg'
// import shipping from '../assets/svg/shipping.svg'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import image3 from '/public/images/slider-three.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';


const OurNetwork = () => {
    return (
        <>
            <div className="flex flex-col gap-4 md:flex-row bg-base-100 my-5 mt-56">
                <motion.div initial={{ translateX: -150 }} whileInView={{ translateX: 0 }} transition={{ duration: 0.6, type: 'tween' }} className="flex relative justify-center  items-center w-full md:w-1/2 p-4" >
                    <img className='w-full h-full' src={image3} alt="store" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    exit={{ opacity: 0 }}
                    className=" w-full md:w-1/2 flex flex-col justify-center p-4" >
                    <p className='text-red 2xl:text-6xl xl:text-4xl lg:text-2xl text-xl font-bold uppercase'>Our Network</p>
                    <h2 className="title text-xl font-bold mb-4">About Our firm</h2>
                    <p className='text-sm md:text-lg'>Alpha Halal Meat, led by Khalid Jamal, has been serving the community with 100% halal meat since 1994. Starting with our Alpharetta location, we've expanded to offer groceries and takeaway food through Alpha Halal Mart. We pride ourselves on providing fresh lamb, mutton, chicken, and beef, ensuring strict halal standards. Open six days a week, we prioritize quality, customer service, and affordability.</p>
                           <Link to="/about">
  <Button
    variant="contained"
    endIcon={<ArrowForwardIcon />}
    sx={{
      backgroundColor: '#2c72b5', 
      color: '#fff',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      px: 4,
      py: 1.5,
      borderRadius: 0,
      marginTop:5,
      '&:hover': {
        backgroundColor: '#215a91',
      },
    }}
  >
    Explore More
  </Button>
</Link>

                </motion.div>
            </div>
        </>
    );
};

export default OurNetwork;