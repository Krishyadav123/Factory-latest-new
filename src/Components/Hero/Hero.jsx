import React from 'react';
import './Hero.css';
import hero from '../../assets/hero.mp4';
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
 
    
  // <-- automatically reverted
  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <video className="hero-video" src={hero} autoPlay loop muted>
        
      </video>
      <div className="hero-main">
        {/* <img src={backround} alt="" /> */}
        
        <h1 > Welcome To The World <br /> Of Insulation </h1>
        <p>
        WE ARE EXPERIENCED THERAMLINSULATION GROUP
        </p>
        <button id='btn-animation'>Explore More</button>

      </div>
    </div>
  );
}

export default Hero;
