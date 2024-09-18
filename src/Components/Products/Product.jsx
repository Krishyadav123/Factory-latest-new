import React, { useContext } from 'react'
import "./Product.css"
import midimg from '../../assets/mid-imae.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { FactoryContext } from '../../Context/Context'
// import image01 from '../../assets/image01.jpg'
import product01 from '../../assets/Product01.jpg'
import product01new from '../../assets/product01new.jpg'
import product02new from '../../assets/product02new.jpg'
import product03new from '../../assets/product03new.jpg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const Product = () => {

  useGSAP(
    () => {
        // gsap code here...
        gsap.from('.product-title p, .product-title h1',{
          scrollTrigger: {
            trigger: '.product-title p',
            start: '20% bottom',
            // markers: true
          },
          opacity: 0,
          // scale: 2,  
          y: -30,
          duration: 1,
          stagger: 0.2,
          // ease: 'power2.inOut'
      });
    },);

  useGSAP(
    () => {
        // gsap code here...
        gsap.from('.product-card-one',{
          scrollTrigger: {
            trigger: '.product-card-one',
            start: '20% bottom',
            // markers: true
          },
          opacity: 0,
          scale: 0.8,  
          // y: -30,
          duration: 1,
          stagger: 0.3,
          // ease: 'power2.inOut'
      });
    },);

  useGSAP(
    () => {
        // gsap code here...
        gsap.from('.product-btn',{
          scrollTrigger: {
            trigger: '.product-btn',
            start: '20% bottom',
            // markers: true
          },
          opacity: 0,
          scale: 0,  
          // x: -50,
          duration: 1,
          // ease: 'power2.inOut'
      });
    },);



  const { menu, setMenu } = useContext(FactoryContext)
  const navigate = useNavigate()

  const handelClick = () => {
    setMenu("Products");
    navigate("/products")
    window.scrollTo({ top: 0 });
  }

  const handleProductClick = (productNumber) => {
    setMenu("Products");
    navigate(`/products/${productNumber}`)
    // window.scrollTo({ top: 0 });
  }
  return (
    <div className="product">
      <div className="product-main-container">
        <div className="product-title">
          <p>--LATEST--</p>
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
        <div className="product-cards">
            <div className="product-card-one" onClick={() => handleProductClick(1)}>
              <div className="product-card-img">
                <img src={product01} alt="" />
              </div>
              <div className="product-card-text">
                <h2>
                STONE WOOL SECTIONAL PIPE INSULATION.</h2>
                <p>Shreeinsul Stone Wool Sectional Pipe Insulation is designed for effective thermal and acoustic insulation of pipes in various applications... </p>
                <hr />
              </div>
            </div>
            <div className="product-card-one" onClick={() => handleProductClick(3)}>
              <div className="product-card-img">
                <img src={product03new} alt="" />
              </div>
              <div className="product-card-text">
                <h2>STONE WOOL RESIN BONDED BOARDS OR SLABS</h2>
                <p>Discover the superior performance of Shreeinsul Stone Wool Resin Bonded Boards! Ideal for thermal insulation, acoustic treatment, and fire protection...</p>
                <hr />
              </div>
            </div>
            <div className="product-card-one" onClick={() => handleProductClick(2)}>
              <div className="product-card-img">
                <img src={product02new} alt="" />
              </div>
              {/* <hr /> */}
              <div className="product-card-text">
                <h2>STONE WOOL BLANKET (LRB MATTRESS)</h2>
                <p>Shreeinsul Stone Wool Blankets are designed to meet rigorous industry standards, ensuring superior performance across various...</p>
                <hr />
              </div>
            </div>
        </div>
        <div className="product-btn">
          <button onClick={handelClick}>See all Products</button>
        </div>
      </div>
    </div>
  )
}

export default Product