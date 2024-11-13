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
                //   markers: true
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
                //   markers: true
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
                    <h2>Mission</h2>
                    <p>At Shree Insulations india Pvt Ltd, our mission is to lead the industry in providing innovative, high-quality stone wool solutions that enhance energy efficiency, safety, and environmental sustainability.</p>
                </div>
            </div>
            <div className="info-boxs">
                <div className="info-box-1">
                    <span><GiLaurelsTrophy />
                    </span>
                    <h4>Our Commitment</h4>
                    <p>At Shree Insulations Group, our commitment extends beyond producing high-quality products. We are dedicated to sustainability and environmental stewardship, utilizing eco-friendly practices throughout our manufacturing process. </p>
                </div>
                <div className="info-box-1">
                    <span><PiHandshakeLight /></span>
                    <h4>Our Expertise</h4>
                    <p>With years of experience and a team of skilled professionals, we bring a wealth of expertise to every project. We collaborate closely with our clients to deliver tailored solutions that meet specific requirements and exceed expectations.</p>
                </div>
                <div className="info-box-1">
                    <span><LiaCertificateSolid />
                    </span>
                    <h4>Join Us in Building a Better Future</h4>
                    <p>Explore the advantages of our insulation solution and discover how Shree Insulations can support your next project. Together, we can create spaces that are not only efficient and safe but also contribute to a more sustainable future.
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Info