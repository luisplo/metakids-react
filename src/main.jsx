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
import Reward from './pages/Reward.jsx'
import Penalty from './pages/Penalty.jsx'
import Home from './pages/Home.jsx'
import AuthLayout from './layouts/AuthLayout.jsx'
import Login from './pages/Login.jsx'
import LogUp from './pages/LogUp.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "activities",
        element: <Activity />
      },
      {
        path: "rewards",
        element: <Reward />
      },
      {
        path: "penalties",
        element: <Penalty />
      },
    ]
  },
  {
    path: "/sign",
    element: <GuestLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "in",
        element: <Login />
      },
      {
        path: "up",
        element: <LogUp />
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <Footer />
      <ToastContainer />
    </>
  // </StrictMode>,
)
