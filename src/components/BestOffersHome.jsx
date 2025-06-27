import React from 'react'
import location from "../assets/svg/location.svg"


const BestOffersHome = () => {
  const tourData = [
    {
      id: 1,
      title: "Maldives & Sri Lanka ~ 7 Days Group Tour",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop",
      duration: "7 Days",
      price: "Rs. 340000",
      departure: "21st July, 11th and 25th August 2025",
      rating: 0,
      hasReview: false
    },
    {
      id: 2,
      title: "Bali & Singapore with Star Dream Cruise ~ 11 Days Group Tour",
      image: "https://images.unsplash.com/photo-1544467255-f8d562b45a8b?w=400&h=250&fit=crop",
      duration: "11 Days",
      price: "Rs. 580000",
      departure: "23rd August 2025",
      rating: 0,
      hasReview: false
    },
    {
      id: 3,
      title: "Phuket & Krabi ~ 05 Days Group Tour",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73273?w=400&h=250&fit=crop",
      duration: "5 Days",
      price: "Rs. 245000",
      departure: "14 August and 28 August 2025",
      rating: 0,
      hasReview: false
    },
    {
      id: 4,
      title: "Turkey ~ 9 Days Group Tour",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=250&fit=crop",
      duration: "9 Days",
      price: "Rs. 490000",
      departure: "08 August and 22 August 2025",
      rating: 0,
      hasReview: false
    },
    {
      id: 5,
      title: "The Grand Europe ~ 09 Days Group Tour",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=250&fit=crop",
      duration: "9 Days",
      price: "Rs. 590000",
      departure: "07 August 2025",
      rating: 0,
      hasReview: false
    },
    {
      id: 6,
      title: "Magical Bali ~ 07 Days Group Tour",
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&h=250&fit=crop",
      duration: "7 Days",
      price: "Rs. 340000",
      departure: "04 July 2025 and 09 August 2025",
      rating: 0,
      hasReview: false
    }
  ];
  return (
    <div className='w-full !mb-20'>
        <div className="flex w-full flex-col justify-center items-center">
          <h1 className="title">Best Offers</h1>
            <p className="!text-lg font-[700] text-[#535252] md:text-3xl  mb-4">Explore Our top rated tours</p>
        </div>

        <div className="grid">
          {tourData.map((tour) => (
            <div
              key={tour.id}
              className="card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
              }}
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="card-image"
              />

              <div className="card-content">
                <h3 className="card-title">{tour.title}</h3>

                <div className="departure-info">
                  <span className="departure-text">
                    Departure Dates: {tour.departure}
                  </span>
                </div>

                <div className="footer">
                  <div className="duration-section">

                    <span className="duration-text">{tour.duration}</span>
                  </div>

                  <div className="price-section">
                    <span className="price-from">from</span>
                    <span className="price-amount">{tour.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default BestOffersHome
