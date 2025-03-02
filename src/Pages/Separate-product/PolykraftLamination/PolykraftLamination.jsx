/* eslint-disable react/no-unescaped-entities */
import '../ProductsCss.css'
// import data from "./products01.json"
// import product01new from '../../../assets/product01new.jpg'
import Parelax from '../../../Components/ParelaxEffect/Parelax'
// import parelax from '../../../Components/ParelaxEffect/Parelax'
import { FaRegFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import BarrierLaminationPDF from '../../../assets/shree pdf/BarrierLamination.pdf';

let image = 'https://res.cloudinary.com/dwvxuesrd/image/upload/w_400,h_400,c_scale,q_auto,f_auto/v1728041030/shreeinsul/products/Polykraft%20Lamination/zfcrmcfettsdxc0hka46.png'

let video = "https://res.cloudinary.com/dcsentl2f/video/upload/w_800,h_400,c_scale,q_auto,f_auto/v1731389143/shreeInsul/PNG/nzirnw5p3hw90rhafik5.mp4"

function PolykraftLamination() {

    return (
        <>
        <Parelax heading={"Moisture Barrier Lamination"} backgroundVideo={video} />
              <div className='separate-product'>
                <div className="separate-product-main-container">
                  <div className="separate-product-card">
                    <div className="separate-product-img">
                      <img src={image} alt="" />
                    </div>
                    <div className="separate-product-text">
                      {/* <p className='separate-product-title'>{productData.title}</p> */}
                      <h1>Moisture Barrier Lamination</h1>
                      <h2>Polykraft Lamination</h2>
                      <a href={BarrierLaminationPDF} download="BarrierLamination.pdf">
                        <div className='download-pdf'>
                          <FaRegFilePdf className='download-pdf-icon' />
                          <p>Download PDF</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className='separate-product-desc'>
                    We also provide Polykraft moisture barrier consisting of one layer of 1 mil high density polyethylene film with a protective layer of 40-pound minimum virgin Kraft paper heat laminated on the weather protection cladding inside our factory. This product compiles with EIL specifications and provides excellent protection to the cladding material. 
                    
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

export default PolykraftLamination