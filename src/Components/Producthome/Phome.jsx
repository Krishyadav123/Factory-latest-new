
import React, { useEffect } from 'react';
import './Phome.css'
import product01new from '../../assets/product01new.jpg'
import product02new from '../../assets/product02new.jpg'
import product03new from '../../assets/product03new.jpg'
import product04new from '../../assets/product04new.png'
import product05new from '../../assets/product05new.png'
import gsap from 'gsap/all';
import { useGSAP } from '@gsap/react';

const Phome = () => {
    useEffect(() => {
        const stack = document.querySelector(".stack");
        const cards = Array.from(stack.children)
          .reverse()
          .filter((child) => child.classList.contains("productCard"));
    
        cards.forEach((productCard) => stack.appendChild(productCard));
    
        function moveCard() {
          const lastCard = stack.lastElementChild;
          if (lastCard.classList.contains("productCard")) {
            lastCard.classList.add("swap");
    
            setTimeout(() => {
              lastCard.classList.remove("swap");
              stack.insertBefore(lastCard, stack.firstElementChild);
            }, 1200);
          }
        }
    
        let autoplayInterval = setInterval(moveCard, 4000);
    
        stack.addEventListener("click", function (e) {
          const productCard = e.target.closest(".productCard");
          if (productCard && productCard === stack.lastElementChild) {
            productCard.classList.add("swap");
    
            setTimeout(() => {
              productCard.classList.remove("swap");
              stack.insertBefore(productCard, stack.firstElementChild);
            }, 1200);
          }
        });
    
        return () => {
          clearInterval(autoplayInterval);
          stack.removeEventListener("click", moveCard);
        };
      
      }, []);


      useGSAP(
        () => {
            // gsap code here...
            gsap.from('.content', {
                opacity: 0,
                // scale: 2,
                x: -100,
                duration: 1,
                stagger: 0.5,
                // ease: 'power2.inOut'
            });
            gsap.from('.stack', {
                opacity: 0,
                // scale: 2,
                x: 100,
                duration: 1,
                stagger: 0.3,
                // ease: 'power2.inOut'
            });
        },);


    return (
        <main>
          <div className="content">
            <h1>WELCOM TO SHREEINSUL</h1>
            <p>
              Welcome to La Pâtisserie Belle, where every bite is a journey into the
              exquisite world of finely crafted pastries. Our patisserie is
              dedicated to bringing you the most delicious and beautifully designed
              haven for those who appreciate the finer things in life.
            </p>
            <button className="btn">Explore More</button>
          </div>
    
          <div className="stack">
            <div className="productCard">
              <img
              className='productImg'
                src={product01new}
                alt="" />
            </div>
            <div className="productCard">
              <img
              className='productImg'
                src={product02new}
                alt="" />
            </div>
            <div className="productCard">
              <img
              className='productImg'
                src={product03new}
                alt="" />
            </div>
            <div className="productCard">
              <img
              className='productImg'
                src={product04new}
                alt="" />
            </div>
            <div className="productCard">
              <img
              className='productImg'
               src={product05new}
                alt="" />
            </div>
            {/* <div className="productCard">
              <img
                src={product01new}
                alt="" />
            </div> */}
          </div>
        </main>
      );
}

export default Phome
