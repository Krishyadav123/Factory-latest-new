/* eslint-disable react/no-unescaped-entities */
import '../ProductsCss.css'
// import data from "./products01.json"
// import product01new from '../../../assets/product01new.jpg'
import Parelax from '../../../Components/ParelaxEffect/Parelax'
// import parelax from '../../../Components/ParelaxEffect/Parelax'
// import image03 from '../../../assets/AboutPageimg/image03.jpg'
import { FaRegFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import LooseWoolPDF from '../../../assets/shree pdf/LooseWool.pdf';

let image ='https://res.cloudinary.com/dcsentl2f/image/upload/w_400,h_300,c_scale,q_auto,f_auto/v1731049685/shreeInsul/PNG/t2dl7xb26qgtlxnxckuo.png'

let parelaxVideo = "https://res.cloudinary.com/dcsentl2f/video/upload/v1731051891/shreeInsul/PNG/ataduek7gcenyconqeug.mp4"

function LooseWool() {

    return (
        <>
        <Parelax heading={"Shreeinsul Stone Wool Products"} backgroundVideo={parelaxVideo} />
              <div className='separate-product'>
                <div className="separate-product-main-container">
                  <div className="separate-product-card">
                    <div className="separate-product-img">
                      <img src={image} alt="" />
                    </div>
                    <div className="separate-product-text">
                      {/* <p className='separate-product-title'>{productData.title}</p> */}
                      <h1>Shreeinsul Stone Wool Products</h1>
                      <h2>Shreeinsul Loose Wool</h2>
                      <a href={LooseWoolPDF} download="LooseWool.pdf">
                        <div className='download-pdf'>
                          <FaRegFilePdf className='download-pdf-icon' />
                          <p>Download PDF</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className='separate-product-desc'>Loose wool insulation, also known as loose-fill wool insulation, is an eco-friendly insulation material made from natural basalt rock. Provides excellent thermal resistance, sound absorption, fire-resistant and ideal for filling cavity and un-even surface
                    </p>
                  </div>
                  <hr className='separate-product-hr' />
                  <div>
                    <div className="key-features">
                      <h3>Key Features:</h3>
                      <ul>
                        <li><span>Excellent thermal insulation</span></li>
                        <li><span>Fire resistance</span> </li>
                        <li><span>Sound absorption </span> </li>
                        <li><span>Moisture resistance</span> </li>
                        <li><span>Lightweight</span> </li>
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

export default LooseWool
