import React from 'react'
import './Service.css'
import { IoBulbOutline } from "react-icons/io5";
import midimage from '../../assets/mid-imae.jpg'
import video02 from '../../assets/AboutPageimg/aboutpagevideo02.mp4'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger);

const Service = () => {

    useGSAP(
        () => {
            // gsap code here...
            gsap.from('.service-main-content-2', {
                scrollTrigger: {
                    trigger: '.service-container',
                    start: '20% bottom',
                    markers: true
                },
                opacity: 0,
                // scale: 2,
                x: 100,
                duration: 1,
                // stagger: 0.5,
                // ease: 'power2.inOut'
            });
            gsap.from('.service-main-mid-image', {
                scrollTrigger: {
                    trigger: '.service-container',
                    start: '20% bottom',
                    markers: true
                },
                opacity: 0,
                // scale: 2,
                y: -50,
                duration: 1,
                // stagger: 0.2,
                ease: 'power2.inOut'
            });
            gsap.from('.service-main-content-1', {
                scrollTrigger: {
                    trigger: '.service-container',
                    start: '20% bottom',
                    markers: true
                },
                opacity: 0,
                // scale: 2,
                x: -100,
                duration: 1,
                // stagger: 0.2,
                // ease: 'power2.inOut'
            });
        },);
 

    return (
        <div className='service'>
            <div className="service-container">
            <div className="info-text">
                <div className="info-text-main info-text-main-1">
                    <span>SERVICE</span>
                    <h2>Build better skills,faster</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis dicta reprehenderit, earum quia iste saepe.</p>
                </div>
            </div>
            <div className="service-main">
                <div className="service-main-content service-main-content-1">
                    <div className="service-main-one">
                        <div className="service-main-text">
                            <h4>Innovation of Metallurgy</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi non pretium pur.</p>
                        </div>
                        <div className="service-main-icon">
                            <IoBulbOutline />
                        </div>
                    </div>
                    <div className="service-main-one service-main-two">
                        <div className="service-main-text">
                            <h4>Innovation of Metallurgy</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi non pretium pur.</p>
                        </div>
                        <div className="service-main-icon">
                            <IoBulbOutline />
                        </div>
                    </div>
                    <div className="service-main-one service-main-three">
                        <div className="service-main-text">
                            <h4>Innovation of Metallurgy</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi non pretium pur.</p>
                        </div>
                        <div className="service-main-icon">
                            <IoBulbOutline />
                        </div>
                    </div>
                </div>
                <div className="service-main-mid-image">
                    <div className="service-img">
                       <video src={video02} autoPlay loop muted />
                    </div>
                </div>
                <div className="service-main-content service-main-content-2">
                    <div className="service-main-one">
                        <div className="service-main-icon">
                            <IoBulbOutline />
                        </div>
                        <div className="service-main-text service-text-last
                        ">
                            <h4>Innovation of Metallurgy</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi non pretium pur.</p>
                        </div>
                    </div>
                    <div className="service-main-one service-main-two">
                        <div className="service-main-icon">
                            <IoBulbOutline />
                        </div>
                        <div className="service-main-text service-text-last
                        ">
                            <h4>Innovation of Metallurgy</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi non pretium pur.</p>
                        </div>
                    </div>
                    <div className="service-main-one service-main-three">
                        <div className="service-main-icon">
                            <IoBulbOutline />
                        </div>
                        <div className="service-main-text service-text-last
                        ">
                            <h4>Innovation of Metallurgy</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi non pretium pur.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-btn">
            <button>Read More</button>

            </div>
            </div>
        </div>
    )
}

export default Service