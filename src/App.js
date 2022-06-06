import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Navcom from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navcom />
      </BrowserRouter>
    </>
  );
};

export default App;
