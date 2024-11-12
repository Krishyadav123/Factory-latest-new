import React from 'react'
import Parelax from '../../Components/ParelaxEffect/Parelax'
import image03 from '../../assets/AboutPageimg/image03.jpg'
import { useState } from 'react';
import '../../Components/GalleryImg/GalleryImg.css'; // Assuming you have corresponding styles
import image01 from '../../assets/AboutPageimg/image01.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Slideshow from '../../Components/Slideshow/Slideshow';
const Achivement = () => {

    const media = [
        { type: 'image', src: 'https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729850814/shreeInsul/achivment/ayitiq9zxhixqdabm7aj.jpg' },

        { type: 'image', src: 'https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729850808/shreeInsul/achivment/ytp2eofmz6cwi3mj7bsx.jpg' },

        { type: 'image', src: 'https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729850804/shreeInsul/achivment/rqevb6dpuessgw3dt1mm.jpg' },

        { type: 'image', src: 'https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729850993/shreeInsul/achivment/uxfb3gxc8dqjabx4mzbb.jpg' },

    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('image'); // Default to 'image' to show images first

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    const changeMedia = (direction) => {
        let newIndex = currentIndex + direction;
        if (newIndex >= media.length) {
            newIndex = 0;
        } else if (newIndex < 0) {
            newIndex = media.length - 1;
        }
        setCurrentIndex(newIndex);
    };

    const updateMainMedia = (index) => {
        setCurrentIndex(index);
    };

    // Filter media based on active tab
    const filteredMedia = media.filter(item => item.type === activeTab);


    useGSAP(
        () => {
            // gsap code here...
            gsap.from('.gallary-center', {
                scrollTrigger: {
                    trigger: '.parent-gallary',
                    start: '20% bottom',
                    // markers: true
                },
                opacity: 0,
                // scale: 2,
                y: -100,
                duration: 1,
                // stagger: 0.5,
                // ease: 'power2.inOut'
            });
            gsap.from('.tabs button', {
                scrollTrigger: {
                    trigger: '.tabs',
                    start: '20% bottom',
                    // markers: true
                },
                opacity: 0,
                // scale: 2,
                y: 100,
                duration: 1,
                // stagger: 0.5,
                // ease: 'power2.inOut'
            });
        },);


    return (
        <div>
            <div>
                {/* <Parelax heading={"Achievements"} backgroundImage={image03} /> */}
                <Slideshow 
                image1={"https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_400,c_scale,q_auto,f_auto/v1731405941/shreeInsul/achivment/kjameo77pflxcsi6eorh.png"}
                image2={"https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729850808/shreeInsul/achivment/ytp2eofmz6cwi3mj7bsx.jpg"}
                image3={"https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729850804/shreeInsul/achivment/rqevb6dpuessgw3dt1mm.jpg"}
                // image4={"https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729850993/shreeInsul/achivment/uxfb3gxc8dqjabx4mzbb.jpg"}

                heading='Achievements'
                />
            </div>
            <div className='parent-gallary'>
                <br />
                <div className='gallary-center'>
                   
                </div>
                {/* <div className="tabs">
                    <button
                        style={{ backgroundColor: activeTab === 'image' ? 'orange' : '' }}
                        onClick={() => setActiveTab('image')}
                        className={activeTab === 'image' ? 'active-tab' : ''}>Images</button>

                    <button
                        style={{ backgroundColor: activeTab === 'video' ? 'orange' : '' }}
                        onClick={() => setActiveTab('video')}
                        className={activeTab === 'video' ? 'active-tab' : ''}>Videos</button>
                </div> */}
                <div className="gallery">
                    {filteredMedia.map((item, index) => (
                        item.type === 'image' ? (
                            <div>
                                <img
                                key={index}
                                src={item.src}
                                alt={`Image ${index + 1}`}
                                onClick={() => openLightbox(index)}
                            />
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus asperiores at quia et illo. Unde cum velit dignissimos quisquam voluptatem?</p> */}
                            </div>
                            
                        ) : (
                            <video
                                key={index}
                                src={item.src}
                                controls
                                onClick={() => openLightbox(index)}
                                style={{ cursor: 'pointer' }}
                            />
                        )
                    ))}
                </div>

                {isLightboxOpen && (
                    <div id="lightbox">
                        <span id="close-btn" onClick={closeLightbox}>&times;</span>
                        {filteredMedia[currentIndex].type === 'image' ? (
                            <img id="lightbox-img" src={filteredMedia[currentIndex].src} alt="lightbox image" />
                            
                        ) : (
                            <video id="lightbox-video" src={filteredMedia[currentIndex].src} controls autoPlay />
                        )}
                        <div id="thumbnail-container">
                            {filteredMedia.map((item, index) => (
                                item.type === 'image' ? (
                                    <img
                                        key={index}
                                        src={item.src}
                                        alt={`Thumbnail ${index + 1}`}
                                        className={`thumbnail ${currentIndex === index ? 'active-thumbnail' : ''}`}
                                        onClick={() => updateMainMedia(index)}
                                    />
                                ) : (
                                    <video
                                        key={index}
                                        src={item.src}
                                        className={`thumbnail ${currentIndex === index ? 'active-thumbnail' : ''}`}
                                        onClick={() => updateMainMedia(index)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                )
                            ))}
                        </div>
                        <button id="prev-btn" onClick={() => changeMedia(-1)}>&lt; 👈 </button>
                        <button id="next-btn" onClick={() => changeMedia(1)}>👉 &gt;</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Achivement




