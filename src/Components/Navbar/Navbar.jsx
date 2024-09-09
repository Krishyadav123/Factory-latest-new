import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";
import logo from '../../assets/logo shreeinsul.png';
import { FactoryContext } from '../../Context/Context';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { IoMenu } from "react-icons/io5";
import { HiOutlineXMark } from "react-icons/hi2";


const Navbar = () => {
  const { menu, setMenu } = useContext(FactoryContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLinkClick = (item) => {
    setMenu(item);
    if (window.innerWidth <= 768) {  // Close menu after clicking a link in small devices
      setMenuOpen(false);
    }
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

  useGSAP(() => {
    const tl = gsap.timeline();

    // Animation for the logo
    tl.from('.navbar img', {
      y: -30,
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      onComplete: () => {
        gsap.set('.navbar img', { opacity: 1 });
      }
    });

    // Animation for navbar links
    tl.from('.navbar ul li a', {
      y: -30,
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      stagger: 0.2
    });

    // Animation for the contact button
    tl.from('.navbar-right button', {
      y: -30,
      opacity: 0,
      duration: 0.5
    });
  });

  return (
    <div className={`navbar ${isScrolled ? 'glassy' : ''}`}>
      <Link to='/' className='logo'><img src={logo} alt="Logo" /></Link>
      
      {/* Hamburger / X menu */}
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        {/* Conditional rendering for hamburger or X mark */}
        {menuOpen ? (
          <div className='menu-icon'><HiOutlineXMark /></div> // This is the X mark
        ) : (
          <>
            <div className='menu-icon'><IoMenu /></div>
          </>
        )}
      </div>

      {/* Navbar links */}
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink exact to='/' activeClassName="active-nav"  onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/products' activeClassName="active-nav"  onClick={() => setMenuOpen(false)}>
            Products
          </NavLink>
        </li>
        <li>
          <a href='https://shreeengineers.in/services.php' target="_blank" rel="noopener noreferrer">
            Services
          </a>
        </li>
        <li>
          <NavLink to='/about' activeClassName="active-nav"  onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/gallery' activeClassName="active-nav"  onClick={() => setMenuOpen(false)}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to='/Achievement' activeClassName="active-nav"  onClick={() => setMenuOpen(false)}>
            Achievement
          </NavLink>
        </li>
        <li className='only-contact'>
          <NavLink to='/contact' activeClassName="active-nav"  onClick={() => setMenuOpen(false)}>
            Contact us
          </NavLink>
        </li>
      </ul>

      {/* Contact button on the right side */}
      <div className="navbar-right">
        <Link to='/contact'>
          <button id='nav-right-btn' className='nav-right-btn'>Contact us</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
