/* eslint-disable react/no-unescaped-entities */
import '../ProductsCss.css'
// import data from "./products01.json"
// import product01new from '../../../assets/product01new.jpg'
import Parelax from '../../../Components/ParelaxEffect/Parelax'
// import parelax from '../../../Components/ParelaxEffect/Parelax'
import image03 from '../../../assets/AboutPageimg/image03.jpg'
import { FaRegFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const PIR = () => {
  let image = 'https://res.cloudinary.com/dwvxuesrd/image/upload/v1727938749/shreeinsul/products/PUF-PIR%20Products/ymtzfkmvj2jnihbv17ut.webp'
    return (
        <>
        <Parelax heading={"Shree Foam PIR /PUF Products"} backgroundImage={image03} />
              <div className='separate-product'>
                <div className="separate-product-main-container">
                  <div className="separate-product-card">
                    <div className="separate-product-img">
                      <img src={image} alt="" />
                    </div>
                    <div className="separate-product-text">
                      {/* <p className='separate-product-title'>{productData.title}</p> */}
                      <h1>Shreeinsul Foam PIR /PUF Products</h1>
                      <h2>Polyisocyanurate Foam (PIR)</h2>
                      <a href="/path/to/your/file.pdf" download="filename.pdf">
                        <div className='download-pdf'>
                          <FaRegFilePdf className='download-pdf-icon' />
                          <p>Download PDF</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className='separate-product-desc'>ShreeFoam PIR CFC and HCFC free rigid insulation foam products having operating temperature range from -200°C to +150°C. ShreeFoam PIR foams are available in slab, pipe section and a choice of profiles & blocks. These are prefabricated using CNC machines from Free rise buns made in discontinous process. 

These foams are special purpose high strength insulating material adequate for low temperature installations as in LNG/LPG Pipelines & Equipments


                    </p>
                  </div>
                  <hr className='separate-product-hr' />
                  <div>
                    <div className="key-features">
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

export default PIR