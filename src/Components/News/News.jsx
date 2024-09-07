import React from 'react';
import './News.css'; // Import the CSS file here
import image01 from '../../assets/AboutPageimg/image01.jpg'
import image02 from '../../assets/AboutPageimg/image02.jpg'
import image03 from '../../assets/AboutPageimg/image03.jpg'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger);


const News = () => {

  // const t2 = gsap.timeline()

  useGSAP(
    () => {
        // gsap code here...
        gsap.from('.news h1',{
          scrollTrigger: {
            trigger: '.news h1',
            start: '20% bottom',
            markers: true
          },
          opacity: 0,
          // scale: 2,
          y: 100,
          duration: 1,
          ease: 'power2.inOut'
      });
    },);
  useGSAP(
    () => {
        // gsap code here...
        gsap.from('.news .card',{
          scrollTrigger: {
            trigger: '.news-artical',
            start: '15% bottom',
            markers: true
          },
          opacity: 0,
          // y: 100,
          duration: 1,
          stagger: 0.5,
          // ease: 'power2.inOut'
      });
    },);


  return (
    <div class="news">
     <div><h1>NEWS</h1></div>
<div className='news-artical'>  
    <article class="card">
  <img
    class="card__background"
    src={image01}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div class="card__content | flow">
    <div class="card__content--container | flow">
      <h2 class="card__title">Colombia</h2>
      <p class="card__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
        labore laudantium deserunt fugiat numquam.
      </p>
    </div>
    <button class="card__button">Read more</button>
  </div>
</article>
    <article class="card">
  <img
    class="card__background"
    src={image02}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div class="card__content | flow">
    <div class="card__content--container | flow">
      <h2 class="card__title">Colombia</h2>
      <p class="card__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
        labore laudantium deserunt fugiat numquam.
      </p>
    </div>
    <button class="card__button">Read more</button>
  </div>
</article>
    <article class="card">
  <img
    class="card__background"
    src={image03}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div class="card__content | flow">
    <div class="card__content--container | flow">
      <h2 class="card__title">Colombia</h2>
      <p class="card__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
        labore laudantium deserunt fugiat numquam.
      </p>
    </div>
    <button class="card__button">Read more</button>
  </div>
</article></div>
    </div>
  );
};

export default News;