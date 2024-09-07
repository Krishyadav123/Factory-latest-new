import React from 'react'
import "./AboutPage.css"
import video from '../../assets/AboutPageimg/aboutpagevideo.mp4'
import CounterSection from '../../Components/Counter/CounterSection'
import image01 from '../../assets/AboutPageimg/image01.jpg'
import image02 from '../../assets/AboutPageimg/image02.jpg'
import image03 from '../../assets/AboutPageimg/image03.jpg'
import Parelax from '../../Components/ParelaxEffect/Parelax'
// import image03 from '../../assets/AboutPageimg/image03.jpg'


const AboutPage = () => {
    return (
        <>
            <Parelax heading={"About Page"} backgroundImage={image03} />
            <div className='aboutpage'>
                <div className="about-page-main">
                    <div className="about-page-title">
                        <p>About us</p>
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quae!</h1>
                    </div>
                    <div className="about-page-img">
                        <video src={video} autoPlay muted loop></video>
                    </div>
                    <div className="about-page-desc">
                        <p>About us</p>
                        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                        <p className='about-page-desc-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad error iste quo cupiditate dolorem ea tempore nobis soluta deleniti fugiat incidunt provident dolores vero et, deserunt expedita ipsam dolore at voluptatibus. Dolore numquam facilis voluptate praesentium natus illo, obcaecati libero ratione unde provident adipisci quam eius ad error ex labore.Dolore numquam facilis voluptate praesentium natus illo, obcaecati libero ratione unde provident adipisci quam eius ad error ex labore.</p>
                    </div>
                    <div className="about-page-content">
                        <div className="about-page-content-one">
                            <div className="about-page-content-one-img">
                                <img src={image01} alt="" />
                            </div>
                            <div className="about-page-content-one-text">
                                <h2>Lorem ipsum dolor sit amet.
                                </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolorum eum quo eveniet quibusdam architecto, minus ipsum maxime molestiae accusamus doloribus, deleniti excepturi non provident! Non id hic eaque obcaecati autem earum nemo natus voluptatum sapiente ipsam ex, deleniti exercitationem nulla dignissimos illo eum reiciendis, sint perspiciatis aperiam officia nisi.</p>
                            </div>
                        </div>
                        <div className="about-page-content-one about-page-content-two">
                            <div className="about-page-content-one-text">
                                <h2>Lorem ipsum dolor sit amet.
                                </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolorum eum quo eveniet quibusdam architecto, minus ipsum maxime molestiae accusamus doloribus, deleniti excepturi non provident! Non id hic eaque obcaecati autem earum nemo natus voluptatum sapiente ipsam ex, deleniti exercitationem nulla dignissimos illo eum reiciendis, sint perspiciatis aperiam officia nisi.</p>
                            </div>
                            <div className="about-page-content-one-img">
                                <img src={image02} alt="" />
                            </div>
                        </div>
                        <div className="about-page-content-one about-page-content-three">
                            <div className="about-page-content-one-img">
                                <img src={image03} alt="" />
                            </div>
                            <div className="about-page-content-one-text">
                                <h2>Lorem ipsum dolor sit amet.
                                </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolorum eum quo eveniet quibusdam architecto, minus ipsum maxime molestiae accusamus doloribus, deleniti excepturi non provident! Non id hic eaque obcaecati autem earum nemo natus voluptatum sapiente ipsam ex, deleniti exercitationem nulla dignissimos illo eum reiciendis, sint perspiciatis aperiam officia nisi.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-page-countdown">
                        <CounterSection />
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutPage