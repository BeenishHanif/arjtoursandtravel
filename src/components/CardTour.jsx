// CardTour.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';

const CardTour = ({ tour }) => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  // Setup Cloudinary instance
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dqqt4usxi', // Replace this!
    },
  });

  // Create image with transformations
  const image = cld
    .image(tour.image) // Example: 'my-tours/tour1'
    .format('auto')
    .quality('auto')
    .resize(fill().width(600).height(300).gravity(autoGravity())); // Resize and auto-crop

  const handleClick = () => {
    navigate(`/tours/domestic/${tour.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition duration-300 p-4"
    >
      {/* Image */}
      <div className="rounded-xl overflow-hidden relative w-full h-52 group">
        {!loaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl" />
        )}
        <AdvancedImage
          cldImg={image}
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover rounded-xl transition-transform duration-300 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } group-hover:scale-105`}
        />
      </div>

      {/* Content */}
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{tour.title}</h3>
        {tour.departure && (
          <p className="text-sm text-gray-500">
            Departure Dates:{' '}
            <span className="font-medium">{tour.departure}</span>
          </p>
        )}
        <div className="flex justify-between items-center pt-2 mt-3 text-sm text-gray-700">
          {tour.duration}
        </div>
      </div>
    </div>
  );
};

export default CardTour;
