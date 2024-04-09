import { createBrowserRouter } from "react-router-dom";
import Analytics from "../components/analytics/analytics";
import HomePage from "../components/homepage/home";
import LoginPage from "../components/login/login";
import SignUpPage from "../components/signup/signup";


  // Define your routes here
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
        {
        path: "/analytics",
        element: <Analytics/>,
        },
        {
            path: "/login",
            element: <LoginPage/>, // Add this line to define the route for LoginPage
          },
          {
            path: "/signup", // Define the route for the SignUpPage
            element: <SignUpPage/>,
          },
  ]);

export default router;


