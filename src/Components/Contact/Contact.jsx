import React from 'react';
import './Contact.css'; // Make sure to import your CSS file
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FaFacebook, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




const Contact = () => {

    useGSAP(
        () => {
            // gsap code here...
            gsap.from('.contact-page-left-info', {
                scrollTrigger: {
                    trigger: '.contact-page-main-container',
                    start: '20% bottom',
                    end: '10% top',
                    markers: true,
                },
                opacity: 0,
                // scale: 2,
                x: -100,
                duration: 0.5,
                stagger: 0.8,
                
                // ease: 'power2.inOut'
            });
            gsap.from('.main', {
                scrollTrigger: {
                    trigger: '.contact-page-main-container',
                    start: '20% bottom',
                    markers: true
                },
                opacity: 0,
                // scale: 2,
                x: 100,
                duration: 1,
                // stagger: 0.2,
                ease: 'power2.inOut'
            });
         
        },);
 

    return (
        <>
            <div className="contact-page">
                <div className="contact-page-main-container">
                <div className="contact-page-left">
                        {/* <div className="contact-page-left-title">
                        <h1>Contact!
                        </h1>
                        <p>Per sed, mattis. Integer viverra euismod maecenas incidunt, phasellus consequatur.</p>
                    </div> */}
                        <div className="contact-page-left-info1">
                            <div className='contact-page-left-info'>
                                <div className="contact-page-left-info-img">
                                <FaPhoneAlt className='call-icon' />
                                </div>
                                <div className="contact-page-left-info-text">
                                    <h2>Phone Number:</h2>
                                    <p>Head-Office : (+011) 948-5481 //</p>
                                    <p>Branch-Office : (+011) 948-56487</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-page-left-info2">
                            <div className='contact-page-left-info'>
                                <div className="contact-page-left-info-img">
                                    <FaInstagram className='call-icon' />
                                </div>
                                <div className="contact-page-left-info-text">
                                    <h2>Instagram</h2>
                                    <p>@instagram.com</p>
                                </div>
                            </div>
                            <div className='contact-page-left-info'>
                                <div className="contact-page-left-info-img">
                                    <FaFacebook className='call-icon'/>
                                </div>
                                <div className="contact-page-left-info-text">
                                    <h2>Facebook</h2>
                                    <p>@facebook.com</p>
                                    
                                </div>
                            </div>
                            <div className='contact-page-left-info'>
                                <div className="contact-page-left-info-img">
                                    <FaWhatsapp className='call-icon'/>
                                </div>
                                <div className="contact-page-left-info-text">
                                    <h2>Whatsapp</h2>
                                    <p>+011 948-5481</p>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="main">
                    <div className="contact-form">
                        <form>
                            <div className="form-row">
                                <input type="text" name="name" placeholder="Your Name.." />
                                <input type="email" name="email" placeholder="Your Email.." />
                            </div>
                            <div className="form-row">
                                <input type="text" name="phone" placeholder="Phone Number.." />
                                <input type="text" name="subject" placeholder="Your Subject.." />
                            </div>
                            <textarea name="message" placeholder="Enter Your Message.." />
                            <button type="submit">SUBMIT MESSAGE</button>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default Contact;