import React, { useState } from 'react';
import { Slide } from '../../components/Slide';
import Contact from '../../components/Contact';
import { Helmet } from 'react-helmet-async';
import { Alert, Snackbar } from '@mui/material';

const ContactUs = () => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success', // 'success' | 'error' | 'warning' | 'info'
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");

    if (!email) {
      setSnackbar({
        open: true,
        message: 'Email field cannot be empty',
        severity: 'error',
      });
      return;
    }

    formData.append("access_key", "549fe924-49f6-471f-9e6a-e70c117c16bb");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSnackbar({
          open: true,
          message: 'Form submitted successfully',
          severity: 'success',
        });
        event.target.reset(); // clear form
      } else {
        setSnackbar({
          open: true,
          message: 'Error submitting form',
          severity: 'error',
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Submission failed:', error.message);
      }

      setSnackbar({
        open: true,
        message: 'An error occurred. Please try again later.',
        severity: 'error',
      });
    }

  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Arj Travel and Tours</title>
        <meta name="description" content="Have questions or need help? Contact Arj Travel and Tours for inquiries, bookings, and travel assistance." />
        <meta name="keywords" content="Contact, Arj Travel and Tours, Travel Help, Booking Support" />
      </Helmet>

      <Slide
        image='contact_rdktj3'
        heading="Contact Us"
        subheading="We're here to assist you"
        description="Have questions or need support? Reach out to us for any inquiries or assistance. Our team is dedicated to providing you with the best service and support."
        buttonText="Contact Us"
        link="/contact-us"
      />
      <Contact onSubmit={onSubmit} />
      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{ zIndex: (theme) => theme.zIndex.modal + 2, marginTop: '80px' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
        <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  At ARJ Travel and Tours, we specialize in crafting unforgettable journeys tailored to your dreams and desires.
                  With years of experience in the travel industry, we offer a wide range of domestic and international travel packages
                  that cater to families, solo travelers, business professionals, and groups alike. Whether you're planning a spiritual
                  pilgrimage such as Umrah or Hajj, an exotic vacation to serene landscapes, or a cultural exploration of vibrant cities,
                  we are committed to delivering experiences that go beyond expectations.
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  At ARJ Travel and Tours, we specialize in crafting unforgettable journeys tailored to your dreams and desires.
                  With years of experience in the travel industry, we offer a wide range of domestic and international travel packages
                  that cater to families, solo travelers, business professionals, and groups alike. Whether you're planning a spiritual
                  pilgrimage such as Umrah or Hajj, an exotic vacation to serene landscapes, or a cultural exploration of vibrant cities,
                  we are committed to delivering experiences that go beyond expectations.
                </motion.span>
      </Snackbar>


    </>
  );
};

export default ContactUs;
