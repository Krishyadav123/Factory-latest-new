import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ServicePage from '../Pages/Service-page/ServicePage';
import Scrollup from './Scrollup';
import Achivement from '../Pages/Achivement/Achivement';
import Lrb from '../Pages/Separate-product/LRB/Lrb';
import SlabsAndBoard from '../Pages/Separate-product/SlabsAndBoard/SlabsAndBoard';
import SectionalPipeCover from '../Pages/Separate-product/SectionalPipeCover/SectionalPipeCover';
import LooseWool from '../Pages/Separate-product/LooseWool/LooseWool';
// import BuildingRolls from '../Pages/Separate-product/BuildingRolls/BuildingRolls';
import BuildingRolls from '../Pages/Separate-product/BuildingRolls/BuildingRolls';
import LamellaBatts from '../Pages/Separate-product/LamellaBatts/LamellaBatts';
import ClothTape from '../Pages/Separate-product/ClothTape/ClothTape';
import YarnBraidedRopes from '../Pages/Separate-product/YarnBraidedRopes/YarnBraidedRopes';
import TwistedRope from '../Pages/Separate-product/TwistedRope/TwistedRope';
import Yarn from '../Pages/Separate-product/Yarn/Yarn';

import PUF from '../Pages/Separate-product/PUF/PUF';
import PIR from '../Pages/Separate-product/PIR/PIR.jsx';
import PufPirSupport from '../Pages/Separate-product/PufPirSupport/PufPirSupport.jsx';
import PolySurlynLamination from '../Pages/Separate-product/PolySurlynLamination/PolySurlynLamination.jsx';
import PolykraftLamination from '../Pages/Separate-product/PolykraftLamination/PolykraftLamination.jsx';
import ProfiledWeatherProtectionJacketing from '../Pages/Separate-product/ProfiledWeatherProtectionJacketing/ProfiledWeatherProtectionJacketing.jsx';
// import PIR from '../Pages/Separate-product/PIR/PIR.jsx';
// import ContactPage from '../Pages/Contact-page/ContactPage';

const ContactPage = lazy(() => import('../Pages/Contact-page/ContactPage'));
const Home = lazy(() => import('../Pages/Home/Home'));
const ProductPage = lazy(() => import('../Pages/Product-page/ProductPage'));
const AboutPage = lazy(() => import('../Pages/About-page/AboutPage'));
// const Contact = lazy(() => import('../Pages/Contact-page/ContactPage'));
const Gallary = lazy(() => import('../Components/Gallary/Gallary'));

const RoutesComponent = () => {
  return (
    <>
      <Scrollup />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/services' element={<ServicePage />} />
        <Route path='/gallery' element={<Gallary />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/achievement' element={<Achivement />} />
        <Route path='/products/lrb' element={<Lrb />} />
        <Route path='/products/slabs-and-boards' element={<SlabsAndBoard />} />
        <Route path='/products/sectional-pipe-covers' element={<SectionalPipeCover />} />
        <Route path='/products/loose-wool' element={<LooseWool />} />
        <Route path='/products/building-rolls' element={<BuildingRolls/>} />
        <Route path='/products/lamella-batts' element={<LamellaBatts/>} />
        <Route path='/products/cloth-tape' element={<ClothTape/>} />
        <Route path='/products/yarn-braided-ropes' element={<YarnBraidedRopes/>} />   
        <Route path='/products/twisted-ropes' element={<TwistedRope/>} />   
        <Route path='/products/yarns' element={<Yarn/>} />   
        <Route path='/products/pir' element={<PIR/>} />   
        <Route path='/products/puf' element={<PUF/>} />   
        <Route path='/products/puf-pir-support' element={<PufPirSupport/>} />   
        <Route path='/products/polySurlyn-lamination' element={<PolySurlynLamination />} />
        <Route path='/products/polykraft-lamination' element={<PolykraftLamination/>} />
        <Route path='/products/profiled-weather-protection-jacketing' element={<ProfiledWeatherProtectionJacketing />} />
        </Routes>
    </>
  );
};

export default RoutesComponent;
