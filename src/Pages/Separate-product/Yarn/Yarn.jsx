import '../ProductsCss.css'
// import data from "./products01.json"
import product01new from '../../../assets/product01new.jpg'
import Parelax from '../../../Components/ParelaxEffect/Parelax'
// import parelax from '../../../Components/ParelaxEffect/Parelax'
import image03 from '../../../assets/AboutPageimg/image03.jpg'
import { FaRegFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const Yarn = () => {
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
                      <h2>ShreeCera Yarn </h2>
                      <a href="/path/to/your/file.pdf" download="filename.pdf">
                        <div className='download-pdf'>
                          <FaRegFilePdf className='download-pdf-icon' />
                          <p>Download PDF</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className='separate-product-desc'>ShreeCera Ceramic fiber Yarn are made from high quality Alumino silicate fibers with reinforcement of SS wire / continuous fiberglass filament to increase  handling strength during installation and enhance fiber durability. The fiberglass reinforcement has temperature rating of 650°C. These yarns are contain 15%  organic carrier which helps to establish physical formation of products. ShreeCera Ceramic fiber yarns are manufactured using advance technology and machinery of carding, spinning and doubling system. 

                    </p>
                  </div>
                  <hr className='separate-product-hr' />
                  <div>
                    <div className="key-features">
                      <h3>Key Features:</h3>
                      <ul>
                        <li><span> Production in textiles  </span></li>
                        <li><span>Production in Ropes</span> </li>
                        {/* <li><span>Cable or Pipe wrapping </span> </li> */}
                        <li><span>Sewing thread for high temperature textiles </span> </li>
                        <li><span>High temperature gaskets </span> </li>
                        {/* <li><span>Refineries, Power plants and steel plants</span> </li> */}
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
