import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home"
import ScrollToTop from "../components/ScrollToTop";
import About from "../pages/about/About";
import ContactUs from "../pages/contact/Contact";


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
        path: "/contact-us",
        element: <ContactUs />
      },
    
    ]
  },
]);

export default router