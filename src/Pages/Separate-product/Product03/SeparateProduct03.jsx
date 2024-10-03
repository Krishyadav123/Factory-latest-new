// import React from 'react'
// import '../ProductsCss.css'
// import productData from '../../../Data/ProductDetail/product03.json'
// import product03img from '../../../assets/stonewool-pipe-insulation.jpg'

// const SeparateProduct = () => {

//     return (
//         <div className='separate-product'>
//             <div className="separate-product-main-container">
//                 <div className="separate-product-card">
//                     <div className="separate-product-img">
//                         <img src={product03img} alt="Product" />
//                     </div>
//                     <div className="separate-product-text">
//                         <p className='separate-product-title'>{productData.title}</p>
//                         <h1>{productData.productName}</h1>
//                         <p className='separate-product-desc'>{productData.description}</p>
//                         <p className='separate-product-desc'>{productData.shortDescription}</p>
//                         <button className='separate-product-button'>Download PDF</button>
//                     </div>
//                 </div>

//                 <div className="separate-product-detail">
//                     <div className="detail-text">
//                         <div className="detail-text-one">
//                             <h2>Physical Properties</h2>
//                             <p>{productData.physicalProperties.description}</p>
//                             <p>Sizes: {productData.physicalProperties.sizes}</p>
//                         </div>
//                         {/* <div className="line"></div> */}
//                         <div className="detail-text-one">
//                             <h2>Corrosion Resistance</h2>
//                             <p>{productData.corrosionResistance.description}</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="separate-product-detail">
//                     <div className="detail-text">
//                         <div className="detail-text-one">
//                             <h2>pH Neutrality</h2>
//                             <p>{productData.phNeutrality.description}</p>
//                             <p>pH Range: {productData.phNeutrality.phRange}</p>
//                         </div>
//                         {/* <div className="line line-2"></div> */}
//                         <div className="detail-text-one">
//                             <h2>Biological Properties</h2>
//                             <p>{productData.biologicalProperties.description}</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="separate-product-detail">
//                     <div className="detail-text">
//                         <div className="detail-text-one">
//                             <h2>Physical Properties Detailed</h2>
//                             <p>{productData.physicalPropertiesDetailed.description}</p>
//                             <p>Density: {productData.physicalPropertiesDetailed.density}</p>
//                             <p>Thicknesses: {productData.physicalPropertiesDetailed.thicknesses}</p>
//                             <p>Dimensions: {productData.physicalPropertiesDetailed.dimensions}</p>
//                         </div>
//                         {/* <div className="line line-2"></div> */}
//                         <div className="detail-text-one">
//                             <h2>Service Temperature</h2>
//                             <p>{productData.serviceTemperature.description}</p>
//                             <p>Temperature Limit: {productData.serviceTemperature.temperatureLimit}</p>
//                             <p>Note: {productData.serviceTemperature.note}</p>
//                         </div>
//                     </div>
//                 </div>


//                 <div className="separate-product-detail">
//                     <div className="detail-text">
//                         <div className="detail-text-one">
//                             <h2>Handling and Installation</h2>
//                             <p>{productData.handlingAndInstallation.description}</p>
//                         </div>
//                         {/* <div className="line"></div> */}
//                         <div className="detail-text-one">
//                             <h2>Water Absorption</h2>
//                             <p>{productData.waterAbsorption}</p>
//                         </div>
//                     </div>

//                 </div>
//                 <div className="separate-product-detail">
//                     <div className="detail-text">
//                         <div className="detail-text-one detail-text-03">
//                             <h2>Combustibility</h2>
//                             <li>{productData.combustibility.Description}</li>
//                             <li>Fire Classification: {productData.combustibility.FireClassification}</li>
//                             <li>Fire Resistance: {productData.combustibility.FireResistance}</li>
//                             <li>Melting Point: {productData.combustibility.MeltingPoint}</li>
//                             <li>Thermoseal Binders: {productData.combustibility.ThermosealBinders.Evaporation}</li>
//                             <li>Binder Properties: {productData.combustibility.ThermosealBinders.BinderProperties}</li>
//                             <li>Performance: {productData.combustibility.Performance}</li>
//                         </div>
//                     </div>
//                 </div>


//                 <h2  className='heading-product-page'>Thermal Conductivity</h2>
//                 <div className='scroll-table'>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Density</th>
//                                 <th>Temperature</th>
//                                 <th>Value</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {productData.thermalConductivity.values.map((item, index) => (
//                                 <tr key={index}>
//                                     <td>{item.density}</td>
//                                     <td>{item.temperature}</td>
//                                     <td>{item.value}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>

//                 <h2  className='heading-product-page'>Thermal Resistance</h2>
//                 <div className='scroll-table'>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Density</th>
//                                 <th>Temperature</th>
//                                 <th>Value</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {productData.thermalResistance.values.map((item, index) => (
//                                 <tr key={index}>
//                                     <td>{item.density}</td>
//                                     <td>{item.temperature}</td>
//                                     <td>{item.value}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>


//                 <h2  className='heading-product-page'>Dimensions</h2>
//                 <div className='scroll-table table-flext'>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Standard Thickness</th>
//                                 <th>Values (mm)</th>
//                                 <th>Standard Density</th>
//                                 <th>Values (kg/m³)</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {productData.Dimensions.StandardThickness.map((thicknessItem, index) => (
//                                 <tr key={`row-${index}`}>
//                                     <td>Standard</td>
//                                     <td>{thicknessItem.Values.join(', ')}</td>
//                                     <td>Standard</td>
//                                     <td>{productData.Dimensions.StandardDensity[index].Values.join(', ')}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Standard Size</th>
//                                 <th>Width (mm)</th>
//                                 <th>Length (mm)</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {productData.Dimensions.StandardSize.map((item, index) => (
//                                 <tr key={index}>
//                                     <td>Standard</td>
//                                     <td>{item.Width}</td>
//                                     <td>{item.Length}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//                 <div className="note-div">
//                     <p className='note'>Note: {productData.Dimensions.Note}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SeparateProduct
import React from 'react'
import '../ProductsCss.css'
import productData from '../../../Data/ProductDetail/product03.json'
import product03img from '../../../assets/stonewool-pipe-insulation.jpg'
import { FaRegFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const SeparateProduct = () => {

    return (
        <div className='separate-product'>
            <div className="separate-product-main-container">
                <div className="separate-product-card">
                    <div className="separate-product-img">
                        <img src={product03img} alt="Product" />
                    </div>
                    <div className="separate-product-text">
                        {/* <p className='separate-product-title'>{productData.title}</p> */}
                        <h1>CFC and HCFC</h1>
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
                    <p className='separate-product-desc'>ShreeFoam PIR CFC and HCFC free rigid insulation
                        foam product having operating temperature range
                        from -200°C to +150°C. ShreeFoam PIR foams are
                        available in slab, pipe section and a choice of profiles
                        & blocks. These are prefabricated using CNC
                        machines from Free rise buns made in continous
                        process.
                        These foams are special purpose high strength
                        insulating material adequate for low temperature
                        installations as in LNG/LPG Pipelines & Equipments.
                    </p>
                </div>
                <hr className='separate-product-hr' />
                <div>
                    <div class="key-features">
                        <h3>Key Features:</h3>
                        <ul>
                            <li><span>Durable</span></li>
                            <li><span>Pre-Fabricated and ready to use</span></li>
                            <li><span>Fire retardant </span></li>
                            <li><span>Available in Butt & Shiplap Joints</span></li>
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
    )
}

export default SeparateProduct