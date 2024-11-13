import React from 'react'
import './About.css'
import { FiCheckCircle } from "react-icons/fi";
import ProductList from '../../Data/ProductList/productList.json'
import logo from '../../assets/logo shreeinsul.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const About = () => {

    useGSAP(
        () => {
            // gsap code here...
            gsap.from('.about-img-4, .about-img-5', {
                scrollTrigger: {
                    trigger: '.about-img-4, .about-img-5',
                    start: '20% bottom',
                    // markers: true
                },
                opacity: 0,
                // scale: 2,
                x: -100,
                duration: 1,
                ease: 'power2.inOut'
            });
        },);
    useGSAP(
        () => {
            // gsap code here...
            gsap.from('.first-img, .mid-img, .last-img', {
                scrollTrigger: {
                    trigger: '.first-img, .mid-img, .last-img',
                    start: '20% bottom',
                    // markers: true
                },
                opacity: 0,
                // scale: 2,
                x: -100,
                duration: 1,
                delay: 0.8,
                ease: 'power2.inOut'
            });
        },);

    useGSAP(
        () => {
            // gsap code here...
            gsap.from('.about-title, .about-contain, .about-main-img-container-1 h1', {
                scrollTrigger: {
                    trigger: '.about-title, .about-contain, .about-main-img-container-1h1',
                    start: '20% bottom',
                    // markers: true
                },
                opacity: 0,
                // scale: 2,
                y: -30,
                duration: 1,
                stagger: 0.5,
                // delay: 0.8,
                // ease: 'power2.inOut'
            });
        },);
    useGSAP(
        () => {
            // gsap code here...
            gsap.from('.about-correct', {
                scrollTrigger: {
                    trigger: '.about-correct',
                    start: '20% bottom',
                    // markers: true
                },
                opacity: 0,
                // scale: 2,
                y: -30,
                duration: 1,
                // stagger: 0.5,
                delay: 0.5,
                // ease: 'power2.inOut'
            });
        },);

    return (
        <div className='about'>
            <div className="about-main">
                <div className="about-main-img">
                    <div className="images first-img">
                       
                        <img src={`https://res.cloudinary.com/dcsentl2f/image/upload/w_400,h_300,c_scale,q_auto,f_auto/v1731405072/shreeInsul/intro%20of%20us%20image/d5xolp2rbtsnqd9wxxoq.jpg`} alt="" />
                    </div>
                    <div className="images mid-img">
                    <img src={`https://res.cloudinary.com/dcsentl2f/image/upload/w_400,h_300,c_scale,q_auto,f_auto/v1731404899/shreeInsul/intro%20of%20us%20image/ou1evizsnoiclntykhsr.jpg`} alt="" />
                    </div>
                    <div className="images last-img">
                    <img src={`https://res.cloudinary.com/dcsentl2f/image/upload/w_400,h_300,c_scale,q_auto,f_auto/v1731405015/shreeInsul/intro%20of%20us%20image/zavdktquzqgpfvnlyojr.jpg`} alt="" />
                    </div>
                </div>
                <div className="about-main-img-container">
                    <div className="about-main-img-container-1">
                        <div className='about-img-4'>
                        <img src={`https://res.cloudinary.com/dcsentl2f/image/upload/w_400,h_300,c_scale,q_auto,f_auto/v1731405068/shreeInsul/intro%20of%20us%20image/gdbfojqtqvtzspmr5shv.jpg`} alt="" />
                        </div>
                        <div>
                            {/* <p className='about-title'>--INTRODUCTION OF US</p> */}
                            <h1>Our Statement</h1>
                            <p className='about-contain'>We are committed to sustainability, utilizing materials from nature and energy materials and energy-efficient processes to minimize our environmental impact. Our focus is on providing durable, non-toxic solutions that promote healthier buildings and communities, contributing to a greener future.
                            </p>
                        </div>
                    </div>
                    <div className="about-main-img-container-2">
                        <div className='about-img-5'>
                        <img src={`https://res.cloudinary.com/dcsentl2f/image/upload/w_400,h_300,c_scale,q_auto,f_auto/v1731404907/shreeInsul/intro%20of%20us%20image/tjsqi8tq2sio6hbpni4h.jpg`} alt="" />
                        </div>
                        <div>
                            <div className="about-correct">
                                <div className="icons-1">
                                    <span><FiCheckCircle /></span>
                                    <p>We focus on sustainability, using materials from nature and energy processes to create durable, non-toxic solutions for healthier communities.
                                    </p>
                                </div>
                                <div className="icons-1 icons-2">
                                    <span><FiCheckCircle /></span>
                                    <p>With a commitment to customer satisfaction, we build lasting partnerships through expertise, dedication, and impactful practices.</p>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    {/* <img src={logo} alt="" className='about-logo' /> */}
                </div>
            </div>
        </div>
    )
}

export default About