import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WishListPage from './Components/WishListPage';
import LoginPage from './Components/LoginPage';
import MobilesPage from './Components/MobilesPage';
import IconCard from './Components/IconCard';
import Navbar from './Components/Navbar'; 
import ProductCard from './Components/ProductCard'; 
import NoPage from './Components/NoPage'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Returns from './Components/Returns';
import Faq from './Components/Faq'
import Contact from './Components/Contact';
import OrderTracking from './Components/OrderTracking';
import TermsAndConditionPage from './Components/TermsandCondition';
import PrivacyPolicyPage from './Components/PrivacyPolicy';


function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/order" element={<OrderTracking />}/>
        <Route path="/icon" element={<IconCard />}/>
        <Route path="/productDescription" element={<MobilesPage />} />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/product" element={<ProductCard />} /> 
        <Route path="/returns" element={<Returns />} /> 
        <Route path="/faq" element={<Faq />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/terms" element={<TermsAndConditionPage />} /> 
        <Route path="/privacy" element={<PrivacyPolicyPage />} /> 

        


        

        <Route path="*" element={<NoPage />} /> 
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;