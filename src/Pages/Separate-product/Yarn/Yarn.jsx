import '../ProductsCss.css'
// import data from "./products01.json"
// import product01new from '../../../assets/product01new.jpg'
import Parelax from '../../../Components/ParelaxEffect/Parelax'
// import parelax from '../../../Components/ParelaxEffect/Parelax'
import image03 from '../../../assets/AboutPageimg/image03.jpg'
import { FaRegFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import YarnPDF from '../../../assets/shree pdf/Yarn.pdf';

const Yarn = () => {
  let image ='https://res.cloudinary.com/dwvxuesrd/image/upload/v1727938255/shreeinsul/products/Ceramic%20Fiber%20Yarn/yabr5zcpyys4kfh7lllm.jpg'
    return (
        <>
        <Parelax heading={"Shreeinsul Textile Products"} backgroundImage={image03} />
              <div className='separate-product'>
                <div className="separate-product-main-container">
                  <div className="separate-product-card">
                    <div className="separate-product-img">
                      <img src={`${image}`} alt="" />
                    </div>
                    <div className="separate-product-text">
                    
                      <h1>Shreeinsul Textile Products</h1>
                      <h2>Shreeinsul Yarn </h2>
                      <a href={YarnPDF} download="Yarn.pdf">
                        <div className='download-pdf'>
                          <FaRegFilePdf className='download-pdf-icon' />
                          <p>Download PDF</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className='separate-product-desc'>Shreeinsul Ceramic fiber Yarn are made from high quality Alumino silicate fibers with reinforcement of SS wire / continuous fiberglass filament to increase  handling strength during installation and enhance fiber durability. The fiberglass reinforcement has temperature rating of 650°C. These yarns are contain 15%  organic carrier which helps to establish physical formation of products. Shreeinsul Ceramic fiber yarns are manufactured using advance technology and machinery of carding, spinning and doubling system. 
                    </p>
                  </div>
                  <hr className='separate-product-hr' />
                  <div>
                    <div className="key-features">
                      <h3>Key Features:</h3>
                      <ul>
                        <li><span> High quality Alumino silicate fibers</span></li>
                        <li><span>Advance mechanical twist for strength </span> </li>
                     
                        <li><span>Metalic & Non metallic yarns with higher Tensile strength</span> </li>
                        <li><span>High Temperature resistance</span> </li>
                     
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

export default Yarn
