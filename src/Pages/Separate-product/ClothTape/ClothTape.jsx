import '../ProductsCss.css'
// import data from "./products01.json"
// import product01new from '../../../assets/product01new.jpg'
import Parelax from '../../../Components/ParelaxEffect/Parelax'
// import parelax from '../../../Components/ParelaxEffect/Parelax'
import image03 from '../../../assets/AboutPageimg/image03.jpg'
import { FaRegFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import ClothTapePDF from '../../../assets/shree pdf/Cloth&Tape.pdf';

const ClothTape = () => {
  let image ='https://res.cloudinary.com/dwvxuesrd/image/upload/v1727938668/shreeinsul/products/Ceramic%20Fiber%20Yarn/ndmkkamdswxntnbup4xq.jpg'
  return (
    <>
    <Parelax heading={"Shreeinsul Textile Products"} backgroundImage={image03} />
          <div className='separate-product'>
            <div className="separate-product-main-container">
              <div className="separate-product-card">
                <div className="separate-product-img">
                  <img src={image} alt="" />
                </div>
                <div className="separate-product-text">
                  {/* <p className='separate-product-title'>{productData.title}</p> */}
                  <h1>    Shreeinsul Textile Products</h1>
                  <h2>Shreeinsul Cloth & tape </h2>
                  <a href={ClothTapePDF} download="ClothTape.pdf">
                    <div className='download-pdf'>
                      <FaRegFilePdf className='download-pdf-icon' />
                      <p>Download PDF</p>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <p className='separate-product-desc'>Shreeinsul Cloth/Tape are woven from Superior Quality ceramic fiber yarn and reinforced with Fiberglass/SS wire.  Cloth and Tapes have high temperature resistance. These cloths contain specific quantum of organic carrier which helps to establish physical formation of products which charred out at higher temperature. The continuous withstand temperature of the cloth & Tape is 1000° C 
                </p>
              </div>
              <hr className='separate-product-hr' />
              <div>
                <div className="key-features">
                  <h3>Applications:</h3>
                  <b><h4>Metalic Textile </h4></b>
                  <ul>
                    <li><span>Coke oven door seal preventing gas leakage</span></li>
                    <li><span>Between refractory and door jamb.</span> </li>
                    <li><span>Piping insulation</span> </li>
                    <li><span>Hot top seal</span> </li>
                    <li><span>Coke oven ascension pipe seal, preventing fume</span> </li>
                    <li><span>Turbine insulation - Ceramic pads and make a jacket</span> </li>
                    <li><span>emission on exhaust collection system </span> </li>
                  </ul>

                  <b><h4>Non Metalic</h4></b>
                  <ul>
                    <li><span>Insulation between anode buss and box </span></li>
                    <li><span>Asbestos free and ideal replacement for asbestos.</span> </li>
                    <li><span>Furnace doors and radiant tube seals </span> </li>
                    <li><span>Blast furnace stove expansion joint </span> </li>
                    <li><span>Welding curtains </span> </li>
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

export default ClothTape
