import { createContext } from "react";

export const StoreContext = createContext(null);

const ContextProvider = ({ children }) => {

    const url = "http://localhost:5000/api"

    const ContextValue = {
        url
    };

    return (
        <StoreContext.Provider value={ContextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default ContextProvider;
