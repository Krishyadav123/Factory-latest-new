/* eslint-disable react/no-unescaped-entities */
import '../ProductsCss.css'
// import data from "./products01.json"
// import product01new from '../../../assets/product01new.jpg'
import Parelax from '../../../Components/ParelaxEffect/Parelax'
// import parelax from '../../../Components/ParelaxEffect/Parelax'
import image03 from '../../../assets/AboutPageimg/image03.jpg'
import { FaRegFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import PufPdf from '../../../assets/shree pdf/PUF.pdf';

let image = 'https://res.cloudinary.com/dcsentl2f/image/upload/w_400,h_400,c_scale,q_auto,f_auto/v1731049687/shreeInsul/PNG/stkpbuxaij5zohrj3glw.png'

let parelaxVideo = "https://res.cloudinary.com/dcsentl2f/video/upload/v1731393972/shreeInsul/PNG/xqdkeicq7blo1apytufj.mp4"

const PUF = () => {

    return (
        <>
        <Parelax heading={"Shreeinsul PIR /PUF Products"} backgroundVideo={parelaxVideo} />
              <div className='separate-product'>
                <div className="separate-product-main-container">
                  <div className="separate-product-card">
                    <div className="separate-product-img">
                      <img src={image} alt="" />
                    </div>
                    <div className="separate-product-text">
                      {/* <p className='separate-product-title'>{productData.title}</p> */}
                      <h1>Shreeinsul PIR /PUF Products</h1>
                      <h2>Polyisocyanurate Foam (PUF)</h2>
                      <a href={PufPdf} download="Puf.pdf">
                        <div className='download-pdf'>
                          <FaRegFilePdf className='download-pdf-icon' />
                          <p>Download PDF</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className='separate-product-desc'>Shreeinsul rigid polyurethane foams PUF have been successfully used for many years in the oil and gas industry for service temperatures of up to 110°C. This material is resistant to water ingress, provides much better insulation values than many other insulation materials and also offers structural support of the pipeline due to its high compressive strength. A polyurethane is polymer composed of a chain of organic units joined by carbamate (urethane) links. 
                    </p>
                
                  </div>
                  <hr className='separate-product-hr' />
                  <div>
                    <div className="key-features">
                      <h3>Key Features:</h3>
                      <ul>
                        <li><span>  Durable</span></li>
                        <li><span>Pre-Fabricated and ready to use
                        </span> </li>
                        <li><span>Fire retardant </span> </li>
                        <li><span>Available in Butt & Shiplap Joints
                        </span> </li>
                        <li><span>Sawing and Shaping not required at site</span> </li>
                        <li><span>Available in various density and dimensions as per customer requirement</span> </li>
                        <li><span>Excellent Thermal conductivity </span> </li>
                      </ul>
                    </div>
                    <div className='back-to-products-div'>
                      <Link to="/products">
                        <button className='separate-product-button'>Back to Products</button>
                      </Link>
                    </div>
        
                  </div>
                </div>
              </div>
              </>
      )
}

export default PUF
