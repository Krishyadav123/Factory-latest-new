import React from 'react';
import './ContactPage.css'; // Make sure to import your CSS file
import Parelax from '../../Components/ParelaxEffect/Parelax';
import image03 from '../../assets/AboutPageimg/image03.jpg'
import MapComponent from '../../Components/MyMapComponent/MapComponent';
import Contact from '../../Components/Contact/Contact';
// import map from '../../assets/map.png'
const ContactPage = () => {
    return (
        <>

            <div>
                <Parelax heading={"Contact Us"} backgroundImage={image03} />
            </div>
            <div className='map'>
                <div className='map-1'>
                    <MapComponent />
                </div>
                
            </div>
            <div>
                <Contact />
            </div>

        </>
    );
}

export default ContactPage;