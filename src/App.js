import React from "react";
import { BrowserRouter } from "react-router-dom";
import PrimarySearchAppBar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <PrimarySearchAppBar />
    </BrowserRouter>
  );
};

export default App;
