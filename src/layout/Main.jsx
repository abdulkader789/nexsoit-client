import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";
import TestimonialPage from "../pages/TestimonialPage";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <TestimonialPage />
    </div>
  );
};

export default Main;
