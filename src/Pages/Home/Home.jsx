import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import About from '../../Components/About/About'
import Info from '../../Components/Why-info/Info'
import Service from '../../Components/Service-section/Service'
import Product from '../../Components/Products/Product'
import News from '../../Components/News/News'
import ContactPage from '../Contact-page/ContactPage'
import CounterSection from '../../Components/Counter/CounterSection'
import Contact from '../../Components/Contact/Contact'
import Slider from '../../Components/Slider/Slider'



const Home = () => {
  return (
    <div>
        <Hero/>
        <News/>
        <Product/>
        <Slider/>
        {/* <CounterSection/> */}
        <Info/>
        <About/>
        {/* <Slider/> */}
        <Service/>
        {/* <ContactPage /> */}
        <Contact/>
        {/* <AboutPage /> */}
        {/* <SeparateProduct /> */}
        {/* <Gallary/> */}
    </div>
  )
}

export default Home