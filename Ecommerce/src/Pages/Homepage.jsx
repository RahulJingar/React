import React from 'react'
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import IconsCard from '../Components/IconsCard';
import Card from '../Components/Card';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';

const Homepage = () => {
  return (
    <>
      {/* <Navbar/> */}
      <HeroSection/>
      <div className='p-8 font-bold text-2xl'>
        <h1>New Products</h1>
        <div className='mt-8 p-9 flex flex-wrap gap-5'>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
      <Banner/>
      <IconsCard/>
      <Footer/>
       <IconsCard/>
      <HeroSection/>
      {/* <Footer/> */}
    </>
  )
}

export default Homepage