import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Layouts/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import AddProducts from './Components/AddProducts/AddProducts.jsx';
import MyCart from './Components/MyCart/MyCart.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import BrandDetails from './Components/BrandDetails/BrandDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        // loader: ()=> fetch('http://localhost:5000/cars')
      },
      {
        path: '/addProducts',
        element: <AddProducts></AddProducts>,
        // loader: ()=> fetch('./cars.json')
      },
      {
        path: '/cars/:brand',
        element: <BrandDetails></BrandDetails>,
        //loader: ()=> fetch(`http://localhost:5000/cars/${brand}`)
      },
      {
        path: '/myCart',
        element: <MyCart></MyCart>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
