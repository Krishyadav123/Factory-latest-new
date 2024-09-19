// import React from 'react'
// import '../ProductsCss.css'
// import productData from '../../../Data/ProductDetail/product04.json'
// import product04new from '../../../assets/product04new.png'

// const SeparateProduct = () => {
//     const { Product, Chemical_Composition, Properties } = productData;
//     // Function to render table rows from data
//     const renderTableRows = (data) => {
//         return data.map((item, index) => (
//             <tr key={index}>
//                 <td>{item.length_mm.join(", ")}</td>
//                 <td>{item.width_mm.join(", ")}</td>
//                 <td>{item.thickness_mm}</td>
//                 <td>{item.density_kg_m3.join(", ")}</td>
//             </tr>
//         ));
//     };

//     return (
//         <div className='separate-product'>
//             <div className="separate-product-main-container">



//                 <div className="separate-product-card">
//                     <div className="separate-product-img">
//                         <img src={product04new} alt="Product" />
//                     </div>
//                     <div className="separate-product-text">
//                         <p className='separate-product-title'>{productData.title}</p>
//                         <h1>{productData.productName}</h1>
//                         <p className='separate-product-desc'>{productData.description}</p>
//                         <button className='separate-product-button'>Download PDF</button>
//                     </div>
//                 </div>




//                 <h2 className='heading-product-page'>Standard Dimensions</h2>
//                 <div className='sroll-table'>
//                     <h3>Cloth</h3>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Length (mm)</th>
//                                 <th>Width (mm)</th>
//                                 <th>Thickness (mm)</th>
//                                 <th>Density (kg/m³)</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {renderTableRows(productData.standardDimensions.cloth)}
//                         </tbody>
//                     </table>
//                     <h3>Tape</h3>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Length (mm)</th>
//                                 <th>Width (mm)</th>
//                                 <th>Thickness (mm)</th>
//                                 <th>Density (kg/m³)</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {renderTableRows(productData.standardDimensions.tape)}
//                         </tbody>
//                     </table>
//                 </div>
//                 <div className="product-table">
//                     <h2>{Product}</h2>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Chemical Composition</th>
//                                 <th>Value</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {Object.entries(Chemical_Composition).map(([key, value]) => (
//                                 <tr key={key}>
//                                     <td>{key}</td>
//                                     <td>{value}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Properties</th>
//                                 <th>Value</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {Object.entries(Properties).map(([key, value]) => (
//                                 <tr key={key}>
//                                     <td>{key}</td>
//                                     <td>{value}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>

//                 </div>
//                 <div className="product-04-text-app">
//                     <div className="product-04-one">
//                         <h2>Applications</h2>
//                         <ul>
//                             {productData.applications.map((application, index) => (
//                                 <li key={index}>{application}</li>
//                             ))}
//                         </ul>
//                     </div>
//                     <div className="product-04-two">
//                         <h2>Other Sizes :-</h2>
//                         <p>{productData.otherSizes}</p>

//                         <h2>Additional Options :-</h2>
//                         <p>{productData.additionalOptions}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         // </div >
//     )
// }

// export default SeparateProduct
import React from 'react'
import '../ProductsCss.css'
import productData from '../../../Data/ProductDetail/product04.json'
import product04new from '../../../assets/product04new.png'
import { FaRegFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom'
const SeparateProduct = () => {
    
    return (
        <div className='separate-product'>
            <div className="separate-product-main-container">



                <div className="separate-product-card">
                    <div className="separate-product-img">
                        <img src={product04new} alt="Product" />
                    </div>
                    <div className="separate-product-text">
                        {/* <p className='separate-product-title'>{productData.title}</p> */}
                        <h1>PUF PIPE SUPPORT</h1>
                        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
                        <a href="/path/to/your/file.pdf" download="filename.pdf">
                            <div className='download-pdf'>
                                <FaRegFilePdf className='download-pdf-icon' />
                                <p>Download PDF</p>
                            </div>

                        </a>
                    </div>
                </div>
                <div>
                    <p className='separate-product-desc'>Shree Foam offers a wide range of PUF supports. The normal density of PUF support ranges
from 80 kg/m3 to 500 kg/m3. The higher density PUF supports can be made available against
specific customer requirements. Shree Foam higher density supports enable higher loads
without increase in surface area. Shree Foam supports are does not required sawing and
shaping at site, the supports designed to suit exact pipe OD. Shree Foam supports are having
excellent closed cell structure and it does not permit water / water vapour penetration.

                    </p>
                </div>
                <hr className='separate-product-hr' />
                <div>
                    <div class="key-features">
                        <h3>Key Features:</h3>
                        <ul>
                            <li><span>Durable</span></li>
                            <li><span>Pre-Fabricated and ready to use</span></li>
                            <li><span>Sawing and Shaping not required at site</span></li>
                            <li><span>Available in various density and dimensions as per customer requirement </span></li>
                            <li><span>Excellent Thermal conductivity</span></li>
                            <li><span>CFC free chemical system</span></li>
                            <li><span>Leak proof</span></li>
                            <li><span>Temperature ranges from - 200°C to max +100°C</span></li>
                            <li><span>Excellent dimensional density</span></li>
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
        // </div >
    )
}

export default SeparateProduct