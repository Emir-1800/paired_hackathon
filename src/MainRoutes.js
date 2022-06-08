import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import Home from "./Components/Home/Home";
import ProductsDetails from "./Components/Products/ProductsDetails";
import ProductsList from "./Components/Products/ProductsList";
import EditProduct from "./Components/Admin/EditProduct/EditProduct";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Auth/Login";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/productslist" element={<ProductsList />} />
        <Route path="/details/:id" element={<ProductsDetails />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
