import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Import your CSS file for styling
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [autoSlide, setAutoSlide] = useState(true);

  useEffect(() => {
    if (autoSlide) {
      const timer = setInterval(() => {
        setSlideIndex((prevIndex) => prevIndex + 1);
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(timer);
    }
  }, [autoSlide]);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    setAutoSlide(false); // Stop auto sliding when manual navigation is used
    setSlideIndex(slideIndex + n);
  };

  const currentSlide = (n) => {
    setAutoSlide(false); // Stop auto sliding when manual navigation is used
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');
    let newIndex = n;

    if (n > slides.length) {
      newIndex = 1;
    }
    if (n < 1) {
      newIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[newIndex - 1].style.display = 'block';
    dots[newIndex - 1].className += ' active';

    setSlideIndex(newIndex);
  };

  return (
    <div className="slideshow-container">
      <div className="mySlides fade">
        <div className="numbertext">1 / 3</div>
        <img src="https://res.cloudinary.com/dcsentl2f/image/upload/q_auto,f_auto/v1729837212/shreeInsul/images/nlvfwkmlesamtjls0yp3.jpg" alt="Slide 1" style={{ width: '100%' }} />
        {/* <div className="text"><h1>WE ARE AN EXPERIENCED THERAML INSUL GROUP</h1></div> */}
      </div>

      <div className="mySlides fade">
        <div className="numbertext">2 / 3</div>
        <img src="https://res.cloudinary.com/dcsentl2f/image/upload/q_auto,f_auto/v1729849698/shreeInsul/images/ghmfmianlxxoytnrrgvu.jpg" alt="Slide 2" style={{ width: '100%' }} />
        {/* <div className="text"><h1>WANT TO MAKE PRODUCTS? WE HAVE THE ANSWERS</h1></div> */}
      </div>

      <div className="mySlides fade">
        <div className="numbertext">3 / 3</div>
        <img src="https://res.cloudinary.com/dcsentl2f/image/upload/c_scale,q_auto,f_auto/v1729837188/shreeInsul/images/xkqm6xeg9otf73s1zvcv.jpg" alt="Slide 3" style={{ width: '100%' }} />
        {/* <div className="text"><h1>WE ARE AN EXPERIENCED THERAML INSUL GROUP</h1></div> */}
      </div>

      <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
      <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>

      <div style={{ textAlign: 'center' }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
};

export default Slideshow;
