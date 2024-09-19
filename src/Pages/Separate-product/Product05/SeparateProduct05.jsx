// import React from 'react';
// import productData from "../../../Data/ProductDetail/product05.json";
// import '../ProductsCss.css'
// import product05new from '../../../assets/product05new.png'
// const SeparateProduct = () => {
//     const { technicalSpecifications, features, image, name, fiberFabrics, fiberYarn } = productData.product;

//     if (!technicalSpecifications || !features) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <>
//             <div className='separate-product'>
//                 <div className="separate-product-main-container">
//                     <div className="separate-product-card">
//                         <div className="separate-product-img">
//                             <img src={product05new} alt="" />
//                         </div>
//                         <div className="separate-product-text">
//                             <p className='separate-product-title'>{productData.title}</p>
//                             <h1>{name}</h1>
//                             <p className='separate-product-desc'>{fiberFabrics}</p>
//                             <p className='separate-product-desc'>{fiberYarn}</p>
//                             <button className='separate-product-button'>Download PDF</button>
//                         </div>
//                     </div>
//                     <div className="table-container">
//                         <h2 className='heading-product-page'>Technical Specifications</h2>
//                         <table>
//                             <thead>
//                                 <tr>
//                                     <th>Property</th>
//                                     <th>Details</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <td>Standard Size</td>
//                                     <td>
//                                         Tex: {technicalSpecifications.standardSize?.[0]?.tex || "N/A"} <br />
//                                         Diameter: {technicalSpecifications.standardSize?.[0]?.diameter?.join(', ') || "N/A"}
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>Grade</td>
//                                     <td>{technicalSpecifications.grade || "N/A"}</td>
//                                 </tr>
//                                 <tr>
//                                     <td>LOI</td>
//                                     <td>
//                                         Value: {technicalSpecifications.LOI?.[0]?.value || "N/A"} <br />
//                                         Description: {technicalSpecifications.LOI?.[0]?.description || "N/A"}
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>Tensile Load</td>
//                                     <td>
//                                         Value: {technicalSpecifications.tensileLoad?.[0]?.value || "N/A"} <br />
//                                         Description: {technicalSpecifications.tensileLoad?.[0]?.description || "N/A"}
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>Chemical Composition</td>
//                                     <td>
//                                         SiO<sub>2</sub>: {technicalSpecifications.chemicalComposition?.[0]?.SiO2 || "N/A"} <br />
//                                         Al<sub>2</sub>O<sub>3</sub>: {technicalSpecifications.chemicalComposition?.[0]?.Al2O3 || "N/A"} <br />
//                                         ZrO<sub>2</sub>: {technicalSpecifications.chemicalComposition?.[0]?.ZrO2 || "N/A"} <br />
//                                         Fe<sub>2</sub>O<sub>3</sub>: {technicalSpecifications.chemicalComposition?.[0]?.Fe2O3 || "N/A"}
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </table>

//                         <h2 className='heading-product-page'>Features</h2>
//                         <table>
//                             <thead>
//                                 <tr>
//                                     <th>Feature</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {features.map((feature, index) => (
//                                     <tr key={index}>
//                                         <td>{feature}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default SeparateProduct;




import React from 'react';
import productData from "../../../Data/ProductDetail/product05.json";
import '../ProductsCss.css'
import product05new from '../../../assets/product05new.png'
import { FaRegFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom'
const SeparateProduct = () => {
    const { technicalSpecifications, features, image, name, fiberFabrics, fiberYarn } = productData.product;

    if (!technicalSpecifications || !features) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className='separate-product'>
                <div className="separate-product-main-container">
                    <div className="separate-product-card">
                        <div className="separate-product-img">
                            <img src={product05new} alt="" />
                        </div>
                        <div className="separate-product-text">
                            {/* <p className='separate-product-title'>{productData.title}</p> */}
                            <h1>Polyurethane foams</h1>
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
                        <p className='separate-product-desc'>Shree PUF rigid polyurethane foams have been
                            successfully used for many years in the oil and gas
                            industry for service temperatures of up to 110oC.. This
                            material is resistant to water ingress, provides much
                            better insulation values than many other insulation
                            materials and also offers structural support of the
                            pipeline due to its high compressive strength. A
                            polyurethane is polymer composed of a chain of
                            organic units joined by carbamate (urethane) links.

                        </p>
                    </div>
                    <hr className='separate-product-hr' />
                    <div>
                        <div class="key-features">
                            <h3>Key Features:</h3>
                            <ul>
                                <li><span>Durable</span></li>
                                <li><span>Pre-Fabricated and ready to use</span></li>
                                <li><span>Fire retardant</span></li>
                                <li><span>Construction friendly</span></li>
                                <li><span>Sawing and Shaping not required at site</span></li>
                                <li><span>Available in various density and dimensions as per customer requirement </span></li>
                                <li><span>Excellent Thermal conductivity</span></li>
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
    );
};

export default SeparateProduct;