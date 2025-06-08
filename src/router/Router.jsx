import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home"
import ScrollToTop from "../components/ScrollToTop";

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
    
    ]
  },
]);

export default router