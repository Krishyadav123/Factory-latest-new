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

  // useGSAP(
  //   () => {
  //     // gsap code here...
  //     gsap.from('.slideshow-container', {
  //       opacity: 0,
  //       scale: 0,
  //       // y: -50,
  //       duration: 1,
  //       stagger: 0.5,
  //       // ease: 'power2.inOut'
  //     });
  //   },);

  return (
    <div className="slideshow-container">
      <div className="mySlides fade">
        <div className="numbertext">1 / 3</div>
        <img src="https://www.deskera.com/blog/content/images/2022/03/Untitled-design--22-.png" alt="Slide 1" style={{ width: '100%' }} />
        {/* <div className="text"><h1>WE ARE AN EXPERIENCED THERAML INSUL GROUP</h1></div> */}
      </div>

      <div className="mySlides fade">
        <div className="numbertext">2 / 3</div>
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*k1JMbEHOp81h5B1w05kf0Q.jpeg" alt="Slide 2" style={{ width: '100%' }} />
        {/* <div className="text"><h1>WANT TO MAKE PRODUCTS? WE HAVE THE ANSWERS</h1></div> */}
      </div>

      <div className="mySlides fade">
        <div className="numbertext">3 / 3</div>
        <img src="https://i.ytimg.com/vi/9EdCSlGdQAY/maxresdefault.jpg" alt="Slide 3" style={{ width: '100%' }} />
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
