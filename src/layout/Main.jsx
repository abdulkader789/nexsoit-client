import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";
import ScrollToTop from "../utils/ScrollToTop";
import CreateAccountPromo from "../components/CreateAccountPromo/CreateAccountPromo";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <CreateAccountPromo/>
      <Footer/>
    </div>
  );
};

export default Main;
