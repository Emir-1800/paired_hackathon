import React from "react";
import { BrowserRouter } from "react-router-dom";
import PrimarySearchAppBar from "./Components/Navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <PrimarySearchAppBar />
      </BrowserRouter>
    </div>
  );
};

export default App;
