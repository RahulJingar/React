import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import IconCard from '../Components/IconCard'
import Banner from '../Components/Banner'
import AddToCart from '../Components/AddToCart'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import ProductCard from '../Components/ProductCard'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <IconCard/>
      <Card/>
      <Banner/>
      <HeroSection/>
      <IconCard/>
      <AddToCart/>
      <Footer/>
      <ProductCard/>

    </div>
  )
}

export default HomePage
