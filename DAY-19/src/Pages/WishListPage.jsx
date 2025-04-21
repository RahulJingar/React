import React from "react";
import Navbar from "../componts/Navbar";
import Wishlist from "../componts/Wishlist";
import Footer from "../componts/Footer";

const WishListPage = () => {
  return (
    <div className="bg-blue-100">
      <Navbar/>
      <Wishlist />
      <Footer />
    </div>
  );
};

export default WishListPage;