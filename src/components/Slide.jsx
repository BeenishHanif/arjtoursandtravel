import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Slide = ({ image, heading, subheading, description, buttonText, link }) => (
  <div className='w-full relative h-[500px] lg:h-[600px] overflow-hidden'>
    <img className='w-full h-full object-cover' src={image} alt={heading} />
    <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] bg-opacity-60 flex flex-col items-center justify-center text-white text-center p-4">
      <h2 className="text-2xl md:text-4xl font-bold uppercase mb-3">{heading}</h2>
      <h3 className="text-lg md:text-2xl font-semibold mb-3">{subheading}</h3>
      <p className="text-sm md:text-base lg:text-lg mb-4 max-w-2xl">{description}</p>
      {buttonText && (
        <Link to={link}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#023f82',
                  color: '#fff',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  px: 4,
                  py: 1.5,
                  borderRadius: 0,
                  marginTop:2,
                  '&:hover': {
                    backgroundColor: '#2c72b5',
                  },
                }}
              >
               {buttonText}
              </Button>
            </Link>
      )}
    </div>
  </div>
);
