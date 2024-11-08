import React from 'react';
import './Parelax.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

// eslint-disable-next-line react/prop-types
const Parelax = ({ heading, backgroundVideo }) => {
  useGSAP(() => {
    gsap.from('.parelax', {
      opacity: 0,
      duration: 1,
    });
  });

  return (
    <div className="parelax">
      {backgroundVideo && (
        <video
          className="parelax__video"
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      )}

      <div className="main-parelax">
        <h1>{heading}</h1>
      </div>
    </div>
  );
};

export default Parelax;
