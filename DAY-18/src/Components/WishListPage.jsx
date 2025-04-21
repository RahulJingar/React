import React from "react";
import Navbar from "../Components/Navbar";
import WishList from "../Components/WishList";
import Footer from "../Components/Footer";

const WishListPage = () => {
  return (
    <div className="bg-blue-100">
      <Navbar />
      <WishList />
      <Footer />
    </div>
  );
};

export default WishListPage;