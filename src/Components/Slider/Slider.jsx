import React from 'react';
import './Slider.css';
import Marquee from 'react-fast-marquee';

// Importing all logos
import BHEL from '../../assets/logos/BHEL.png';
import BNR from '../../assets/logos/BNR.png';
import BPCL from '../../assets/logos/BPCL.png';
import Cipla from '../../assets/logos/Cipla.png';
import DSS from '../../assets/logos/DSS.png';
import Felix from '../../assets/logos/Felix.png';
import Gail from '../../assets/logos/Gail.png';
import Glenmark from '../../assets/logos/Glenmark.png';
import HP from '../../assets/logos/HP.png';
import HMEL from '../../assets/logos/HMEL.png';
import IGL from '../../assets/logos/igl.png';
import IndianOil from '../../assets/logos/IndianOil.png';
import IOL from '../../assets/logos/IOL.png';
import Jindal from '../../assets/logos/Jindal.png';
import Jubilant from '../../assets/logos/jubilant.png';
import LNT from '../../assets/logos/l&t.jpg';
import Lupin from '../../assets/logos/LUPIN.png';
import NFL from '../../assets/logos/nfl.png';
import NPCIL from '../../assets/logos/NPCIL.png';
import NTPC from '../../assets/logos/NTPC.png';
import Petrofact from '../../assets/logos/Petrofac.png';
import SterlingWilson from '../../assets/logos/sterlingwilson.png';
import Sun from '../../assets/logos/Sun.png';
import Tata from '../../assets/logos/Tata.png';
import TEN from '../../assets/logos/TEN.jpg';
import Toyo from '../../assets/logos/toyo.png';
import Tuaman from '../../assets/logos/tuaman.png';


const Slider = () => {
  return (
    <div className='slider'>
      <div className="slider-main">
        <div className="slider-title">
          <center><p>Trusted By Both Industry Giants & Startups Alike</p></center>
        </div>
        <div className="mar">
          <Marquee>
            <img src={BHEL} alt="BHEL" />
            <img src={BNR} alt="BNR" />
            <img src={BPCL} alt="BPCL" />
            <img src={Cipla} alt="Cipla" />
            <img src={DSS} alt="DSS" />
            <img src={Felix} alt="Felix" />
            <img src={Gail} alt="Gail" />
            <img src={Glenmark} alt="Glenmark" />
            <img src={HP} alt="HPCL" />
            <img src={HMEL} alt="HMEL" />
            <img src={IGL} alt="IGL" />
            <img src={IndianOil} alt="Indian Oil" />
            <img src={IOL} alt="IOL" />
            <img src={Jindal} alt="Jindal" />
            <img src={Jubilant} alt="Jubilant" />
            <img src={LNT} alt="L&T" />
            <img src={Lupin} alt="Lupin" />
            <img src={NFL} alt="NFL" />
            <img src={NPCIL} alt="NPCIL" />
            <img src={NTPC} alt="NTPC" />
            <img src={Petrofact} alt="Petrofact" />
            <img src={SterlingWilson} alt="Sterling Wilson" />
            <img src={Sun} alt="Sun" />
            <img src={Tata} alt="Tata" />
            <img src={TEN} alt="TEN" />
            <img src={Toyo} alt="Toyo" />
            <img src={Tuaman} alt="Tuaman" />
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Slider;
