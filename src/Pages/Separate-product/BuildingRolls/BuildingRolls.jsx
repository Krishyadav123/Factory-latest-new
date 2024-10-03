import '../ProductsCss.css'
// import data from "./products01.json"
// import product01new from '../../../assets/product01new.jpg'
import Parelax from '../../../Components/ParelaxEffect/Parelax'
// import parelax from '../../../Components/ParelaxEffect/Parelax'
import image03 from '../../../assets/AboutPageimg/image03.jpg'
import { FaRegFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const BuildingRolls = () => {
  let image = 'https://res.cloudinary.com/dwvxuesrd/image/upload/v1727948560/shreeinsul/products/Shreeinsul%20Building%20Rolls/ix8wc0puozai93eyfppr.webp'
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
                      <h2>Shreeinsul Building Rolls </h2>
                      <a href="/path/to/your/file.pdf" download="filename.pdf">
                        <div className='download-pdf'>
                          <FaRegFilePdf className='download-pdf-icon' />
                          <p>Download PDF</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className='separate-product-desc'>Shreeinsul Lamella Batts are used in sandwich panels, sandwich Doors for thermal insulation and pressure resistance. Lamella Batts are placed between two metal sheets for used in the partitions, Roof panels. These are also used in cold storage rooms. Lamella Batts conforming to IS:8183:1993, ASTM C 612, BS:3958 (Part - 4) & EN:14303:2013. <br /> NOTE:  Water repellent boards are available on request


                    </p>
                  </div>
                  <hr className='separate-product-hr' />
                  <div>
                    <div className="key-features">
                      <h3>Key Features:</h3>
                      <ul>
                        <li><span>Excellent thermal</span></li>
                        <li><span>Sound absorption</span> </li>
                        <li><span>Fire protection</span> </li>
                        <li><span>Outstanding biological properties, as they are rot-proof</span> </li>
                        <li><span>No fungi growth</span> </li>
                        <li><span>Reusable and recyclable products</span> </li>
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

export default BuildingRolls
