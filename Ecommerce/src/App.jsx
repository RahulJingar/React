import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// import HomePage from "./Pages/HomePage.jsx";
import ProductDesc from "./Pages/ProductDescription.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import SignupPage from "./Pages/SignupPage.jsx";
import Checkout from "./Pages/CheckOut.jsx";
import MobilesPage from "./Pages/Mobiles.jsx";
import WishListPage from "./Pages/WishListPage.jsx";
import ReturnsPage from "./Pages/ReturnsPage.jsx";
import FAQPage from "./Pages/FaqPage.jsx";
import ContactUsPage from "./Pages/ContactPage.jsx";
import OrderTackingPage from "./Pages/OrderTackingPage.jsx";
import PrivacyPolicyPage from "./Pages/PrivacyPolicyPage.jsx";
import TermsAndConditionPage from "./Pages/TermsOfService.jsx";
import Homepage from "./Pages/HomePage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/product" element={<ProductDesc />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/check" element={<Checkout />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="/mobiles" element={<MobilesPage />} />
        <Route path="/returns" element={<ReturnsPage />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/ordertracking" element={<OrderTackingPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/termsandcondition" element={<TermsAndConditionPage />} />
      </Routes>
    </Router>
  );
};

export default App;