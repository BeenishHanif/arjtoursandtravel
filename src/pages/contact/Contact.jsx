import React from 'react';
import image1 from '/public/images/contact.jpg';
import { Slide } from '../../components/Slide';
import Contact from '../../components/Contact';
import { Helmet } from 'react-helmet-async'; 

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Arj Travel and Tours</title>
        <meta name="description" content="Have questions or need help? Contact Arj Travel and Tours for inquiries, bookings, and travel assistance." />
        <meta name="keywords" content="Contact, Arj Travel and Tours, Travel Help, Booking Support" />
      </Helmet>

      <Slide
        image={image1}
        heading="Contact Us"
        subheading="We're here to assist you"
        description="Have questions or need support? Reach out to us for any inquiries or assistance. Our team is dedicated to providing you with the best service and support."
        buttonText="Contact Us"
        link="/contact-us"
      />
      <Contact />
    </>
  );
};

export default ContactUs;
