import Main from "./layout/Main";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";

import "./index.css";
import ErrorPage from "./error-page";
import Contact from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import NewContact from "./pages/NewContact";
// import NewContact from "./pages/NewContact";
const routes = [
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,

    children: [
      { path: "/", element: <HomePage /> },
      { path: "/home", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/team", element: <TeamPage /> },
      { path: "/contact", element: <Contact /> },
      { path: "/newcontact", element: <NewContact /> },

      // { path: "/newcontact", element: <NewContact /> },
    ],
  },
  // {
  //     path: "/dashboard",
  //     element: <Dashboard />, // Assuming Dashboard is a component
  //     children: [
  //         { path: "/", element: <DashboardHome /> }, // DashboardPage can be the default page for the dashboard
  //         { path: "/page1", element: <DashboardPage1 /> },
  //         { path: "/page2", element: <DashboardPage2 /> },
  //         // Add more dashboard pages as needed
  //     ]
  // }
];

export default routes;
