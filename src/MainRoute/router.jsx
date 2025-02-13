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
import HowToHelp from "../Components/HowToHelp.jsx";
import DonateDetails from "../PrivatePages/DonateDetails.jsx";
import PrivateRoute from "../PrivatePages/PrivateRoute.jsx";
import UpdateProfile from "../Allpage/UpdateProfile.jsx";
import ForgetPass from "../Allpage/ForgetPass.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <HomeLayout></HomeLayout>,




      },
      {
        path: '/donation',
        element: <Donation></Donation>,
        loader: () => fetch('devision.json')

      },
      {
        path: '/help',
        element: <HowToHelp></HowToHelp>,

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
        path: '/details/:id',
        element: (<PrivateRoute>
          <DonateDetails></DonateDetails>
        </PrivateRoute>),
        loader: async ({ params }) => {
          const result = await fetch('/devision.json')
          const data = await result.json()
          const singleData = data.find(item => item.id == params.id)
          return singleData
        }
      },

      {
        path: '/dashboard',
        element: <PrivateRoute> <Dashboard></Dashboard></PrivateRoute>
      },
      {
        path:'/updeteprofile',
        element:<UpdateProfile></UpdateProfile>
      },
      {
        path:'/forget',
        element:<ForgetPass></ForgetPass>
      }

    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }

]);

export default router