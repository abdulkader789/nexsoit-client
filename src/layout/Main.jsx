import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";
import ScrollToTop from "../utils/ScrollToTop";
<<<<<<< HEAD
import CreateAccountPromo from "../components/CreateAccountPromo/CreateAccountPromo";
=======
import { CreateAccountPromo } from "../components/CreateAccountPromo/CreateAccountPromo";
>>>>>>> 36fbd2489370766c33eecc6aeab7482b2c8e2f0f
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Outlet />
<<<<<<< HEAD
      <CreateAccountPromo/>
      <Footer/>
=======
      <CreateAccountPromo />
      {/* <Footer /> */}
>>>>>>> 36fbd2489370766c33eecc6aeab7482b2c8e2f0f
    </div>
  );
};

export default Main;
