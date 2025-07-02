import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home"
import ScrollToTop from "../components/ScrollToTop";
import About from "../pages/about/About";
import ContactUs from "../pages/contact/Contact";
import InternationalTour from "../pages/tours/InternationalTour";
import DomesticTour from "../pages/tours/DomesticTour";
import UmrahHajjTour from "../pages/tours/UmrahHajjTour";
import TourDetail from "../pages/tours/TourDetail";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop /> 
        <Main />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about-us",
        element: <About />
      },
        {
        path: "/tours/international",
        element: <InternationalTour/>
      },
        {
        path: "/tours/domestic",
        element: <DomesticTour />
      },
        {
        path: "/tours/hajj-umrah",
        element: <UmrahHajjTour />
      },
       {
        path: "/tour/:id" ,
        element: <TourDetail />
      },
        {
        path: "/contact-us",
        element: <ContactUs />
      },
    
    ]
  },
]);

export default router