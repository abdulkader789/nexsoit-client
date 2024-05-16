import Main from "./layout/Main";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

import "./index.css";
const routes = [
  {
    path: "/",
    element: <Main />,

    children: [
      { path: "/", element: <HomePage /> },
      { path: "/home", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
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
