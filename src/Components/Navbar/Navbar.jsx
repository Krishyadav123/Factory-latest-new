import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from '../../assets/logo shreeinsul.png';
import { NavItems } from './NavItems';
import { FactoryContext } from '../../Context/Context';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';


const Navbar = () => {
  const { menu, setMenu } = useContext(FactoryContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLinkClick = (item) => {
    setMenu(item);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const tl = gsap.timeline()

  useGSAP(
    () => {
        // gsap code here...
        tl.from('.navbar img',{
         y: -30,
         opacity: 0,
         duration: 0.5,
         delay: 0.5
        
      }); // <-- automatically reverted
    },);

  useGSAP(
    () => {
        // gsap code here...
        tl.from('.navbar ul li a',{
         y: -30,
         opacity: 0,
         duration: 0.5,
         delay: 0.5,
         stagger: 0.2
        
      }); // <-- automatically reverted
    },);

  useGSAP(
    () => {
        // gsap code here...
        tl.from('.navbar-right button',{
         y: -30,
         opacity: 0,
         duration: 0.5,
        //  delay: 0.5,
        //  stagger: 0.2
        
      }); // <-- automatically reverted
    },);



  return (
    <div className={`navbar ${isScrolled ? 'glassy' : ''}`}>
      <Link to='/' className='logo'><img src={logo} alt="Logo" /></Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        {NavItems &&
          NavItems.map((item, index) => (
            <li key={index}>
              {item.target ? (
                <a 
                  href={item.to} 
                  target={item.target} 
                  rel="noopener noreferrer" 
                  onClick={() => handleLinkClick(item.label)} 
                  className={menu === item.label ? "active" : ""}
                >
                  {item.label}
                </a>
              ) : (
                <Link 
                  to={item.to} 
                  onClick={() => handleLinkClick(item.label)} 
                  className={menu === item.label ? "active" : ""}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))
        }
      </ul>
      <div className="navbar-right">
      <Link to='/contact'><button className='nav-right-btn'>Contact us</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
