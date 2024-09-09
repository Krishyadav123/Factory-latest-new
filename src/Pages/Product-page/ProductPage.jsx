import React from 'react'
import './ProductPage.css'
import midimg from '../../assets/mid-imae.jpg'
import { Link } from 'react-router-dom'
import CounterSection from '../../Components/Counter/CounterSection'
import product01new from '../../assets/product01new.jpg'
import product02new from '../../assets/product02new.jpg'
import product04new from '../../assets/product04new.png'
import product03new from '../../assets/product03new.jpg'
import product05new from '../../assets/product05new.png'
import product06new from '../../assets/product06new.jpg'
import product07new from '../../assets/product07new.png'
import product08new from '../../assets/product08new.jpg'
import product09new from '../../assets/product09new.jpg'
import product10new from '../../assets/product10new.jpg'
import Phome from '../../Components/Producthome/Phome'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Slider from '../../Components/Slider/Slider'

const ProductPage = () => {

  useGSAP(
    () => {
        // gsap code here...
        gsap.from('.product-title p , .product-title h1', {
            scrollTrigger: {
                trigger: '.product-title',
                start: '20% bottom',
                // markers: true
            },
            opacity: 0,
            // scale: 2,
            y:-30,
            duration: 1,
            stagger: 0.5,
            // ease: 'power2.inOut'
        });
        gsap.from('.product-card-one', {
            scrollTrigger: {
                trigger: '.product',
                start: '10% bottom',
                // markers: true,
            },
            opacity: 0,
            scale: 0.8,
            // y: -60,
            duration: 1,
            stagger: 0.3,
            // ease: 'power2.inOut'
        });
    },);

  return (
    <>
    <Phome />
    <div className="product">
      <div className="product-main-container">

        <div className="product-title">
          <p>--LATEST--</p>
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
        <div className="product-cards">
          <Link to='/products/1'>
            <div className="product-card-one">
              <div className="product-card-img">
                <img src={product01new} alt="" />
              </div>
              {/* <hr /> */}
              <div className="product-card-text">
                <h2>STONE WOOL BLANKET (LRB MATTRESS)</h2>
                <p>Shreeinsul Stone Wool Blankets are designed to meet rigorous industry standards, ensuring superior performance across various...</p>
                <button className='card-btn'>Click</button>
                <hr />
              </div>
            </div>
          </Link>
          <Link to='/products/2'>
            <div className="product-card-one">
              <div className="product-card-img">
                <img src={product02new} alt="" />
              </div>
              <div className="product-card-text">
                <h2>STONE WOOL RESIN BONDED BOARDS OR SLABS</h2>
                <p>Discover the superior performance of Shreeinsul Stone Wool Resin Bonded Boards! Ideal for thermal insulation, acoustic treatment, and fire protection...</p>
                <hr />
              </div>
            </div>
          </Link>
          <Link to='/products/3'>
            <div className="product-card-one">
              <div className="product-card-img">
                <img src={product03new} alt="" />
              </div>
              <div className="product-card-text">
                <h2>
                STONE WOOL SECTIONAL PIPE INSULATION.</h2>
                <p>Shreeinsul Stone Wool Sectional Pipe Insulation is designed for effective thermal and acoustic insulation of pipes in various applications... </p>
                <hr />
              </div>
            </div>
          </Link>
          <Link to='/products/4'>
            <div className="product-card-one">
              <div className="product-card-img">
                <img src={product04new} alt="" />
              </div>
              <div className="product-card-text">
                <h2>Shreeinsul Ceramic Fiber Cloth And Tape.</h2>
                <p>Shreeinsul Ceramic Fiber Tape is woven from ceramic fiber yarn, reinforced by a core of glass filament or stainless steel wire for high strength retention...</p>
                <hr />
              </div>
            </div>
          </Link>
          <Link to='/products/5'>
            <div className="product-card-one">
              <div className="product-card-img">
                <img src={product05new} alt="" />
              </div>
              <div className="product-card-text">
                <h2>Shreeinsul CERAMIC FIBER TEXTILES.</h2>
                <p>Shreeinsul Ceramic Fiber Fabrics are manufactured using ceramic fiber yarn reinforced with fiberglass filament or stainless steel wire...</p>
                <hr />
              </div>
            </div>
          </Link>
          <Link to='/products/6'>
            <div className="product-card-one">
              <div className="product-card-img">
                <img src={midimg} alt="" />
              </div>
              <div className="product-card-text">
                <h2>Shreeinsul PUF/PIR Products.</h2>
                <p>Polyisocyanurate (PIR) foam slabs and pipe sections are suitable for use between -200°C to +150°C. It has low thermal conductivity value of maximum 0.021 W/mk at 10°C...</p>
                <hr />
              </div>
            </div>
          </Link>
          {/* <Link to='/products/7'>
            <div className="product-card-one">
              <div className="product-card-img">
                <img src={midimg} alt="" />
              </div>
              <div className="product-card-text">
                <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eos, repudiandae fugiat eum repudiandae.</p>
                <hr />
              </div>
            </div>
          </Link> */}

        </div>
      </div>
        <div className="products-page-countdown">
          {/* <CounterSection /> */}
          <Slider/>
        </div>
    </div>
    </>
  )
}

export default ProductPage