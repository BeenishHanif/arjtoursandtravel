import React, { useEffect, useState } from 'react'
import SliderHome from '../../components/SliderHome'
import OurNetwork from '../../components/OurNetwork';
import BestOffersHome from '../../components/BestOffersHome';
import WhyChooseUsBanner from '../../components/WhyChooseUsBanner';
import ClientReviews from '../../components/ClientReviews';


const Home = () => {
  const [showModal, setShowModal] = useState(false); 

  const toggleModal = () => {
    setShowModal(!showModal); 
  };
  useEffect(() => {
  toggleModal();
  }, [])
  
  return (
    <div>
      {/* <Helmet>
        <title>Home | Alpha Halal</title>
        <meta name="description" content="Welcome to the Halal Store. Find a wide range of halal products here." />
      </Helmet> */}
      {/* <Modal isOpen={showModal} onClose={toggleModal}>
        <ChatInfo onClose={toggleModal} />
      </Modal> */}
      <SliderHome />
      <div className="flex !mt-3 justify-center items-center">
      <div className="container">
        <BestOffersHome/>
      <OurNetwork/>
      </div>
      </div>
      <WhyChooseUsBanner/>
      <ClientReviews/>
      {/* <Welcome />
      <AboutUs />
      <InfiniteSlider />
      <Specials/>
      <Appetizers/>
      <AlphaMart />
      <AlphaMeat />
      <Banner title='Savor the Freshness, Trust the Quality' subtitle='At Alpha Halal Meat & Mart, we bring you the finest selection of 100% halal meats and a wide variety of grocery essentials.
          From farm to table, we ensure the highest standards in every cut, every product, every time.' img={banner} />
      <ChooseUs /> */}
    </div>
  )
}

export default Home