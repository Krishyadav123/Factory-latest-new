/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useContext, useCallback, useEffect } from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";
import { FactoryContext } from "../../Context/Context";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LazyLoad from "react-lazyload";

const Product = () => {
  const { setMenu } = useContext(FactoryContext);
  const navigate = useNavigate();

  const ProductList = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dcsentl2f/image/upload/w_400,h_400,c_scale,q_auto,f_auto/v1731049681/shreeInsul/PNG/b5f6ygv1nrhrpf8rzvyj.png",
      name: "Shreeinsul Blanket",
      description:
        "Shreeinsul Lightly Resin Bonded (LRB) Blanket offers an advanced solution for insulation needs, combining exceptional thermal efficiency with flexibility for different surface shapes and sizes. These matteresses are made  of molten stone wool fibres bonded by a suitable resin and then stitching with GI wire mesh. This material complies to ASTM C592 & IS 8183",
      link: "/products/lrb",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dcsentl2f/image/upload/w_500,h_400,c_scale,q_auto,f_auto/v1731049681/shreeInsul/PNG/ovpbmzfl02pd6uahncex.png",
      name: "Shreeinsul Sectional Pipe Covers",
      description:
        "Shreeinsul Sectional Pipe Covers (SPC) offers a quick solution for insulation needs, combining exceptional dimensional stability with durability and tuffness. These SPCs are made from long non-combustible rock fibres bonded with thermosetting resin binders. The SPC's are available plain or with FSK facings. This material conforms to ASTM C547 & IS 9842",
      link: "/products/sectional-pipe-covers",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dcsentl2f/image/upload/w_400,h_500,c_scale,q_auto,f_auto/v1731049685/shreeInsul/PNG/t2dl7xb26qgtlxnxckuo.png",
      name: "Shreeinsul Loose Wool",
      description:
        "Loose wool insulation, also known as loose-fill wool insulation, is an eco-friendly insulation material made from natural basalt rock. Provides excellent thermal resistance, sound absorption, fire-resistant and ideal for filling cavity and un-even surface",
      link: "/products/loose-wool",
    },
  ];

  const handleProductClick = useCallback(
    (ProductPage) => {
      setMenu("Products");
      navigate(`${ProductPage}`);
    },
    [setMenu, navigate]
  );


  useGSAP(
    () => {
      // gsap code here...
      gsap.from('.product-title p, .product-title h1', {
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
    }, []);

  useGSAP(
    () => {
      // gsap code here...
      gsap.from('.product-card-one', {
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
    }, []);

  useGSAP(
    () => {
      // gsap code here...
      gsap.from('.product-btn', {
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
    }, []);

  const ProductCard = React.memo(({ product }) => (
    <>
      <div
        className="product-card-one"
        onClick={() => handleProductClick(product.link)}
      >
        <div className="product-card-img">
          <LazyLoad height={200} offset={100} once>
            <img src={product.image} alt={product.name} loading="lazy" />
          </LazyLoad>
        </div>
        <div className="product-card-text">
          <h2>{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <hr className="product-hr"/>
        </div>
      </div>
    </>
  ));

  return (
    <div className="product">
      <div className="product-main-container">
        <div className="product-title">
          
          <h1 className="category-heading">Products</h1>
        </div>
        <div className="product-cards">
          {ProductList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="product-btn">
          <button onClick={() => navigate("/products")}>
            See all Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
