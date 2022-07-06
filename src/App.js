import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./components/AppContextProvider/AppContextProvider";
import AppRouters from "./components/AppRouters/AppRouters";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContextProvider>
          <AppRouters />
        </AppContextProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
