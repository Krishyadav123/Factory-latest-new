import '../ProductsCss.css'
// import data from "./products01.json"
import product01new from '../../../assets/product01new.jpg'
import Parelax from '../../../Components/ParelaxEffect/Parelax'
// import parelax from '../../../Components/ParelaxEffect/Parelax'
import image03 from '../../../assets/AboutPageimg/image03.jpg'
import { FaRegFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const ClothTape = () => {
  return (
    <>
    <Parelax heading={"ShreeCera Textile Products"} backgroundImage={image03} />
          <div className='separate-product'>
            <div className="separate-product-main-container">
              <div className="separate-product-card">
                <div className="separate-product-img">
                  <img src={product01new} alt="" />
                </div>
                <div className="separate-product-text">
                  {/* <p className='separate-product-title'>{productData.title}</p> */}
                  <h1>    ShreeCera Textile Products</h1>
                  <h2>Shreeinsul Ceramic Cloth & tape </h2>
                  <a href="/path/to/your/file.pdf" download="filename.pdf">
                    <div className='download-pdf'>
                      <FaRegFilePdf className='download-pdf-icon' />
                      <p>Download PDF</p>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <p className='separate-product-desc'>Shreecera Cloth/Tape are woven from Superior Quality ceramic fiber yarn and reinforced with Fiberglass/SS wire.  Cloth and Tapes have high temperature resistance. These cloths contain specific quantum of organic carrier which helps to establish physical formation of products which charred out at higher temperature. The continuous withstand temperature of the cloth & Tape is 1000° C 


                </p>
              </div>
              <hr className='separate-product-hr' />
              <div>
                <div className="key-features">
                  <h3>Key Features:</h3>
                  <ul>
                    <li><span>No Key feathures</span></li>
                    {/* <li><span>Sound absorption</span> </li>
                    <li><span>Fire protection</span> </li>
                    <li><span>Outstanding biological properties, as they are rot-proof</span> </li>
                    <li><span>No fungi growth</span> </li>
                    <li><span>Reusable and recyclable products</span> </li> */}
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
