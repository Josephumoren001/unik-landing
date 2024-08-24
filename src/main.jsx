import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider }
 from "react-router-dom"; 
import Home from "./pages/HomePage.jsx";
import Start from "./pages/ProductsPage.jsx";
import WaitList from "./pages/waitlist.jsx";
import Collection from "./pages/collection.jsx";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    // errorElement: <Oops />
  },
  {
    path: '/products',
    element: <Start />,
  },
  {
    path: '/waitlist',
    element: <WaitList />,
  },
  {
    path: '/collection',
    element: <Collection />,
  },
  
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
