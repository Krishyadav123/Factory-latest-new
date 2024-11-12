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

const headVideo = "https://res.cloudinary.com/dcsentl2f/video/upload/v1731319351/shreeInsul/about%20page/ffuq7sxlmcjxkcf3ktcu.mov"


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
                        
                        <h1>Welcome to Shree Insulations</h1>
                    </div>
                    <div className="about-page-img">
                        <video src={headVideo} autoPlay muted loop></video>
                    </div>
                    {/* <div className="about-page-desc">
                        <p>About Shree Engineers</p>
                        <h1>Shree Group of companies</h1>
                        <p className='about-page-desc-text'>SHREE ENGINEERS an ISO 9001:2008 Certified Organization pioneer in hot, cold, acoustic insulation and ducting work having experience of more than 18 years in almost all industrial segments. The company is managed by a team of qualified, energetic and dynamic Engineers who always are in search of better avenues.</p>
                    </div> */}
                    <div className="about-page-content">
                        <div className="about-page-content-one">
                            <div className="about-page-content-one-img about-page-content-1-img">
                                <img src="https://res.cloudinary.com/dcsentl2f/image/upload/w_500,h_400,c_scale,q_auto,f_auto/v1731319326/shreeInsul/about%20page/qa0lgj7hhgouphsejb1x.jpg" alt="" />
                            </div>
                            <div className="about-page-content-one-text about-page-content-1-text">
                                <h2>Exceptional Insulation Properties
                                </h2>
                                <p> <b> Thermal Efficiency:</b> Our stone wool offers outstanding thermal insulation, reducing heat loss and gain. This leads to more stable temperatures and lower energy consumption, making it an excellent choice for both Industrial and commercial applications.
                                <br />
                               <b> Soundproofing: </b>Enjoy quieter spaces with our stone wool’s superior soundproofing qualities. It effectively dampens noise, providing enhanced acoustic comfort and privacy in any environment.</p>
                            </div>
                        </div>
                        <div className="about-page-content-one about-page-content-two">
                            <div className="about-page-content-one-text about-page-content-2-text">
                                <h2>Superior Fire Resistance
                                </h2>
                                <p> <b>High Heat Tolerance:</b> Stone wool is naturally fire-resistant due to its mineral composition. It can withstand high temperatures without compromising its structural stability, making it an ideal choice for improving safety in buildings and industrial facilities.
                                <br />
                                 <b> Non-Combustible:</b> Our stone wool products are non-combustible, offering an additional layer of protection against fire hazards. This property ensures peace of mind and compliance with stringent fire safety regulations.</p>
                            </div>
                            <div className="about-page-content-one-img about-page-content-2-img">
                                <img src="https://res.cloudinary.com/dcsentl2f/image/upload/w_500,h_400,c_scale,q_auto,f_auto/v1731319335/shreeInsul/about%20page/ifbiq1svr4hefjgv7k66.jpg" alt="" />
                            </div>
                        </div>
                        <div className="about-page-content-one about-page-content-three">
                            <div className="about-page-content-one-img about-page-content-3-img">
                                <img src="https://res.cloudinary.com/dcsentl2f/image/upload/w_700,h_400,c_scale,q_auto,f_auto/v1731319334/shreeInsul/about%20page/ntdviy0sanjnwmz90bfe.jpg" alt="" />
                            </div>
                            <div className="about-page-content-one-text about-page-content-3-text">
                                <h2>Eco-Friendly and Sustainable
                                </h2>
                                <p> <b>Recycled Materials:</b> Made from natural volcanic rock and recycled materials, our stone wool is a sustainable choice that minimizes environmental impact. It supports green building practices and contributes to a lower carbon footprint. <br />
                                <b>Longevity:</b> Durable and resistant to aging, our stone wool maintains its performance over time, reducing the need for frequent replacements and further conserving resources.</p>
                            </div>
                        </div>
                        <div className="about-page-content-one about-page-content-four">
                            <div className="about-page-content-one-text about-page-content-4-text">
                                <h2>Moisture and Mold Resistant
                                </h2>
                                <p> <b>Water Repellent:</b> Unlike some insulation materials, our stone wool does not absorb moisture, preventing potential issues such as Corrosion under Insulation. This feature ensures long-lasting performance and reduces the operational costs. <br />
                                <b>Stable Performance:</b> Even in damp conditions, our stone wool retains its insulating properties, providing consistent performance in various environments.</p>
                            </div>
                            <div className="about-page-content-one-img about-page-content-4-img">
                                <img src="https://res.cloudinary.com/dcsentl2f/image/upload/w_500,h_400,c_scale,q_auto,f_auto/v1731319333/shreeInsul/about%20page/qqwbxmreeykdia5me8nb.jpg" alt="" />
                            </div>
                        </div>
                        <div className="about-page-content-one about-page-content-three">
                            <div className="about-page-content-one-img about-page-content-3-img">
                                <img src="https://res.cloudinary.com/dcsentl2f/image/upload/w_700,h_400,c_scale,q_auto,f_auto/v1731319326/shreeInsul/about%20page/tszq6gk2dcw0n73mzwdo.jpg" alt="" />
                            </div>
                            <div className="about-page-content-one-text about-page-content-3-text">
                                <h2>Versatile Applications
                                </h2>
                                <p> <b>Wide Range of Uses:</b> Our stone wool is suitable for a variety of applications, including high temperature boiler connections, Industrial Piping & Equipment, wall insulation, roof insulation, floor insulation, and acoustic treatments. Its flexibility allows for easy integration into new builds and renovation projects alike.<br />
                                <b>Custom Solutions:</b> We offer tailored solutions to meet specific project needs, ensuring that our stone wool performs optimally in any setting.</p>
                            </div>
                        </div>
                        <div className="about-page-content-one about-page-content-four">
                            <div className="about-page-content-one-text about-page-content-4-text">
                                <h2>Easy to Handle and Install
                                </h2>
                                <p> <b>User-Friendly:</b>Our stone wool products are designed for ease of handling and installation. They are lightweight, flexible, and can be cut to fit various dimensions, simplifying the installation process. We can also provide material in custom sizes and densities.<br />
                                <b>Efficient Installation:</b> With minimal dust and mess, our stone wool ensures a clean and efficient installation experience.</p>
                            </div>
                            <div className="about-page-content-one-img about-page-content-4-img">
                                <img src="https://res.cloudinary.com/dcsentl2f/image/upload/w_700,h_400,c_scale,q_auto,f_auto/v1731319324/shreeInsul/about%20page/y2lfrtzfm11ivstboito.png" alt="" />
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