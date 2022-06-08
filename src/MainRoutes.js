// import { Route } from "@mui/icons-material";
import { Home } from "@mui/icons-material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddProduct />} />
    </Routes>
  );
};

export default MainRoutes;
