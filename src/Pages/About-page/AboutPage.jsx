import React from 'react'
import "./AboutPage.css"
import video from '../../assets/AboutPageimg/aboutpagevideo.mp4'
import CounterSection from '../../Components/Counter/CounterSection'
import image01 from '../../assets/AboutPageimg/image01.jpg'
import image02 from '../../assets/AboutPageimg/image02.jpg'
import image03 from '../../assets/AboutPageimg/image03.jpg'
import Parelax from '../../Components/ParelaxEffect/Parelax'
// import image03 from '../../assets/AboutPageimg/image03.jpg'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Slider from '../../Components/Slider/Slider'


const AboutPage = () => {

    useGSAP(
        () => {
            // gsap code here...
            gsap.from('.about-page-title p, .about-page-title h1', {
                scrollTrigger: {
                    trigger: '.aboutpage',
                    start: '10% bottom',
                    // markers: true
                },
                opacity: 0,
                // scale: 2,
                y: -100,
                duration: 1,
                stagger: 0.5,
                // ease: 'power2.inOut'
            });
            gsap.from('.about-page-img, .about-page-desc p, .about-page-desc h1', {
                scrollTrigger: {
                    trigger: '.aboutpage',
                    start: '15% bottom',
                    // markers: true
                },
                opacity: 0,
                scale: 0.5,
                // y: -50,
                duration: 1.2,
                stagger: 0.5,
                // ease: 'power2.inOut'
            });
            gsap.from('.about-page-content-1-img', {
                scrollTrigger: {
                    trigger: '.about-page-content-one',
                    start: '20% bottom',
                    // markers: true
                },
                opacity: 0,
                // scale: 2,
                x: -100,
                duration: 1,
                // stagger: 0.2,
                // ease: 'power2.inOut'
            });
            gsap.from('.about-page-content-1-text', {
                scrollTrigger: {
                    trigger: '.about-page-content-one',
                    start: '20% bottom',
                    // markers: true
                },
                opacity: 0,
                // scale: 2,
                x: 100,
                duration: 1,
                // stagger: 0.5,
                // ease: 'power2.inOut'
            });
            gsap.from('.about-page-content-2-img', {
                scrollTrigger: {
                    trigger: '.about-page-content-two',
                    start: '20% bottom',
                    // markers: true
                },
                opacity: 0,
                // scale: 2,
                x: 100,
                duration: 1,
                // stagger: 0.2,
                // ease: 'power2.inOut'
            });
            gsap.from('.about-page-content-2-text', {
                scrollTrigger: {
                    trigger: '.about-page-content-two',
                    start: '20% bottom',
                    // markers: true
                },
                opacity: 0,
                // scale: 2,
                x: -100,
                duration: 1,
                // stagger: 0.5,
                // ease: 'power2.inOut'
            });
            gsap.from('.about-page-content-3-img', {
                scrollTrigger: {
                    trigger: '.about-page-content-three',
                    start: '20% bottom',
                    // markers: true
                },
                opacity: 0,
                // scale: 2,
                x: -100,
                duration: 1,
                // stagger: 0.2,
                // ease: 'power2.inOut'
            });
            gsap.from('.about-page-content-3-text', {
                scrollTrigger: {
                    trigger: '.about-page-content-three',
                    start: '20% bottom',
                    // markers: true
                },
                opacity: 0,
                // scale: 2,
                x: 100,
                duration: 1,
                // stagger: 0.5,
                // ease: 'power2.inOut'
            });
            gsap.from('.about-page-content-4-img', {
                scrollTrigger: {
                    trigger: '.about-page-content-four',
                    start: '20% bottom',
                    // markers: true
                },
                opacity: 0,
                // scale: 2,
                x: 100,
                duration: 1,
                // stagger: 0.2,
                // ease: 'power2.inOut'
            });
            gsap.from('.about-page-content-4-text', {
                scrollTrigger: {
                    trigger: '.about-page-content-four',
                    start: '20% bottom',
                    // markers: true
                },
                opacity: 0,
                // scale: 2,
                x: -100,
                duration: 1,
                // stagger: 0.5,
                // ease: 'power2.inOut'
            });

        },);

    return (
        <>
            <Parelax heading={"About Shree Engineers"} backgroundImage={image03} />
            <div className='aboutpage'>
                <div className="about-page-main">
                    <div className="about-page-title">
                        <p>About us</p>
                        <h1>Welcome to Shree Engineers</h1>
                    </div>
                    <div className="about-page-img">
                        <video src={video} autoPlay muted loop></video>
                    </div>
                    <div className="about-page-desc">
                        <p>About Shree Engineers</p>
                        <h1>Shree Group of companies</h1>
                        <p className='about-page-desc-text'>SHREE ENGINEERS an ISO 9001:2008 Certified Organization pioneer in hot, cold, acoustic insulation and ducting work having experience of more than 18 years in almost all industrial segments. The company is managed by a team of qualified, energetic and dynamic Engineers who always are in search of better avenues.</p>
                    </div>
                    <div className="about-page-content">
                        <div className="about-page-content-one">
                            <div className="about-page-content-one-img about-page-content-1-img">
                                <video src={video} autoPlay muted loop></video>
                            </div>
                            <div className="about-page-content-one-text about-page-content-1-text">
                                <h2>Lorem ipsum dolor sit amet.
                                </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolorum eum quo eveniet quibusdam architecto, minus ipsum maxime molestiae accusamus doloribus, deleniti excepturi non provident! Non id hic eaque obcaecati autem earum nemo natus voluptatum sapiente ipsam ex, deleniti exercitationem nulla dignissimos illo eum reiciendis, sint perspiciatis aperiam officia nisi.</p>
                            </div>
                        </div>
                        <div className="about-page-content-one about-page-content-two">
                            <div className="about-page-content-one-text about-page-content-2-text">
                                <h2>Lorem ipsum dolor sit amet.
                                </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolorum eum quo eveniet quibusdam architecto, minus ipsum maxime molestiae accusamus doloribus, deleniti excepturi non provident! Non id hic eaque obcaecati autem earum nemo natus voluptatum sapiente ipsam ex, deleniti exercitationem nulla dignissimos illo eum reiciendis, sint perspiciatis aperiam officia nisi.</p>
                            </div>
                            <div className="about-page-content-one-img about-page-content-2-img">
                                <video src={video} autoPlay muted loop></video>
                            </div>
                        </div>
                        <div className="about-page-content-one about-page-content-three">
                            <div className="about-page-content-one-img about-page-content-3-img">
                                <video src={video} autoPlay muted loop></video>
                            </div>
                            <div className="about-page-content-one-text about-page-content-3-text">
                                <h2>Lorem ipsum dolor sit amet.
                                </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolorum eum quo eveniet quibusdam architecto, minus ipsum maxime molestiae accusamus doloribus, deleniti excepturi non provident! Non id hic eaque obcaecati autem earum nemo natus voluptatum sapiente ipsam ex, deleniti exercitationem nulla dignissimos illo eum reiciendis, sint perspiciatis aperiam officia nisi.</p>
                            </div>
                        </div>
                        <div className="about-page-content-one about-page-content-four">
                            <div className="about-page-content-one-text about-page-content-4-text">
                                <h2>Lorem ipsum dolor sit amet.
                                </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolorum eum quo eveniet quibusdam architecto, minus ipsum maxime molestiae accusamus doloribus, deleniti excepturi non provident! Non id hic eaque obcaecati autem earum nemo natus voluptatum sapiente ipsam ex, deleniti exercitationem nulla dignissimos illo eum reiciendis, sint perspiciatis aperiam officia nisi.</p>
                            </div>
                            <div className="about-page-content-one-img about-page-content-4-img">
                                <video src={video} autoPlay muted loop></video>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-page-countdown">
                    {/* <CounterSection /> */}
                    <Slider />
                </div>

            </div>
        </>
    )
}

export default AboutPage