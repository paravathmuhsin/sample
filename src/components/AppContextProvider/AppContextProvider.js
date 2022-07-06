import React, { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
  return useContext(AppContext);
};

const AppContextProvider = ({ children }) => {
  const [value, setValue] = useState({ appTitle: "" });
  const providerValue = {
    appTitle: value.appTitle,
    setAppTitle: (title) => {
      setValue({ appTitle: title });
    },
  };
  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
