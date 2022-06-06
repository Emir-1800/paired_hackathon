import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Navcom from "./Components/Navbar/Navbar";
import Home from "./Components/Navbar/Home/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navcom />
        <Home />
      </BrowserRouter>
    </>
  );
};

export default App;
