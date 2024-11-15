import React from 'react';
import './Hero.css';
import backround from '../../assets/backround.png';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';



const Hero = () => {

  const t2 = gsap.timeline()

  useGSAP(
    () => {
        // gsap code here...
        t2.from('.hero-main h1, .hero-main p, .hero-main button',{
         x: -30,
         opacity: 0,
         duration: 0.5,
         stagger: 0.5,
         delay: 2
      }); // <-- automatically reverted
    },);

    const heroVideo = "https://res.cloudinary.com/dwvxuesrd/video/upload/v1728118257/shreeinsul/Hero%20Header%20Video/o284uxy4ixw58lhegukl.mp4"

    const backgroundImage = "https://res.cloudinary.com/dwvxuesrd/image/upload/w_400,h_300,c_scale,q_auto,f_auto/v1728118933/shreeinsul/Hero%20Header%20Video/ytajb6kr7ayjhzgtdhsj.jpg"
 
    
  // <-- automatically reverted
  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <video className="hero-video" src={heroVideo} autoPlay loop muted poster={backgroundImage}>
        
      </video>
      <div className="hero-main">
        {/* <img src={backround} alt="" /> */}
        
        <h1 > Welcome To The World <br /> Of Insulation </h1>
        <p className='hero-subheading'>
        WE ARE PROMINENT THERMAL INSULATION GROUP
        </p>

        <p className='hero-para'>Shreeinsul, is a prominent thermal insulation group having in house manufacturing facilities of both hot and cold insulation materials and more than 20 years of expertise serving diverse industrial segments. Our group is renowned for its expertise and commitment to excellence. Our team of highly qualified and experienced engineers is dedicated to continuous innovation and the pursuit of exceptional opportunities.</p>
        {/* <button id='btn-animation'>Explore More</button> */}

      </div>
    </div>
  );
}

export default Hero;
