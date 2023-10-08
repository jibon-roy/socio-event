import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// Routers
import { RouterProvider } from "react-router-dom";
import router from './router/router';
// AOS
import 'aos/dist/aos.css';
import AOS from 'aos';


AOS.init({
  duration: 1000,
  offset: 130,
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
