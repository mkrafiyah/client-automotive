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
import SingleDetail from './Components/SingleDetail/SingleDetail.jsx';
import UpdateCart from './Components/UpdateCart/UpdateCart.jsx';

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
       
      },
      {
        path: '/carDetail/:id',
        element: <SingleDetail></SingleDetail>,
        // loader: ()=>fetch('http://localhost:5000/cars')
      },
      {
        path: '/myCart',
        element: <MyCart></MyCart>,
        loader: ()=>fetch('http://localhost:5000/order')
      },
      {
        path: '/updateCart/:id',
        element: <UpdateCart></UpdateCart>,
        // loader: ({params})=> fetch(`http://localhost:5000/order/${params.id}`)
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
