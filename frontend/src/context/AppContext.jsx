import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


// 1. Create the context object
export const AppContext = createContext();

// 2. Provider component
export const AppContextProvider = ({ children }) => {

    const navigate=useNavigate();
    const[user,setUser]=useState(null);
    const[isSeller,setIsSeller]=useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);

  const value = {navigate,user,setUser,isSeller,setIsSeller,showUserLogin,setShowUserLogin}; /* ontains all the things you want to share globally.
                                                                Any component can access these without prop drilling.*/

  return (
    <AppContext.Provider value={value}>
      {children} {/* children = rest of your app */}
    </AppContext.Provider>
  );
};

// 3. Custom hook to access the context easily
export const useAppContext = () => useContext(AppContext);
