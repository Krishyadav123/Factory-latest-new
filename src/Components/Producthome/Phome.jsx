
import { useEffect } from 'react';
import './Phome.css'
// import Lrb from '../../assets/ProductAnimationImages/LRB.jpg'
// import Pipe from '../../assets/ProductAnimationImages/Pipe.jpg'
// import Bords from '../../assets/ProductAnimationImages/Bords.jpg'
// import Rope from '../../assets/ProductAnimationImages/Rope.avif'
// import Yarn from '../../assets/ProductAnimationImages/yarn.jpg'
import gsap from 'gsap/all';
import { useGSAP } from '@gsap/react';

const Phome = () => {
  useEffect(() => {
    const stack = document.querySelector(".stack");
    const cards = Array.from(stack.children)
      .reverse()
      .filter((child) => child.classList.contains("productCard"));

    cards.forEach((productCard) => stack.appendChild(productCard));

    // Define a single variable for animation time
    const animationTime = 1200; // Animation time in milliseconds
    const autoplayIntervalTime = 3000; // Autoplay interval time in milliseconds

    function moveCard() {
      const lastCard = stack.lastElementChild;
      if (lastCard.classList.contains("productCard")) {
        lastCard.classList.add("swap");

        setTimeout(() => {
          lastCard.classList.remove("swap");
          stack.insertBefore(lastCard, stack.firstElementChild);
        }, animationTime);
      }
    }

    let autoplayInterval = setInterval(moveCard, autoplayIntervalTime);

    stack.addEventListener("click", function (e) {
      const productCard = e.target.closest(".productCard");
      if (productCard && productCard === stack.lastElementChild) {
        productCard.classList.add("swap");

        setTimeout(() => {
          productCard.classList.remove("swap");
          stack.insertBefore(productCard, stack.firstElementChild);
        }, animationTime);
      }
    });

    return () => {
      clearInterval(autoplayInterval);
      stack.removeEventListener("click", moveCard);
    };

  }, []);

  // const ProductImages = [
  //   {
  //     id: 1,
  //     name: "Lrb",
  //     image: "https://res.cloudinary.com/dwvxuesrd/image/upload/w_400,h_300,c_scale,q_auto,f_auto/v1727946804/shreeinsul/products/LRB%20Mattress/tdlzml0hablf6ncaxa7g.jpg"
  //   },
  //   {
  //     id: 2,
  //     name: "PipeCover",
  //     image: "https://res.cloudinary.com/dwvxuesrd/image/upload/w_400,h_300,c_scale,q_auto,f_auto/v1727947589/shreeinsul/products/Shreeinsul%20Sectional%20Pipe%20Covers/dx7xiiuf3dph8nu2ouyc.jpg"
  //   },
  //   {
  //     id: 3,
  //     name: "Slab",
  //     image: "https://res.cloudinary.com/dwvxuesrd/image/upload/w_400,h_300,c_scale,q_auto,f_auto/v1727947390/shreeinsul/products/Shreeinsul%20Boards/euue7goxjeddg4sv1zdu.jpg"
  //   },
  //   {
  //     id: 4,
  //     name: "BraidedRopes",
  //     image: "https://res.cloudinary.com/dwvxuesrd/image/upload/w_400,h_300,c_scale,q_auto,f_auto/v1727949297/shreeinsul/products/Shreeinsul%20Ceramic%20Yarn%20Braided%20Rope/tltrhylic1333ooex8hw.avif"
  //   },
  //   {
  //     id: 5,
  //     name: "yarn",
  //     image: "https://res.cloudinary.com/dwvxuesrd/image/upload/w_400,h_300,c_scale,q_auto,f_auto/v1727938255/shreeinsul/products/Ceramic%20Fiber%20Yarn/yabr5zcpyys4kfh7lllm.jpg"
  //   },

  // ]



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
            At Shreeinsul, we pride ourselves on delivering excellence through our diverse range of high-quality products. With a commitment to innovation and precision, we cater to a variety of industries, ensuring every solution meets the highest standards of performance and reliability. Explore our core product offerings below:
            </p>
            <button className="btn">Explore More</button>
          </div>
    
          <div className="stack">
            <div className="productCard">
              <img
              className='productImg'
                src={"https://res.cloudinary.com/dwvxuesrd/image/upload/w_400,h_300,c_scale,q_auto,f_auto/v1727946804/shreeinsul/products/LRB%20Mattress/tdlzml0hablf6ncaxa7g.jpg"}
                alt="" 
                loading='lazy'/>
            </div>
            <div className="productCard">
              <img
              className='productImg'
                src={"https://res.cloudinary.com/dwvxuesrd/image/upload/w_400,h_300,c_scale,q_auto,f_auto/v1727947589/shreeinsul/products/Shreeinsul%20Sectional%20Pipe%20Covers/dx7xiiuf3dph8nu2ouyc.jpg"}
                alt="" 
                loading='lazy'/>
            </div>
            <div className="productCard">
              <img
              className='productImg'
                src={"https://res.cloudinary.com/dwvxuesrd/image/upload/w_400,h_300,c_scale,q_auto,f_auto/v1727947390/shreeinsul/products/Shreeinsul%20Boards/euue7goxjeddg4sv1zdu.jpg"}
                alt="" 
                loading='lazy'/>
            </div>
            <div className="productCard">
              <img
              className='productImg'
                src={"https://res.cloudinary.com/dwvxuesrd/image/upload/w_400,h_300,c_scale,q_auto,f_auto/v1727949297/shreeinsul/products/Shreeinsul%20Ceramic%20Yarn%20Braided%20Rope/tltrhylic1333ooex8hw.avif"}
                alt="" 
                loading='lazy'/>
            </div>
            <div className="productCard">
              <img
              className='productImg'
               src={"https://res.cloudinary.com/dwvxuesrd/image/upload/w_400,h_300,c_scale,q_auto,f_auto/v1727938255/shreeinsul/products/Ceramic%20Fiber%20Yarn/yabr5zcpyys4kfh7lllm.jpg"}
                alt="" 
                loading='lazy'/>
            </div> 

            {/* {
              ProductImages.map((item, key) => {
                return (
                  <div className="productCard" key={key}>
                    <img
                    className='productImg'
                      src={item.image}
                      alt="" />
                  </div>
                )
              })
            } */}
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
