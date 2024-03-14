
import { MenuClickProvider } from "./contexts/MenuClickContext";

const AppProvider = ({ children }) => {
    return (
        <MenuClickProvider>
            {children}
        </MenuClickProvider>


    );
};

export default AppProvider;