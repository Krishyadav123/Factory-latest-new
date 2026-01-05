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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.navbar img', { y: -30, opacity: 0, duration: 0.5, delay: 0.5 });
    tl.from('.navbar ul li a', { y: -30, opacity: 0, duration: 0.5, delay: 0.5, stagger: 0.2 });
    tl.from('.navbar-right button', { y: -30, opacity: 0, duration: 0.5 });
  });

  return (
    <div className={`navbar ${isScrolled ? 'glassy' : ''}`}>
      <Link to='/' className='logo'><img src={logo} alt="Logo" /></Link>

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <div className='menu-icon'><HiOutlineXMark /></div>
        ) : (
          <div className='menu-icon'><IoMenu /></div>
        )}
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink exact to='/' activeClassName="active-nav" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/products' activeClassName="active-nav" onClick={() => setMenuOpen(false)}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to='/services' activeClassName="active-nav" onClick={() => setMenuOpen(false)}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' activeClassName="active-nav" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/gallery' activeClassName="active-nav" onClick={() => setMenuOpen(false)}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to='/achievement' activeClassName="active-nav" onClick={() => setMenuOpen(false)}>
            Achievement
          </NavLink>
        </li>
        <li>
          <NavLink to='/investor-relations' activeClassName="active-nav" onClick={() => setMenuOpen(false)}>
            Investor Relations
          </NavLink>
        </li>
        <li className='only-contact'>
          <NavLink to='/contact' activeClassName="active-nav" onClick={() => setMenuOpen(false)}>
            Contact us
          </NavLink>
        </li>
      </ul>

      <div className="navbar-right">
        <Link to='/contact'>
          <button id='nav-right-btn' className='nav-right-btn'>Contact us</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
