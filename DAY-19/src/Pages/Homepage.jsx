import React from 'react'
import Navbar from '../componts/Navbar'
import HeroSection from '../componts/HeroSection';
import IconsCard from '../componts/IconsCard';
import Card from '../componts/Card';
import Benar from '../componts/benar';
import Footer from '../componts/Footer';


const Homepage = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <div className='p-8 font-bold text-2xl'>
        <h1>New Products</h1>
        <div className='mt-8 p-9 flex flex-wrap gap-5'>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
      <Benar/>
      <IconsCard/>
      <Footer/>
       <IconsCard/>
      <HeroSection/>
      <Footer/>
    </>
  )
}

export default Homepage