import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouters from "./components/AppRouters/AppRouters";

function App() {
  return (
    <BrowserRouter>
    <AppRouters/>
    </BrowserRouter>
  );
}

export default App;
