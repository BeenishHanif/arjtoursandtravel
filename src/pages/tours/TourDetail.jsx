import { useParams } from "react-router-dom";
import { domestictour } from "../../assets/data/domestictour";
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { internationaltour } from "../../assets/data/internationaltour";
import { hajjumrahtour } from "../../assets/data/hajjumrahtour";


const TourDetail = () => {
  const { type, id } = useParams();

  // Determine which tour data to use
  let dataSource = [];
  switch (type) {
    case "domestic":
      dataSource = domestictour;
      break;
    case "international":
      // dataSource = internationalTourData;
      dataSource = internationaltour;
      break;
    case "umrahhajj":
      // dataSource = umrahHajjTourData;
      dataSource = hajjumrahtour;
      break;
    default:
      dataSource = [];
  }

  const cld = new Cloudinary({
  cloud: {
    cloudName: 'dqqt4usxi', // your cloud name
  },
});


const tour = dataSource.find((t) => t.id.toString() === id);

const image = cld
   .image(tour.image) // Example: 'my-tours/tour1'
   .format('auto')
   .quality('auto')
   .resize(fill().width(600).height(300).gravity(autoGravity())); // Resize and auto-crop

  if (!tour) return <div className="text-center mt-10">Tour not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{tour.title}</h1>
        <AdvancedImage cldImg={image} alt={tour.title} className="w-full h-64 object-cover rounded-xl mb-6" />
      <p className="text-gray-700 mb-4">Duration: {tour.duration}</p>
      <p className="text-gray-700 mb-4">Price: {tour.price}</p>
      <p className="text-gray-700 mb-6">Departure Dates: {tour.departure || "To Be Announced"}</p>

      <h2 className="text-xl font-semibold mb-2">Itinerary:</h2>
      <ul className="list-disc ml-6 space-y-2 text-gray-600">
        {tour.package?.map((day, index) => (
          <li key={index}>{day}</li>
        ))}
      </ul>
    </div>
  );
};

export default TourDetail;
