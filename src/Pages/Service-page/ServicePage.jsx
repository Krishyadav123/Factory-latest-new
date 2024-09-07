import React from 'react'
import './ServicePage.css'
import Service from '../../Components/Service-section/Service'
import CounterSection from '../../Components/Counter/CounterSection'
import Info from '../../Components/Why-info/Info'
import Parelax from '../../Components/ParelaxEffect/Parelax'
import image03 from '../../assets/AboutPageimg/image03.jpg'

const ServicePage = () => {
  return (
    <div className='service-page'>
      <Parelax heading={"Service Page"} backgroundImage={image03}/>
      <Service />
      <div className="service-page-countdown">
        <CounterSection />
      </div>
      <div className="service-page-info">
        <Info/>
      </div>
    </div>
  )
}

export default ServicePage