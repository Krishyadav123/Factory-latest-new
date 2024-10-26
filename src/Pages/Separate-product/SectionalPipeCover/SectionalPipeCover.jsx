/* eslint-disable react/no-unescaped-entities */
import '../ProductsCss.css'
// import data from "./products01.json"
// import product01new from '../../../assets/product01new.jpg'
import Parelax from '../../../Components/ParelaxEffect/Parelax'
// import parelax from '../../../Components/ParelaxEffect/Parelax'
import image03 from '../../../assets/AboutPageimg/image03.jpg'
import { FaRegFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import SectionalPipeCoverPDF from '../../../assets/shree pdf/PipeCovers.pdf';

function SectionalPipeCover() {

  let image = 'https://res.cloudinary.com/dwvxuesrd/image/upload/v1727947589/shreeinsul/products/Shreeinsul%20Sectional%20Pipe%20Covers/dx7xiiuf3dph8nu2ouyc.jpg'

    return (
        <>
        <Parelax heading={"Shreeinsul Stone Wool Products"} backgroundImage={image03} />
              <div className='separate-product'>
                <div className="separate-product-main-container">
                  <div className="separate-product-card">
                    <div className="separate-product-img">
                      <img src={image} alt="" />
                    </div>
                    <div className="separate-product-text">
                      {/* <p className='separate-product-title'>{productData.title}</p> */}
                      <h1>Shreeinsul Stone Wool Products</h1>
                      <h2>Shreeinsul Sectional Pipe Covers</h2>
                      <a href={SectionalPipeCoverPDF} download="SectionalPipeCover.pdf">
                        <div className='download-pdf'>
                          <FaRegFilePdf className='download-pdf-icon' />
                          <p>Download PDF</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className='separate-product-desc'>Shreeinsul Sectional Pipe Covers (SPC) offers a quick solution for insulation needs, combining exceptional dimensional stability with durability and tuffness. These SPCs are made from long non-combustible rock fibres bonded with thermosetting resin binders. The SPC's are available plain or with FSK facings. This material conforms to ASTM C547 & IS 9842
                    </p>
                  </div>
                  <hr className='separate-product-hr' />
                  <div>
                    <div className="key-features">
                      <h3>Key Features:</h3>
                      <ul>
                        <li><span>Dimensionally stable</span></li>
                        <li><span>Corrosion resistance</span> </li>
                        <li><span>Lightweight</span> </li>
                        <li><span>Good compressive strength</span> </li>
                        <li><span>Low Thermal Properties</span> </li>
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

export default SectionalPipeCover