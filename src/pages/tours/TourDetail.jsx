import { useParams } from "react-router-dom";
import { tourData } from "../../assets/data/tours";

const TourDetail = () => {
  const { id } = useParams();
  const tour = tourData.find((t) => t.id.toString() === id);

  if (!tour) return <div className="text-center mt-10">Tour not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{tour.title}</h1>
      <img src={tour.image} alt={tour.title} className="w-full h-64 object-cover rounded-xl mb-6" />
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
