import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import UpdateProfile from './Components/UpdateProflile/UpdateProfile.jsx';
import Contract from './Components/Contract/Contract.jsx';
import LogInpage from './Components/LogInPage/LogInpage.jsx';
import Register from './Register/Register.jsx';
import PropertyDetails from './Components/PropertyDetails/PropertyDetails.jsx';
import GetOffers from './Components/GetOffer/GetOffers.jsx';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,


    children: [

      {
  

        path: "/",
        element:<Home></Home>
}
      ,
        {
        path: '/update',
        element: <UpdateProfile></UpdateProfile>,
      },
         {
        path: '/contact',
        element: <Contract></Contract>,
      },
      {
        path: '/login',
        element: <LogInpage></LogInpage>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/Card/:id',
        element: <PropertyDetails> </PropertyDetails>,
        loader: () => fetch('../JsonFackData.json'),
      },


      {
  
        path: '/GetOffers',
        element: <GetOffers></GetOffers>
}

    ]

  },




]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <FirebaseProvider>
      <RouterProvider router={router} />
</FirebaseProvider>

  </React.StrictMode>,
)
