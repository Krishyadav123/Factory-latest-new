import React, { Suspense } from 'react';
import Navbar from '../Components/Navbar/Navbar'; // Ensure you have this component
import Footer from '../Components/Footer/Footer'; // Ensure you have this component
import RoutesComponent from '../Routes/RoutesComponent'; // Import the routes component
import './Main.css';
import logo from "../assets/logo shreeinsul.png";
const Main = () => {
  return (
    
    <>
      <Navbar />
        <RoutesComponent /> 
      <Footer />
    </>
  );
};

export default Main;
