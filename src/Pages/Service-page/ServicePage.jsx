import React from "react";
import "./ServicePage.css";
import Service from "../../Components/Service-section/Service";
import CounterSection from "../../Components/Counter/CounterSection";
import Info from "../../Components/Why-info/Info";
import Parelax from "../../Components/ParelaxEffect/Parelax";
import image03 from "../../assets/AboutPageimg/image03.jpg";
import { FaCircleCheck, FaRegCircleCheck } from "react-icons/fa6";

const ServicePage = () => {
  let parelaxVideo =
    "https://res.cloudinary.com/dcsentl2f/video/upload/v1731406708/shreeInsul/about%20page/omr1pe8ib3hjflzxgu0x.mov";

  return (
    <div className="service-page">
      <Parelax heading={"Service Page"} backgroundVideo={parelaxVideo} />
      {/* <Service />
      <div className="service-page-countdown">
        <CounterSection />
      </div>
      <div className="service-page-info">
        <Info/>
      </div> */}
      <div className="service-page-content-container">
        <div className="service-page-content">
          <h2>Our Services</h2>
          {/* <p>
          In simple terms, thermal insulation reduces heat flow from one surface to another. For hot (above ambient) applications, thermal insulation reduces heat loss. On cold (below ambient) applications, the insulation generally serves to minimize heat gain.
          </p> */}
        </div>
        <div className="service-page-content-img">
          <div>
            <img
              src="https://res.cloudinary.com/dinknhjnp/image/upload/v1740481978/WhatsApp_Image_2025-02-25_at_16.40.52_10fd7afc_o8qnx2.jpg "
              alt="service1"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dinknhjnp/image/upload/v1740481978/WhatsApp_Image_2025-02-25_at_16.40.52_18a0e15c_rieq54.jpg "
              alt="service1"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dinknhjnp/image/upload/v1740481978/WhatsApp_Image_2025-02-25_at_16.40.52_cf6aef61_edyszv.jpg "
              alt="service1"
            />
          </div>
        </div>
        <div>
          <div className="service-page-content-info">
            <p>
              <span>SERVICES :- </span>
              In simple terms, thermal insulation reduces heat flow from one surface to another. For hot (above ambient) applications, thermal insulation reduces heat loss. On cold (below ambient) applications, the insulation generally serves to minimize heat gain.
              <br />
              <br />
              In industry, energy has to be expended to raise, lower, or maintain the temperature of objects or process fluids. If these are not insulated, these increase the energy requirements of a process, and therefore have direct impact on cost and environment.
              <br />
              <br />
              <span className="service-page-content-info-span">SHREEINSUL, an ISO 9001:2015 and 45001:2018 Certified Group</span> is extending its support in energy saving process at various industries, in accordance with their specifications and requirements, for past more than 20 years. Our expertise is in Hot and Cold Insulation. Shreeinsul Group offer a complete service that includes: thermal insulation, sheet metal fabrication and cladding. These services cover installation, fabrication, project management and material supply contracts.
            </p>
          </div>
          {/* <div className="service-page-content-info">
            <p>
              <span>HOT INSULATION :- </span>
              In Cement Industry and likewise industries, only in process energy
              loss to be prevented while in Chemicals and Pharmaceutical
              Industries energy loss and gain both are required to be prevented
              to ensure system performance and to achieve consistent product
              quality.
              <br />
              With hot insulation it is imperative to prevent moisture from
              entering the insulation system, as this will reduce the system’s
              performance and can contribute to corrosion of the underlying
              pipes, vessels, flanges, valves, etc. The weather barrier must
              additionally be able to “breathe”, in order to allow any moisture
              already in the system to be expelled.
              <br />
              <br />
              SHREE ENGINEERS with the gained expertise of thermal insulation
              for more than 12 years provides total protection without any
              seams, overlaps or joints to cause short- or long-term failures
              and to prevent in process energy loss.
            </p>
          </div>
          <div className="service-page-content-info">
            <p>
              <span>COLD INSULATION :- </span>
              In industries like Chemical and Pharmaceuticals, both in process
              energy loss and energy gain need to be averted. A static
              temperature required to be maintained in the process. The greater
              the temperature difference between ambient and process
              temperature, the greater the “pull” of moisture to the pipe/vessel
              surface, and consequently, the greater the need for an effective
              and durable cold insulation system.
              <br />
              <br />
              SHREE ENGINEERS renders highly reliable Cold Insulation. For
              keeping the ambient temperature well within the required parameter
              Cold Roof Insulation is an ideal solution. It is commonly used for
              the safe storage of different kinds of material with low shelf
              life. Our team of professionals is efficient in designing,
              fabricating and installing cold insulation materials for optimum
              performance.
            </p>
          </div>
          <div className="service-page-content-info">
            <p>
              <span>ACOUSTIC INSULATION :- </span>
              We also provide acoustic insulation solutions. We offer a wide
              range of acoustic insulation products and with the excellent
              acoustic insulation properties of glass mineral wool, the Earth
              wool sound reducing insulation products can be used in new build
              separating walls, partitions, and floors, as well as for the
              upgrade of existing buildings to provide improved sound insulation
              and resistance.
            </p>
          </div> */}
        </div>
        <div className="service-page-content-img-info">
          <div className="service-page-content-img-info-container">
            <div className="service-page-content-img-info-img">
              <img
                src="https://shreeengineers.in/assets/img/service/serv-1.jpg"
                alt="service1"
                // className="service-page-content-img-info-img"
              />
            </div>
            <div className="service-page-content-img-info-text">
              <h1>HOT INSULATION</h1>
              <p>
                In Cement Industry and likewise industries, only in process
                energy loss to be prevented while in Chemicals and
                Pharmaceutical Industries energy loss and gain both are required
                to be prevented to ensure system performance and to achieve
                consistent product quality. With hot insulation it is imperative
                to prevent moisture from entering the insulation system, as this
                will reduce the system’s performance and can contribute to
                corrosion of the underlying pipes, vessels, flanges, valves,
                etc. The weather barrier must additionally be able to “breathe”,
                in order to allow any moisture already in the system to be
                expelled.
                <br />
                <br />
                SHREEINSUL Group with the gained expertise of thermal insulation
                for more than 20 years provides total protection without any
                seams, overlaps or joints to cause short- or long-term failures
                and to prevent in process energy loss.
              </p>

              <div className="service-page-content-img-info-text-list">
                <h2>Features :-</h2>
                <div className="service-page-content-img-info-text-list-item">
                  <FaRegCircleCheck className="service-page-content-img-info-text-list-item-icon" />
                  <p>Eco friendliness</p>
                </div>
                <div className="service-page-content-img-info-text-list-item">
                  <FaRegCircleCheck className="service-page-content-img-info-text-list-item-icon" />
                  <p>Insulation efficiency</p>
                </div>
                <div className="service-page-content-img-info-text-list-item">
                  <FaRegCircleCheck className="service-page-content-img-info-text-list-item-icon" />
                  <p>High performance</p>
                </div>
                <div className="service-page-content-img-info-text-list-item">
                  <FaRegCircleCheck className="service-page-content-img-info-text-list-item-icon" />
                  <p>Energy conservation</p>
                </div>
              </div>
            </div>
          </div>
          <div className="service-page-content-img-info-container">
            <div className="service-page-content-img-info-text">
              <h1>COLD INSULATION</h1>
              <p>
              In industries like Chemical and Pharmaceuticals, both in process energy loss and energy gain need to be averted. A static temperature required to be maintained in the process. The greater the temperature difference between ambient and process temperature, the greater the “pull” of moisture to the pipe/vessel surface, and consequently, the greater the need for an effective and durable cold insulation system.
              <br />
              <br />
              SHREEINSUL renders highly reliable Cold Insulation. For keeping the ambient temperature well within the required parameter Cold Roof Insulation is an ideal solution. It is commonly used for the safe storage of different kinds of material with low shelf life. Our team of professionals is efficient in designing, fabricating and installing cold insulation materials for optimum performance.
              </p>

              <div className="service-page-content-img-info-text-list">
                <h2>Features :-</h2>
                <div className="service-page-content-img-info-text-list-item">
                  <FaRegCircleCheck className="service-page-content-img-info-text-list-item-icon" />
                  <p>Effective</p>
                </div>
                <div className="service-page-content-img-info-text-list-item">
                  <FaRegCircleCheck className="service-page-content-img-info-text-list-item-icon" />
                  <p>Timely execution</p>
                </div>
                <div className="service-page-content-img-info-text-list-item">
                  <FaRegCircleCheck className="service-page-content-img-info-text-list-item-icon" />
                  <p>Reliability</p>
                </div>
                <div className="service-page-content-img-info-text-list-item">
                  <FaRegCircleCheck className="service-page-content-img-info-text-list-item-icon" />
                  <p>Bearing capacity</p>
                </div>
              </div>
            </div>
            <div className="service-page-content-img-info-img">
              <img
                src="https://shreeengineers.in/assets/img/service/serv-2.jpg"
                alt="service1"
                // className="service-page-content-img-info-img"
              />
            </div>
          </div>
          <div className="service-page-content-img-info-container">
            <div className="service-page-content-img-info-img">
              <img
                src="https://shreeengineers.in/images2/gallery/2.jpg"
                alt="service1"
                // className="service-page-content-img-info-img"
              />
            </div>
            <div className="service-page-content-img-info-text">
              <h1>ACOUSTIC INSULATION</h1>
              <p>
              We also provide acoustic insulation solutions. We offer a wide range of acoustic insulation products and with the excellent acoustic insulation properties of glass mineral wool, the Earth wool sound reducing insulation products can be used in new build separating walls, partitions, and floors, as well as for the upgrade of existing buildings to provide improved sound insulation and resistance.
              </p>

              <div className="service-page-content-img-info-text-list">
                <h2>Features :-</h2>
                <div className="service-page-content-img-info-text-list-item">
                  <FaRegCircleCheck className="service-page-content-img-info-text-list-item-icon" />
                  <p>Reliable operations</p>
                </div>
                <div className="service-page-content-img-info-text-list-item">
                  <FaRegCircleCheck className="service-page-content-img-info-text-list-item-icon" />
                  <p>Flexible</p>
                </div>
                <div className="service-page-content-img-info-text-list-item">
                  <FaRegCircleCheck className="service-page-content-img-info-text-list-item-icon" />
                  <p>High tolerance</p>
                </div>
                <div className="service-page-content-img-info-text-list-item">
                  <FaRegCircleCheck className="service-page-content-img-info-text-list-item-icon" />
                  <p>Efficiency</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
