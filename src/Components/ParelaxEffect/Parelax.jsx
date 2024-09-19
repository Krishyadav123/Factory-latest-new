import React from 'react'
import './Parelax.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Parelax = ({ heading, backgroundImage }) => {
  const parelaxStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };


 useGSAP(
        () => {
            // gsap code here...
            gsap.from('.parelax', {
                // scrollTrigger: {
                //     trigger: '.service-container',
                //     start: '20% bottom',
                //     markers: true
                // },
                opacity: 0,
                // scale: 2,
                // y: -500,
                duration: 1,
                // scale: 0,
                // stagger: 0.5,
                // ease: 'power2.inOut'
            });
        },);

  return (
    <div className="parelax" style={parelaxStyle}>
      <div className='main-parelax'>
        <h1>{heading}</h1>
      </div>
    </div>
  );
}

export default Parelax;
