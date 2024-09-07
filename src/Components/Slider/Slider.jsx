import React from 'react'
import './Slider.css'
import Marquee from 'react-fast-marquee'
import loremIcon from '../../assets/lo1.png'

const Slider = () => {
  return (
    <div className='slider'>
      <div className="slider-main">
      <div className="slider-title">
        <center><p>Trusted By Both Industry Giants & Startups Alike</p></center>
      </div>
      <div className="mar">
      <Marquee>
        <img src={loremIcon} alt="" />
        {/* <img src={first} alt="" /> */}
        <img src={loremIcon} alt="" />
        <img src={loremIcon} alt="" />
        <img src={loremIcon} alt="" />
        <img src={loremIcon} alt="" />
        <img src={loremIcon} alt="" />
        <img src={loremIcon} alt="" />
        <img src={loremIcon} alt="" />
        <img src={loremIcon} alt="" />
        <img src={loremIcon} alt="" />
        <img src={loremIcon} alt="" />
        <img src={loremIcon} alt="" />
        
      </Marquee>
      </div>
      </div>
    </div>

  )
}

export default Slider