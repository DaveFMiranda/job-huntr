import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage.jsx";
import CompanyPage from "./pages/CompanyPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import CommonQuestions from "./pages/CommonQuestions.jsx";
import QuestionUpdate from "./components/QuestionUpdate/index.jsx";
import FAQ from "./pages/FAQ.jsx";
import AddQuestion from "./pages/AddQuestion.jsx";
import JobTracker from "./pages/JobTracker.jsx";
import Job from "./components/Job";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/AboutPage",
        element: <AboutPage />,
      },
      { path: "/ContactPage", element: <ContactPage /> },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/CompanyPage",
        element: <CompanyPage />,
      },
      {
        path: "/CommonQuestions",
        element: <CommonQuestions />,
      },
      { path: "/FAQ", element: <FAQ /> },
      { path: "/AddQuestion", element: <AddQuestion /> },
      { path: "/JobTracker", element: <JobTracker /> },
      {
        path: "/JobTracker/:jobId",
        element: <Job />,
      },

    
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/updatequestion/:id",
        element: <QuestionUpdate />,
      },
      {
        path: "/updatequestion/:id",
        element: <QuestionUpdate />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
