import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";
import ScrollToTop from "../utils/ScrollToTop";
import CreateAccountPromo from "../components/CreateAccountPromo/CreateAccountPromo";
import Footer from "../components/Footer/Footer";
import { FeaturedNav } from "../feature/FeaturedHome";

const Main = () => {
  return (
    <div>
      <ScrollToTop />
      <FeaturedNav/>
      <Outlet />
      <CreateAccountPromo/>
      <Footer/>
    </div>
  );
};

export default Main;
