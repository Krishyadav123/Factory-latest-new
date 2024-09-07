import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ServicePage from '../Pages/Service-page/ServicePage';
import Scrollup from './Scrollup';
import Achivement from '../Pages/Achivement/Achivement';
// import ContactPage from '../Pages/Contact-page/ContactPage';

const ContactPage = lazy(() => import('../Pages/Contact-page/ContactPage'));
const Home = lazy(() => import('../Pages/Home/Home'));
const ProductPage = lazy(() => import('../Pages/Product-page/ProductPage'));
const SeparateProduct = lazy(() => import('../Pages/Separate-product/Product01/SeparateProduct'));
const SeparateProduct02 = lazy(() => import('../Pages/Separate-product/Product02/SeparateProduct02'));
const SeparateProduct03 = lazy(() => import('../Pages/Separate-product/Product03/SeparateProduct03'));
const SeparateProduct04 = lazy(() => import('../Pages/Separate-product/Product04/SeparateProduct04'));
const SeparateProduct05 = lazy(() => import('../Pages/Separate-product/Product05/SeparateProduct05'));
const SeparateProduct06 = lazy(() => import('../Pages/Separate-product/Product06/SeparateProduct06'));
const AboutPage = lazy(() => import('../Pages/About-page/AboutPage'));
const Contact = lazy(() => import('../Pages/Contact-page/ContactPage'));
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
        <Route path='/products/1' element={<SeparateProduct />} />
        <Route path='/products/2' element={<SeparateProduct02 />} />
        <Route path='/products/3' element={<SeparateProduct03 />} />
        <Route path='/products/4' element={<SeparateProduct04 />} />
        <Route path='/products/5' element={<SeparateProduct05 />} />
        <Route path='/products/6' element={<SeparateProduct06 />} />
      </Routes>
    </>
  );
};

export default RoutesComponent;
