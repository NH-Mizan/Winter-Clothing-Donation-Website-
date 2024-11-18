import {
  createBrowserRouter,

} from "react-router-dom";


import MainLayout from "../Components/MainLayout.jsx";
import HomeLayout from "../Components/HomeLayout.jsx";
import Dashboard from "../Components/Dashboard.jsx";

import Login from "../Allpage/Login.jsx";
import Donation from "../Allpage/Donation.jsx";
import Register from "../Allpage/Register.jsx";
import ErrorPage from "../Components/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        loader: () => fetch('devision.json')



      },
      {
        path: '/donation',
        element: <Donation></Donation>,
        loader: () =>fetch('devition.json')
     
      },
      {
        path: '/login',
        element: <Login></Login>

      },
      {
        path: '/register',
        element: <Register></Register>





      },

      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      
    ]
  },
  {
    path:'*',
    element:<ErrorPage></ErrorPage>
  }

]);

export default router