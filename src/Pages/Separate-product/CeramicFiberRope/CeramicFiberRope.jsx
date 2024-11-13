import '../ProductsCss.css'
// import data from "./products01.json"
// import product01new from '../../../assets/product01new.jpg'
import Parelax from '../../../Components/ParelaxEffect/Parelax'
// import parelax from '../../../Components/ParelaxEffect/Parelax'
import image03 from '../../../assets/AboutPageimg/image03.jpg'
import { FaRegFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import CeramicFiberRopePDF from '../../../assets/shree pdf/CeramicFiberRope.pdf';

let image = 'https://res.cloudinary.com/dcsentl2f/image/upload/w_400,h_400,c_scale,q_auto,f_auto/v1731049681/shreeInsul/PNG/kowde6cnzmjr1vdkcplx.png'

let parelaxVideo = "https://res.cloudinary.com/dcsentl2f/video/upload/v1731477991/shreeInsul/PNG/uxcnnwlpqnydt30woasl.mp4"

const CeramicFiberRope = () => {

    return (
        <>
        <Parelax heading={"Shreeinsul Textile Products"} backgroundVideo={parelaxVideo} />
              <div className='separate-product'>
                <div className="separate-product-main-container">
                  <div className="separate-product-card">
                    <div className="separate-product-img">
                      <img src={image} alt="" />
                    </div>
                    <div className="separate-product-text">
                      {/* <p className='separate-product-title'>{productData.title}</p> */}
                      <h1>Shreeinsul Textile Products</h1>
                      <h2>Shreeinsul Ceramic Fiber Rope</h2>
                      <a href={CeramicFiberRopePDF} download="CeramicFiberRope.pdf">
                        <div className='download-pdf'>
                          <FaRegFilePdf className='download-pdf-icon' />
                          <p>Download PDF</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className='separate-product-desc'>Shreeinsul Ceramic Fiber Ropes are made from premium quality Ceramic fiber Yarn. The standard Rope segment consists of braided and twisted ropes and are available in both metallic and non-metallic categories. The braided ropes are available in round, square and rectangular shapes. SS wire or Fiber Glass reinforced to give the product excellent handling strength during application. These ropes contain 10 – 12% organic carrier which helps to establish physical formation of products and burns out at a temperature of about 400° C. 
                    </p>
                  </div>
                  <hr className='separate-product-hr' />
                  <div>
                    <div className="key-features">
                      <h3>Key Features:</h3>
                      <ul>
                        <li><span> Furnace & Boilers door insulation </span></li>
                        <li><span>Expansion joints</span> </li>
                        <li><span>Cable or Pipe wrapping </span> </li>
                        <li><span>High temperature seals or Gaskets </span> </li>
                        <li><span>High temperature Gasketing & Packing in Foundries, </span> </li>
                        <li><span>Refineries, Power plants and steel plants</span> </li>
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

export default CeramicFiberRope
