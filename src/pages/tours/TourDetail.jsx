import { useParams } from "react-router-dom";
import { domestictour } from "../../assets/data/domestictour";


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
      dataSource = domestictour;
      break;
    case "umrahhajj":
      // dataSource = umrahHajjTourData;
      dataSource = domestictour;
      break;
    default:
      dataSource = [];
  }

  const tour = dataSource.find((t) => t.id.toString() === id);

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
