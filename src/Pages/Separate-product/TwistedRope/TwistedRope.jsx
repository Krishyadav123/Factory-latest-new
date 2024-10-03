import '../ProductsCss.css'
// import data from "./products01.json"
// import product01new from '../../../assets/product01new.jpg'
import Parelax from '../../../Components/ParelaxEffect/Parelax'
// import parelax from '../../../Components/ParelaxEffect/Parelax'
import image03 from '../../../assets/AboutPageimg/image03.jpg'
import { FaRegFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const TwistedRope = () => {
  let image = 'https://res.cloudinary.com/dwvxuesrd/image/upload/v1727949488/shreeinsul/products/Shreeinsul%20Ceramic%20twisted%20Rope/sz0w29ptnzctfddq0bsb.jpg'
    return (
        <>
        <Parelax heading={"ShreeCera Textile Products"} backgroundImage={image03} />
              <div className='separate-product'>
                <div className="separate-product-main-container">
                  <div className="separate-product-card">
                    <div className="separate-product-img">
                      <img src={image} alt="" />
                    </div>
                    <div className="separate-product-text">
                      {/* <p className='separate-product-title'>{productData.title}</p> */}
                      <h1>ShreeCera Textile Products</h1>
                      <h2>Shreeinsul Ceramic Textile Products</h2>
                      <a href="/path/to/your/file.pdf" download="filename.pdf">
                        <div className='download-pdf'>
                          <FaRegFilePdf className='download-pdf-icon' />
                          <p>Download PDF</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className='separate-product-desc'>ShreeCera Twisted ropes are made of Superior Quality Ceramic fiber yarn reinforced with fiber glass / ss wire / both SS wire & fiber glass yarn. ShreeCera ropes are light weight and high temperature resistance. These ropes are made of long ceramic fibers twisted together to improve the strength for pulling and connecting. These ropes contain some quantum of organic carrier which helps to establish physical formation of products which charred out at higher temperature. 

                    </p>
                  </div>
                  <hr className='separate-product-hr' />
                  <div>
                    <div className="key-features">
                      <h3>Key Features:</h3>
                      <ul>
                        <li><span>Furnace & Boilers door insulation </span></li>
                        <li><span>Expansion joints </span> </li>
                        <li><span>Cable or Pipe wrapping</span> </li>
                        <li><span>High temperature seals or Gaskets </span> </li>
                        <li><span>High temperature Gasketing & Packing in Foundries,</span> </li>
                        <li><span>Refineries, Power plants and steel plants  </span> </li>
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

export default TwistedRope
