import React from 'react'
import './Footer.css'
// import face from '../../assets/'
import twi from '../../assets/twitter_icon.png'
import linke from '../../assets/linkedin_icon.png'
import logo from '../../assets/logo shreeinsul.png'

const Footer = () => {
    return (
        <>

            <div className='footer-logo'>
                <img src={logo} alt="" />
                <h1>Shreeinsul</h1>
            </div>
            <div className='footer' id='footer'>
                <div className="footer-content-main">
                    <div className='footer-content'>
                        <div className="footer-content-left">
                            <p>SHREE ENGINEERS an ISO 9001:2008 Certified Organization pioneer in hot, cold, acoustic insulation and ducting work having experience of more than 18 years in almost all industrial segments. The company is managed by a team of qualified, energetic and dynamic Engineers who always are in search of better avenues. </p>
                            <div className="footer-social-icon">
                                {/* <img src={face} alt="" /> */}
                                <img src={twi} alt="" />
                                <img src={linke} alt="" />
                            </div>
                        </div>
                        <div className="footer-content-center">
                            <h2>Quick Links</h2>

                            <ul>
                                <li>👉🏻 Home</li>
                                <li>👉🏻 About us</li>
                                <li>👉🏻 service</li>
                                <li>👉🏻 Privacy policy</li>
                                <li>👉🏻 contact</li>
                                <li>👉🏻 gallery</li>
                                <li>👉🏻 Clientele</li>
                            </ul>
                        </div>
                        <div className="footer-content-center">
                            <h2>COMPANY</h2>
                            <ul>
                                <li>Home</li>
                                <li>About us</li>
                                <li>service</li>
                                <li>Privacy policy</li>
                            </ul>
                        </div>
                        <div className="footer-content-right">
                            <h2>GET IN TOUCH</h2>
                            <ul>
                                <li>+91-123*****89</li>
                                <li>contact@xyz.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <p className='footer-copyright'>Copyright 2024 @ xyz.com - All Right Reserved.</p>
            </div>
        </>
    )
}

export default Footer