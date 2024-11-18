import  { useState } from 'react';
import './Contact.css'; // Make sure to import your CSS file
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
// import { FaFacebook, FaLinkedin, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
import instagram from './../Contact/instagram.png';
import facebook from './../Contact/facebook.png';
import whatsapp from './../Contact/whatsapp.png';
import linkedin from './../Contact/linkedin.png';
import call from './../Contact/call.png';
const Contact = () => {

    const facebookLink = "https://www.facebook.com/profile.php?id=61566026194334"

    const whatsappNumber = "918718812605"

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=I+am+interested+in+your+products.+Please+share+the+details`

    const linkedinLink = "https://www.linkedin.com/company/shree-insulation/about/?viewAsMember=true"

    const instagramLink = "https://www.instagram.com/shree.insul/"

    const headOfficeNumber = '0731-4266310'

    const BranchOfficeNumber = "87188-12605"

    // Create state to handle form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    useGSAP(() => {
        // gsap code here...
        gsap.from('.contact-page-left-info', {
            scrollTrigger: {
                trigger: '.contact-page-main-container',
                start: '20% bottom',
                end: '10% top',
                // markers: true,
            },
            opacity: 0,
            x: -100,
            duration: 0.5,
            stagger: 0.5,
        });
        gsap.from('.main', {
            scrollTrigger: {
                trigger: '.contact-page-main-container',
                start: '20% bottom',
                // markers: true,
            },
            opacity: 0,
            x: 100,
            duration: 1,
            ease: 'power2.inOut',
        });
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwUFZEpCYvcw5wR48u9tEYGt2yvErAXDPDpF99IgYluWu_lq2qKAetloLssbawWy7yS/exec';
    
        // Convert form data to URLSearchParams for x-www-form-urlencoded format
        const formParams = new URLSearchParams();
        for (const key in formData) {
            formParams.append(key, formData[key]);
        }
    
        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formParams.toString(),
            });
    
            console.log("Response: ", response);
    
            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            } else {
                setStatus('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.log("Error: ", error);
            setStatus('Error occurred. Please try again.');
        }
    };
    return (
        <>
            <div className="contact-page">
                <div className="contact-page-main-container">
                    <div className="contact-page-left">
                        <div className="contact-page-left-info1">
                            <div className="contact-page-left-info">
                                <div className="contact-page-left-info-img">
                                    <img src={call} alt="" />
                                </div>
                                <div className="contact-page-left-info-text">
                                    <h2>Phone Number:</h2>
                                    <p>Head-Office : {headOfficeNumber}</p>
                                    <p>Branch-Office : {BranchOfficeNumber}</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-page-left-info2">

                            <a href={instagramLink} target="_blank">
                            <div className="contact-page-left-info">
                                <div className="contact-page-left-info-img">
                                    <img src={instagram} alt="" />
                                </div>
                                <div className="contact-page-left-info-text">
                                    <h2>Instagram</h2>
                                    <p>@instagram.com</p>
                                </div>
                            </div>
                            </a>

                            <a href={facebookLink} target="_blank">
                                <div className="contact-page-left-info">
                            
                                    <div className="contact-page-left-info-img">
                                    <img src={facebook} alt="" />
                                    </div>
                                
                                    <div className="contact-page-left-info-text">
                                        <h2>Facebook</h2>
                                        <p>@facebook.com</p>
                                    </div>
                                
                                </div>
                            </a>


                            <a href={whatsappLink} target="_blank">
                                <div className="contact-page-left-info">
                                    <div className="contact-page-left-info-img">
                                        <img src={whatsapp} alt="" />
                                    </div>
                                    <div className="contact-page-left-info-text">
                                        <h2>Whatsapp</h2>
                                        <p>+91 {whatsappNumber}</p>
                                    </div>
                                </div>
                            </a>

                            <a href={linkedinLink} target="_blank">
                                <div className="contact-page-left-info">
                                    <div className="contact-page-left-info-img">
                                        <img src={linkedin} alt="" />
                                    </div>
                                    <div className="contact-page-left-info-text">
                                        <h2>Linkedin</h2>
                                        <p>@linkedin.com</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="main">
                        <div className="contact-form">
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name.."
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email.."
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-row">
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone Number.."
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Your Subject.."
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <textarea
                                    name="message"
                                    placeholder="Enter Your Message.."
                                    value={formData.message}
                                    onChange={handleInputChange}
                                />
                                <button id='form-btn' type="submit">SUBMIT MESSAGE</button>
                            </form>
                            {status && <p className="form-status">{status}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
