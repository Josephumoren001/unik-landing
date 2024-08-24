import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider }
 from "react-router-dom"; 
import Home from "./pages/HomePage.jsx";
import Start from "./pages/ProductsPage.jsx";
import WaitList from "./pages/waitlist.jsx";


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
  
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
