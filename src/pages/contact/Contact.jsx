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
           {filteredTours.length > toursPerPage && (
                    <div className="flex justify-center mt-8 pb-12">
                      <Pagination
                        count={Math.ceil(filteredTours.length / toursPerPage)}
                        page={currentPage}
                        onChange={(e, value) => setCurrentPage(value)}
                        color="primary"
                        shape="rounded"
                        size="large"
                      />
                    </div>
                  )}
      </Snackbar>


    </>
  );
};

export default ContactUs;
