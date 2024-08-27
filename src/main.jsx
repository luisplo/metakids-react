import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GuestLayout from './layouts/GuestLayout.jsx'
import Activity from './pages/Activity.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Footer from './components/Footer.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/activities",
        element: <Activity />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  </StrictMode>,
)
