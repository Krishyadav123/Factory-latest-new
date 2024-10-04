import '../ProductsCss.css'
// import data from "./products01.json"
// import product01new from '../../../assets/product01new.jpg'
import Parelax from '../../../Components/ParelaxEffect/Parelax'
// import parelax from '../../../Components/ParelaxEffect/Parelax'
import image03 from '../../../assets/AboutPageimg/image03.jpg'
import { FaRegFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import YarnBraidedRopesPDF from '../../../assets/shree pdf/BraidedRope.pdf';

const YarnBraidedRopes = () => {
  let image = 'https://res.cloudinary.com/dwvxuesrd/image/upload/v1727949297/shreeinsul/products/Shreeinsul%20Ceramic%20Yarn%20Braided%20Rope/tltrhylic1333ooex8hw.avif'
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
                      <h1>    ShreeCera Textile Products</h1>
                      <h2>ShreeCera Yarn Braided Ropes </h2>
                      <a href={YarnBraidedRopesPDF} download="YarnBraidedRopes.pdf">
                        <div className='download-pdf'>
                          <FaRegFilePdf className='download-pdf-icon' />
                          <p>Download PDF</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className='separate-product-desc'>ShreeCera Yarn Braided Ropes are made from Ceramic fiber Yarn braided with the inner core of SS wire or FG yarn reinforced for additional strength to give excellent handling strength. 

These ropes are manufactured from high performance ceramic fibers. ShreeCera Ceramic ropes are high temperature resistance. ShreeCera ropes are made from long ceramic (fibers more than 200mm) coupled with SS wire to improve the strength (Tensile Strength). These ropes  contain 10 – 12% organic carrier which helps to establish physical formation of products and burns out at about 400° C. 
    
    
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

export default YarnBraidedRopes
