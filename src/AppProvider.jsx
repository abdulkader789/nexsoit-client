import { MenuClickProvider } from "./contexts/MenuClickContext";
import MobileNavContext from "./contexts/MobileNavContext";

const AppProvider = ({ children }) => {
  return <MobileNavContext>{children}</MobileNavContext>;
};

export default AppProvider;
