import React from 'react'
import Parelax from '../../Components/ParelaxEffect/Parelax'
import image03 from '../../assets/AboutPageimg/image03.jpg'
import { useState } from 'react';
import '../../Components/GalleryImg/GalleryImg.css'; // Assuming you have corresponding styles
import image01 from '../../assets/AboutPageimg/image01.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Achivement = () => {

    const media = [
        { type: 'image', src: 'https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729848259/shreeInsul/achivment/t4wtcvagchjvx4hc7n0p.pdf' },

        { type: 'image', src: 'https://res.cloudinary.com/dcsentl2f/image/upload/v1729848258/shreeInsul/achivment/vvjfztxordziveyebbq5.pdf' },

        { type: 'image', src: 'https://shreeengineers.in/images2/gallery/3.jpg' },

        { type: 'image', src: 'https://shreeengineers.in/images2/gallery/4.jpg' },

        { type: 'image', src: 'https://shreeengineers.in/images2/gallery/5.jpg' },
        { type: 'image', src: 'https://shreeengineers.in/images2/gallery/6.jpg' },
        { type: 'image', src: 'https://shreeengineers.in/images2/gallery/7.jpg' },
        { type: 'image', src: 'https://shreeengineers.in/images2/gallery/8.jpg' },
        { type: 'image', src: image01 }, // Corrected line
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
                <Parelax heading={"Achievements"} backgroundImage={image03} />
            </div>
            <div className='parent-gallary'>
                <br />
                <div className='gallary-center'>
                    <h1><center>Achievements</center></h1>
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




