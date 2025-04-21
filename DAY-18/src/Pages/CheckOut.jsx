
import React from "react";
import Navbar from "./Components/Navbar";
import AddToCart from "../Components/AddToCart";
import Footer from "../Components/Footer";

const CheckOut = () => {
  return (
    <div className="bg-blue-100">
      <Navbar />
      <AddToCart />
      <Footer />
    </div>
  );
};

export default CheckOut;
