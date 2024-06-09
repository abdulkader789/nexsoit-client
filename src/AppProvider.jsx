import CategoryClickProvider from "./contexts/CategoryClickContext";
import MobileNavContext from "./contexts/MobileNavContext";

const AppProvider = ({ children }) => {
  return (
    <MobileNavContext>
      <CategoryClickProvider>{children}</CategoryClickProvider>
    </MobileNavContext>
  );
};

export default AppProvider;
