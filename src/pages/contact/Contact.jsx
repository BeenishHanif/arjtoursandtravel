import React from 'react'
import image1 from '/public/images/contact.jpg';
import { Slide } from '../../components/Slide'
import { motion } from 'framer-motion'
import Contact from '../../components/Contact'


const ContactUs = () => {
  return (
    <>
      <div>
        <Slide
          image={image1}
          heading="Contact Us"
          subheading="We're here to assist you"
          description="Have questions or need support? Reach out to us for any inquiries or assistance. Our team is dedicated to providing you with the best service and support."
          buttonText="Contact Us"
          link='/contact-us'
        />
        <Contact />
      </div>
    </>
  )
}

export default ContactUs