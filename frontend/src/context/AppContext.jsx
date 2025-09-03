import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


// 1. Create the context object
export const AppContext = createContext();

// 2. Provider component
export const AppContextProvider = ({ children }) => {

    const navigate=useNavigate();
    const[user,setUser]=useState(null);
    const[isSeller,setIsSeller]=useState(false);

  const value = {navigate,user,setUser,isSeller,setIsSeller}; // <- place where you store shared/global state

  return (
    <AppContext.Provider value={value}>
      {children} {/* children = rest of your app */}
    </AppContext.Provider>
  );
};

// 3. Custom hook to access the context easily
export const useApp = () => useContext(AppContext);
