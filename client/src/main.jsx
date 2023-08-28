import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';
import AboutPage from './pages/AboutPage.jsx';
import CompanyPage from './pages/CompanyPage.jsx';
import ContactPage from './pages/ContactPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      },
      {
        path: '/AboutPage',
        element: <AboutPage />
      }, 
      {
        path: '/CompanyPage',
        element: <CompanyPage />
      }, 
      {
        path: '/ContactPage',
        element: <ContactPage />
      },
      {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/profiles/:username',
        element: <Profile />
      }, {
        path: '/me',
        element: <Profile />
      }, 
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
