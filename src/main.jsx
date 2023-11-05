import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/all component/Home/Home';
import ROOTFile from './Components/all component/ROOTFile/ROOTFile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <ROOTFile></ROOTFile>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
