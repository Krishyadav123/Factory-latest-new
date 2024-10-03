/* eslint-disable react/no-unescaped-entities */
import '../ProductsCss.css'
// import data from "./products01.json"
// import product01new from '../../../assets/product01new.jpg'
import Parelax from '../../../Components/ParelaxEffect/Parelax'
// import parelax from '../../../Components/ParelaxEffect/Parelax'
import image03 from '../../../assets/AboutPageimg/image03.jpg'
import { FaRegFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom'

function ProfiledWeatherProtectionJacketing() {
  let image = 'https://res.cloudinary.com/dwvxuesrd/image/upload/v1727951679/shreeinsul/products/Profiled%20Weather%20Protection%20Jacketing/vq7kkuy84agfil2t7p8f.png'
    return (
        <>
        <Parelax heading={"Moisture Barrier Lamination"} backgroundImage={image03} />
              <div className='separate-product'>
                <div className="separate-product-main-container">
                  <div className="separate-product-card">
                    <div className="separate-product-img">
                      <img src={image} alt="" />
                    </div>
                    <div className="separate-product-text">
                      {/* <p className='separate-product-title'>{productData.title}</p> */}
                      <h1>Moisture Barrier Lamination</h1>
                      <h2>Profiled Weather Protection Jacketing</h2>
                      <a href="/path/to/your/file.pdf" download="filename.pdf">
                        <div className='download-pdf'>
                          <FaRegFilePdf className='download-pdf-icon' />
                          <p>Download PDF</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className='separate-product-desc'>
                    Our State-of-the-art facility can provide Corrugated Aluminium, SS & GI sheets with 32/5 & 76/19 profiles. Lengths of the corrugated material can be customised as per the customer's requirements. We are capable to do profiling on thicknesses varying from 0.4 mm to 1.22 mm depending upon the nature of the material. Profiled sheets are also available with moisture barrier protective laminations. 
                    </p>
                  </div>
                  <hr className='separate-product-hr' />
                  <div>
                    {/* <div className="key-features">
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
                    </div> */}
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

export default ProfiledWeatherProtectionJacketing