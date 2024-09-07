import React from 'react';
import productData from "../../../Data/ProductDetail/product05.json";
import '../ProductsCss.css'
import product05new from '../../../assets/product05new.png'
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
                            <p className='separate-product-title'>{productData.title}</p>
                            <h1>{name}</h1>
                            <p className='separate-product-desc'>{fiberFabrics}</p>
                            <p className='separate-product-desc'>{fiberYarn}</p>
                            <button className='separate-product-button'>Download PDF</button>
                        </div>
                    </div>
                    <div className="table-container">
                        <h2 className='heading-product-page'>Technical Specifications</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Property</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Standard Size</td>
                                    <td>
                                        Tex: {technicalSpecifications.standardSize?.[0]?.tex || "N/A"} <br />
                                        Diameter: {technicalSpecifications.standardSize?.[0]?.diameter?.join(', ') || "N/A"}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Grade</td>
                                    <td>{technicalSpecifications.grade || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td>LOI</td>
                                    <td>
                                        Value: {technicalSpecifications.LOI?.[0]?.value || "N/A"} <br />
                                        Description: {technicalSpecifications.LOI?.[0]?.description || "N/A"}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tensile Load</td>
                                    <td>
                                        Value: {technicalSpecifications.tensileLoad?.[0]?.value || "N/A"} <br />
                                        Description: {technicalSpecifications.tensileLoad?.[0]?.description || "N/A"}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Chemical Composition</td>
                                    <td>
                                        SiO<sub>2</sub>: {technicalSpecifications.chemicalComposition?.[0]?.SiO2 || "N/A"} <br />
                                        Al<sub>2</sub>O<sub>3</sub>: {technicalSpecifications.chemicalComposition?.[0]?.Al2O3 || "N/A"} <br />
                                        ZrO<sub>2</sub>: {technicalSpecifications.chemicalComposition?.[0]?.ZrO2 || "N/A"} <br />
                                        Fe<sub>2</sub>O<sub>3</sub>: {technicalSpecifications.chemicalComposition?.[0]?.Fe2O3 || "N/A"}
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <h2 className='heading-product-page'>Features</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                </tr>
                            </thead>
                            <tbody>
                                {features.map((feature, index) => (
                                    <tr key={index}>
                                        <td>{feature}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SeparateProduct;