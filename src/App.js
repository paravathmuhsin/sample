import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRouters from "./components/AppRouters/AppRouters";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouters />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
