/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useContext, useCallback, useEffect } from 'react';
import './Product.css';
import { useNavigate } from 'react-router-dom';
import { FactoryContext } from '../../Context/Context';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Product = () => {
  const { setMenu } = useContext(FactoryContext);
  const navigate = useNavigate();

  const ProductList = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/dwvxuesrd/image/upload/v1727946804/shreeinsul/products/LRB%20Mattress/tdlzml0hablf6ncaxa7g.jpg',
      name: 'Shreeinsul Blanket',
      description: 'Shreeinsul Lightly Resin Bonded (LRB) Blankets offers an advanced solution for insulation needs, combining exceptional thermal efficiency with flexibility for different surface shapes and sizes. These matteresses are made  of molten stone wool fibres bonded by a suitable resin and then stitching with GI wire mesh. This material complies to ASTM C592 & IS 8183',
      link: '/products/lrb'
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/dwvxuesrd/image/upload/v1727947589/shreeinsul/products/Shreeinsul%20Sectional%20Pipe%20Covers/dx7xiiuf3dph8nu2ouyc.jpg',
      name: 'Shreeinsul Sectional Pipe Covers',
      description: 'Shreeinsul Sectional Pipe Covers (SPC) offers a quick solution for insulation needs, combining exceptional dimensional stability..',
      link: '/products/sectional-pipe-covers'
    },
    {
      id: 6,
      image: 'https://res.cloudinary.com/dwvxuesrd/image/upload/v1727947920/shreeinsul/products/Shreeinsul%20Loose%20Wool/cqidur47sqctnipotnbq.jpg',
      name: 'Shreeinsul Loose Wool',
      description: 'Loose wool insulation, also known as loose-fill wool insulation, is an eco-friendly insulation material made from natural rocks like basalt. Provides excellent thermal resistance, sound absorption, fire-resistant and ideal for filling cavity and un-even surface',
      link: '/products/loose-wool'
    },
  ]

  const handleProductClick = useCallback((ProductPage) => {
    setMenu('Products');
    navigate(`${ProductPage}`);
  }, [setMenu, navigate]);

  // GSAP Animation Optimization
 // GSAP Animations with useEffect
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
  },[]);

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
  },[]);

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
  },[]);

  const ProductCard = React.memo(({ product }) => (
    <>
    <div className="product-card-one" onClick={() => handleProductClick(product.link)}>
      <div className="product-card-img">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="product-card-text">
        <h2>{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <hr />
      </div>
    </div>
    </>
  ));

  return (
    <div className="product">
      <div className="product-main-container">
        <div className="product-title">
          <p>--LATEST--</p>
          <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
        <div className="product-cards">
          {ProductList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="product-btn">
          <button onClick={() => navigate('/products')}>See all Products</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
