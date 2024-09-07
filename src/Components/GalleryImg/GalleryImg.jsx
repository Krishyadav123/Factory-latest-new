import React, { useState } from 'react';
import './GalleryImg.css'; // Assuming you have corresponding styles
import image01 from '../../assets/AboutPageimg/image01.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const GalleryImg = () => {
  const media = [
    { type: 'image', src: 'https://shreeengineers.in/images2/gallery/1.jpg' },
    { type: 'image', src: 'https://shreeengineers.in/images2/gallery/2.jpg' },
    { type: 'image', src: 'https://shreeengineers.in/images2/gallery/3.jpg' },
    { type: 'image', src: 'https://shreeengineers.in/images2/gallery/4.jpg' },
    { type: 'image', src: 'https://shreeengineers.in/images2/gallery/5.jpg' },
    { type: 'image', src: 'https://shreeengineers.in/images2/gallery/6.jpg' },
    { type: 'image', src: 'https://shreeengineers.in/images2/gallery/7.jpg' },
    { type: 'image', src: 'https://shreeengineers.in/images2/gallery/8.jpg' },
    { type: 'image', src: image01 }, // Corrected line
    { type: 'video', src: 'https://www.w3schools.com/html/movie.mp4' },
    { type: 'image', src: 'https://shreeengineers.in/images2/gallery/certificate/certificate1.png' },
    { type: 'video', src: 'https://www.w3schools.com/html/movie.mp4' },
    { type: 'video', src: 'https://www.w3schools.com/html/movie.mp4' },
    { type: 'video', src: 'https://www.w3schools.com/html/movie.mp4' },
    { type: 'video', src: 'https://www.w3schools.com/html/movie.mp4' },
    { type: 'video', src: 'https://www.w3schools.com/html/movie.mp4' },
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
                markers: true
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
                markers: true
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
    <div className='parent-gallary'>
      <br />
      <div className='gallary-center'>
        <h1><center>Gallery</center></h1>
      </div>
      <div className="tabs">
        <button 
        style={{ backgroundColor: activeTab === 'image' ? 'orange' : '' }} 
        onClick={() => setActiveTab('image')}
        className={activeTab === 'image' ? 'active-tab' : ''}>Images</button>

        <button
        style={{ backgroundColor: activeTab === 'video' ? 'orange' : '' }}
        onClick={() => setActiveTab('video')} 
        className={activeTab === 'video' ? 'active-tab' : ''}>Videos</button>
      </div>
      <div className="gallery">
        {filteredMedia.map((item, index) => (
          item.type === 'image' ? (
            <img
              key={index}
              src={item.src}
              alt={`Image ${index + 1}`}
              onClick={() => openLightbox(index)}
            />
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
  );
};

export default GalleryImg;
