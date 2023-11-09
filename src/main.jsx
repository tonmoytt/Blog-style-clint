import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/all component/Home/Home';
import ROOTFile from './Components/all component/ROOTFile/ROOTFile';
import Registration from './Components/AUthProvider/registration/registration';
import Login from './Components/AUthProvider/Login/Login';
import AUthProvider from './Components/AUthProvider/AUthProvider';
import AddBlog from './Components/all component/Navbar/AddBlog/AddBlog';
import PrivetRoute from './Components/AUthProvider/PrivetRoute/PrivetRoute';
import Error from './Components/Error/Error';
import AllBlog from './Components/all component/Navbar/AllBlog/AllBlog';
import Wishlist from './Components/all component/Navbar/Wishlist/Wishlist';
import Details from './Components/all component/Navbar/AllBlog/Details/Details';
import Feature from './Components/all component/Navbar/Feature/Feature';
import UpdateComment from './Components/all component/Navbar/AllBlog/Comment/CommentUserShow/UpdateUsr/UpdateComment';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ROOTFile></ROOTFile>,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path: '/addblog',
        element: <PrivetRoute><AddBlog></AddBlog></PrivetRoute>
      },
      {
        path: '/allblog',
        element: <PrivetRoute> <AllBlog></AllBlog></PrivetRoute>,
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path: '/featured',
        element: <PrivetRoute> <Feature></Feature></PrivetRoute>,
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path: '/wishlist',
        element: <PrivetRoute> <Wishlist></Wishlist></PrivetRoute>,
        loader: () =>  fetch('http://localhost:5000/wishlist')
      },
      {
        path: '/details/:id',
        element: <PrivetRoute> <Details></Details></PrivetRoute>,
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path: '/comment/:id',
        element: <PrivetRoute> <Details></Details></PrivetRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
      },
      {
        path: '/updatecomment/:id',
        element: <PrivetRoute> <UpdateComment></UpdateComment></PrivetRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/comment/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AUthProvider>
      <RouterProvider router={router} />
    </AUthProvider>
  </React.StrictMode>,
)
