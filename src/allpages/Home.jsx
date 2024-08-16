import React from 'react'
import NavScrollExample from './Navbar'
import Footer from './Footer'
import Carousal from './Carousal'
import Product from './Product'
import Slider from './Slider'

const Home = () => {
  return (
    <>
        <NavScrollExample/>
        <Carousal/>
        <Slider/>
        <Product/>
        <Footer/>
        
    </>
  )
}

export default Home