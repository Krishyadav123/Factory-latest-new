import React from 'react'
import './Gallary.css'
import mid from '../../assets/mid-imae.jpg'
import CounterSection from '../Counter/CounterSection'
import GalleryImg from '../GalleryImg/GalleryImg'
import Slideshow from '../Slideshow/Slideshow'


const Gallary = () => {
  return (
    <>
    <Slideshow 
    image1={"https://res.cloudinary.com/dcsentl2f/image/upload/q_auto,f_auto/v1729837212/shreeInsul/images/nlvfwkmlesamtjls0yp3.jpg"} 
    image2={"https://res.cloudinary.com/dcsentl2f/image/upload/q_auto,f_auto/v1729849698/shreeInsul/images/ghmfmianlxxoytnrrgvu.jpg"}

    image3={"https://res.cloudinary.com/dcsentl2f/image/upload/c_scale,q_auto,f_auto/v1729837188/shreeInsul/images/xkqm6xeg9otf73s1zvcv.jpg"}
    
    />
    <GalleryImg/>
    <br />

    </>
  )
}

export default Gallary