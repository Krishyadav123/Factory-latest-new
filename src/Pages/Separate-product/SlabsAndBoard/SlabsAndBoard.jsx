import '../ProductsCss.css'
// import data from "./products01.json"
// import product01new from '../../../assets/product01new.jpg'
import Parelax from '../../../Components/ParelaxEffect/Parelax'
// import parelax from '../../../Components/ParelaxEffect/Parelax'
import image03 from '../../../assets/AboutPageimg/image03.jpg'
import { FaRegFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import SlabsAndBoardPDF from '../../../assets/shree pdf/ShreeinsulBoards.pdf';

function SlabsAndBoard() {

  let image ='https://res.cloudinary.com/dwvxuesrd/image/upload/v1727947390/shreeinsul/products/Shreeinsul%20Boards/euue7goxjeddg4sv1zdu.jpg'

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
                  <h2>Shreeinsul Boards</h2>
                  <a href={SlabsAndBoardPDF} download="SlabsAndBoard.pdf">
                    <div className='download-pdf'>
                      <FaRegFilePdf className='download-pdf-icon' />
                      <p>Download PDF</p>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <p className='separate-product-desc'>Shreeinsul Stone Wool Resin Bonded Boards and Slabs are produced from loose stone wool and bonded with resin to form a robust and versatile insulation material. This unique composition results in a product that excels in thermal properties, sound absorption, and fire resistance.
                </p>
              </div>
              <hr className='separate-product-hr' />
              <div>
                <div className="key-features">
                  <h3>Key Features:</h3>
                  <ul>
                    <li><span>Versatile applicability</span></li>
                    <li><span>Excellent thermal insulation</span> </li>
                    <li><span>Fire resistance</span> </li>
                    <li><span>Sound absorption</span> </li>
                    <li><span>Moisture resistance</span> </li>
                    <li><span>Dimensionally stable</span></li>
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

export default SlabsAndBoard