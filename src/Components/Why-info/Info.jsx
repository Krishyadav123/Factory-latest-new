import React from 'react'
import './Info.css'
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoPeople } from "react-icons/io5";
import { GiLaurelsTrophy } from "react-icons/gi";
import { PiHandshakeLight } from "react-icons/pi";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';



const Info = () => {

    useGSAP(
        () => {
            // gsap code here...
            gsap.from('.info-text-main span, .info-text-main h2, .info-text-main p',{
                scrollTrigger: {
                  trigger: '.info-main-container',
                  start: '20% bottom',
                  markers: true
                },
                opacity: 0,
                // scale: 2,  
                y: -30,
                duration: 0.5,
                stagger: 0.5,
                // ease: 'power2.inOut'
            });
        },);

    useGSAP(
        () => {
            // gsap code here...
            gsap.from('.info-box-1',{
                scrollTrigger: {
                  trigger: '.info-box-1',
                  start: '20% bottom',
                  markers: true
                },
                opacity: 0,
                // scale: 2,  
                y: -50,
                duration: 0.5,
                stagger: 0.2,
                ease: 'power2.inOut'
            });
        },);

    return (
        <div className='info'>
            <div className="info-main-container">
            <div className="info-text">
                <div className="info-text-main">
                    <span>Lorem ipsum dolor sit amet.</span>
                    <h2>Build better skills,faster</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis dicta reprehenderit, earum quia iste saepe.</p>
                </div>
            </div>
            <div className="info-boxs">
                <div className="info-box-1">
                    <span><GiLaurelsTrophy />
                    </span>
                    <h4>We Believe in Best Quality</h4>
                    <p>Lorem ipsum dolor sit amet, lorem consectetur adipiscing elit.</p>
                </div>
                <div className="info-box-1">
                    <span><PiHandshakeLight /></span>
                    <h4>We Believe in Good Relation</h4>
                    <p>Lorem ipsum dolor sit amet, lorem consectetur adipiscing elit.</p>
                </div>
                <div className="info-box-1">
                    <span><LiaCertificateSolid />
                    </span>
                    <h4>We Believe in Abilities</h4>
                    <p>Lorem ipsum dolor sit amet, lorem consectetur adipiscing elit.</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Info