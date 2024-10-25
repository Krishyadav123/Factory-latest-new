import React, { useState } from 'react';
import './GalleryImg.css'; // Assuming you have corresponding styles
import image01 from '../../assets/AboutPageimg/image01.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const GalleryImg = () => {
  const media = [

    { type: 'image', src: 'https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729837212/shreeInsul/images/nlvfwkmlesamtjls0yp3.jpg' },

    { type: 'image', src: 'https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729837205/shreeInsul/images/k7fj21jflivs9ymniifm.jpg' },

    { type: 'image', src: 'https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729849963/shreeInsul/images/rnfoaxnnmwxmgzcznxsp.jpg' },

    { type: 'image', src: 'https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729849750/shreeInsul/images/bpwl4zqdgngx3nkklvxx.jpg' },

    { type: 'image', src: 'https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729849709/shreeInsul/images/gvq8xqnjxlyz9wjidpvr.jpg' },

    { type: 'image', src: 'https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729849698/shreeInsul/images/ghmfmianlxxoytnrrgvu.jpg' },

    { type: 'image', src: 'https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729849686/shreeInsul/images/m7dajzyowizxanjsnkse.jpg' },

    { type: 'image', src: 'https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729837188/shreeInsul/images/xkqm6xeg9otf73s1zvcv.jpg' },

    { type: 'image', src: 'https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729837351/shreeInsul/images/khxkm45mkki2d8gnxw3v.png' },

    { type: 'image', src: 'https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729837343/shreeInsul/images/y30nrlgegx8m9ql0i9ja.jpg' },

    { type: 'image', src: 'https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729837341/shreeInsul/images/rx5m1cwtilrfvvkzr8fn.png' },

    { type: 'image', src: 'https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729837341/shreeInsul/images/jk5y7cohydi0s9flbrlz.png' },

    { type: 'image', src: 'https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729837338/shreeInsul/images/xcijq8m8n8mcekhvywzu.jpg' },

    { type: 'image', src: 'https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729837338/shreeInsul/images/wurolxabq7eyo8kugw55.png' },

    { type: 'image', src: 'https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729837337/shreeInsul/images/vtnv90h7hszudurz4fc2.png' },

    { type: 'image', src: 'https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729837336/shreeInsul/images/xmedpiuhpu7lbhni8jty.png' },

    { type: 'image', src: 'https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729837336/shreeInsul/images/i5jhg0nl3kkzenfjlqga.png' },

    { type: 'image', src: 'https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729837247/shreeInsul/images/jb18filzg4pzyrq28kyc.png' },

    { type: 'image', src: 'https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729837225/shreeInsul/images/kj2j9ysnpp1xqc2sngvn.png' },

    { type: 'image', src: 'https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729837225/shreeInsul/images/pbddr7gjoekzccde2fuo.png' },

    { type: 'image', src: 'https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729837224/shreeInsul/images/vgofehga6iffdixwbzor.png' },

    { type: 'image', src: 'https://res.cloudinary.com/dcsentl2f/image/upload/w_600,h_500,c_scale,q_auto,f_auto/v1729837222/shreeInsul/images/xy3dej6iv6kj6uhpwnxz.png' },



    { type: 'video', src:'https://res.cloudinary.com/dcsentl2f/video/upload/w_800,h_600,c_scale,q_auto,f_auto/v1729836589/shreeInsul/videos/nxenr9ayjhsb3ih196tk.mp4' },

    { type: 'video', src: 'https://res.cloudinary.com/dcsentl2f/video/upload/w_800,h_600,c_scale,q_auto,f_auto/v1729836208/shreeInsul/videos/vqxgh5lfv8tirnwzrx2o.mp4' },

    { type: 'video', src: 'https://res.cloudinary.com/dcsentl2f/video/upload/w_800,h_600,c_scale,q_auto,f_auto/v1729836208/shreeInsul/videos/xjekgfygmdra0fjewy4p.mp4' },

    { type: 'video', src: 'https://res.cloudinary.com/dcsentl2f/video/upload/w_800,h_600,c_scale,q_auto,f_auto/v1729836166/shreeInsul/videos/px6ug4gukvnmrk4ipajw.mp4' },

    { type: 'video', src: 'https://res.cloudinary.com/dcsentl2f/video/upload/w_800,h_600,c_scale,q_auto,f_auto/v1729836150/shreeInsul/videos/mhxmy5e9hc8je8pvgupx.mp4' },

    { type: 'video', src: 'https://res.cloudinary.com/dcsentl2f/video/upload/w_800,h_600,c_scale,q_auto,f_auto/v1729836100/shreeInsul/videos/oqpnlhfvnxvdwqtvdlw9.mp4' },

    { type: 'video', src: 'https://res.cloudinary.com/dcsentl2f/video/upload/w_800,h_600,c_scale,q_auto,f_auto/v1729836085/shreeInsul/videos/k5m7u7o6at3upl1rnaid.mp4' },

    { type: 'video', src: 'https://res.cloudinary.com/dcsentl2f/video/upload/w_800,h_600,c_scale,q_auto,f_auto/v1729836042/shreeInsul/videos/uqtnhhv3ktihqthizfwi.mp4' },

    { type: 'video', src: 'https://res.cloudinary.com/dcsentl2f/video/upload/w_800,h_600,c_scale,q_auto,f_auto/v1729835493/shreeInsul/videos/umqdyknwb4d2huqdyho5.mp4' },

    { type: 'video', src: 'https://res.cloudinary.com/dcsentl2f/video/upload/w_800,h_600,c_scale,q_auto,f_auto/v1729835373/shreeInsul/videos/j8xa65rs1pjvhler7n8k.mp4' },

    { type: 'video', src: 'https://res.cloudinary.com/dcsentl2f/video/upload/w_800,h_600,c_scale,q_auto,f_auto/v1729835072/shreeInsul/videos/b5mpwyieyt0ihovpopk1.mp4' },

    { type: 'video', src: 'https://res.cloudinary.com/dcsentl2f/video/upload/w_800,h_600,c_scale,q_auto,f_auto/v1729835025/shreeInsul/videos/j85yqjrlxkalsupcqico.mp4' },

    { type: 'video', src: 'https://res.cloudinary.com/dcsentl2f/video/upload/w_800,h_600,c_scale,q_auto,f_auto/v1729834333/shreeInsul/videos/lzdgheytgdv6plzlrrx3.mp4' },

    { type: 'video', src: 'https://res.cloudinary.com/dcsentl2f/video/upload/w_800,h_600,c_scale,q_auto,f_auto/v1729834292/shreeInsul/videos/eiqjtltontg0jhiqcob8.mp4' },

    { type: 'video', src: 'https://res.cloudinary.com/dcsentl2f/video/upload/w_800,h_600,c_scale,q_auto,f_auto/v1729836618/shreeInsul/videos/ngu5mwbqic6vcpbqnygz.mp4' },


    { type: 'video', src: 'https://res.cloudinary.com/dcsentl2f/video/upload/w_800,h_600,c_scale,q_auto,f_auto/v1729834166/shreeInsul/videos/ylkfat5frl3eubpwtbnd.mp4' },

    { type: 'video', src: 'https://res.cloudinary.com/dcsentl2f/video/upload/w_800,h_600,c_scale,q_auto,f_auto/v1729834035/shreeInsul/videos/gx31b9qipluf4xwrfabc.mp4' },

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
    <div className='parent-gallary'>
      <br />
      <div className='gallary-center'>
        <h1><center>Gallery</center></h1>
      </div>
      <div className="tabs">
        <button 
        style={{ backgroundColor: activeTab === 'image' ? 'rgb(255, 115, 0)' : '' }} 
        onClick={() => setActiveTab('image')}
        className={activeTab === 'image' ? 'active-tab' : ''}>Images</button>

        <button
        style={{ backgroundColor: activeTab === 'video' ? 'rgb(255, 115, 0)' : '' }}
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
              muted
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
            <video id="lightbox-video" src={filteredMedia[currentIndex].src} controls autoPlay muted />
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
