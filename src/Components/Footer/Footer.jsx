import React from "react";
import "./Footer.css";
// import face from '../../assets/'
import twi from "../../assets/twitter_icon.png";
import linke from "../../assets/linkedin_icon.png";
import logo from "../../assets/logo shreeinsul.png";
import { Link } from "react-router-dom";

const Footer = () => {
    const facebookLink = "https://www.facebook.com/profile.php?id=61566026194334";

    const whatsappNumber = "87188 12605";

    const whatsappLink = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=I+am+interested+in+your+products.+Please+share+the+details.&type=phone_number&app_absent=0`;

    const linkedinLink =
        "https://www.linkedin.com/company/shree-insulation/about/?viewAsMember=true";

    const instagramLink = "https://www.instagram.com/shree.insul/";

    return (
        <>
            <div className="footer" id="footer">
                <div className="footer-content-main">
                    <div className="footer-content">
                        <div className="footer-logo">
                            <img src={logo} alt="" />
                            {/* <h1>Shreeinsul</h1> */}
                        </div>
                        <div className="footer-content-left">
                            <p>
                            SHREEINSUL, an ISO 9001:2015 and 45001:2018 certified Group, is a leading provider of hot, cold, and acoustic insulation solutions. With more than 20 years of experience serving diverse industrial segments, our company is renowned for its expertise and commitment to excellence. Our team of highly qualified and experienced engineers is dedicated to continuous innovation and the pursuit of exceptional opportunities.{" "}
                            </p>
                            {/* <div className="footer-social-icon">
                               
                                <img src={twi} alt="" />
                                <img src={linke} alt="" />
                            </div> */}
                        </div>
                        <div className="footer-content-center">
                            <h2>Quick Links</h2>

                            <ul>
                                <Link to={"/"}>
                                    <li>👉🏻 Home</li>
                                </Link>

                                <Link to={"/products"}>
                                    <li>👉🏻 Products</li>
                                </Link>

                                <Link to={"https://shreeengineers.in/services.php"}>
                                    <li>👉🏻 Services</li>
                                </Link>

                                <Link to={"/about"}>
                                    <li>👉🏻 About</li>
                                </Link>
                                
                                <Link to={"/gallery"}>
                                    <li>👉🏻 Gallery</li>
                                </Link>
                                <Link to={"/achievement "}>
                                    <li>👉🏻 Achievement</li>
                                </Link>

                                 <Link to={"/contact"}>
                                    <li>👉🏻 Contact</li>
                                </Link>
                                {/* <li>👉🏻 About us</li>
                                <li>👉🏻 service</li>
                                <li>👉🏻 Privacy policy</li>
                                <li>👉🏻 contact</li>
                                <li>👉🏻 gallery</li>
                                <li>👉🏻 Clientele</li> */}
                            </ul>
                        </div>
                        <div className="footer-content-center">
                            <h2>COMPANY</h2>
                            <ul>
                                <a href={facebookLink} target="_blank">
                                    <li>Facebook</li>
                                </a>
                                <a href={whatsappLink} target="_blank">
                                    <li>Whatsapp</li>
                                </a>
                                <a href={instagramLink} target="_blank">
                                    <li>Instagram</li>
                                </a>
                                <a href={linkedinLink} target="_blank">
                                    <li>LinkedIn</li>
                                </a>
                            </ul>
                        </div>
                        <div className="footer-content-right">
                            <h2>GET IN TOUCH</h2>
                            <ul>
                                <li>+91-87188 12605</li>
                                <li>Sales@shreeinsul.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="footer-hr" />
                <p className="footer-copyright">
                    Copyright 2024 @ shreeinsul.com - All Right Reserved.
                </p>
            </div>
        </>
    );
};

export default Footer;
