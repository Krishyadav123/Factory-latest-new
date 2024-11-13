import React from 'react';
import './ContactPage.css'; // Make sure to import your CSS file
import Parelax from '../../Components/ParelaxEffect/Parelax';
import image03 from '../../assets/AboutPageimg/image03.jpg'
import MapComponent from '../../Components/MyMapComponent/MapComponent';
import Contact from '../../Components/Contact/Contact';
// import map from '../../assets/map.png'

let parelaxVideo = "https://res.cloudinary.com/dcsentl2f/video/upload/v1731482095/shreeInsul/contact%20us/kzzb5mv3eg4pscvcgxta.mp4"
const ContactPage = () => {
    return (
        <>

            <div>
                <Parelax heading={"Contact Us"} backgroundVideo={parelaxVideo} />
            </div>
            <div>
               <MapComponent />                
            </div>
            <div>
                <Contact />
            </div>

        </>
    );
}

export default ContactPage;