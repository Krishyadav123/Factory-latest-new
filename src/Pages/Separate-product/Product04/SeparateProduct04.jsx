import React from 'react'
import '../ProductsCss.css'
import productData from '../../../Data/ProductDetail/product04.json'
import product04new from '../../../assets/product04new.png'

const SeparateProduct = () => {
    const { Product, Chemical_Composition, Properties } = productData;
    // Function to render table rows from data
    const renderTableRows = (data) => {
        return data.map((item, index) => (
            <tr key={index}>
                <td>{item.length_mm.join(", ")}</td>
                <td>{item.width_mm.join(", ")}</td>
                <td>{item.thickness_mm}</td>
                <td>{item.density_kg_m3.join(", ")}</td>
            </tr>
        ));
    };

    return (
        <div className='separate-product'>
            <div className="separate-product-main-container">



                <div className="separate-product-card">
                    <div className="separate-product-img">
                        <img src={product04new} alt="Product" />
                    </div>
                    <div className="separate-product-text">
                        <p className='separate-product-title'>{productData.title}</p>
                        <h1>{productData.productName}</h1>
                        <p className='separate-product-desc'>{productData.description}</p>
                        <button className='separate-product-button'>Download PDF</button>
                    </div>
                </div>




                <h2 className='heading-product-page'>Standard Dimensions</h2>
                <div className='sroll-table'>
                    <h3>Cloth</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Length (mm)</th>
                                <th>Width (mm)</th>
                                <th>Thickness (mm)</th>
                                <th>Density (kg/m³)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTableRows(productData.standardDimensions.cloth)}
                        </tbody>
                    </table>
                    <h3>Tape</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Length (mm)</th>
                                <th>Width (mm)</th>
                                <th>Thickness (mm)</th>
                                <th>Density (kg/m³)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTableRows(productData.standardDimensions.tape)}
                        </tbody>
                    </table>
                </div>
                <div className="product-table">
                    <h2>{Product}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Chemical Composition</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(Chemical_Composition).map(([key, value]) => (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr>
                                <th>Properties</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(Properties).map(([key, value]) => (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
                <div className="product-04-text-app">
                    <div className="product-04-one">
                        <h2>Applications</h2>
                        <ul>
                            {productData.applications.map((application, index) => (
                                <li key={index}>{application}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="product-04-two">
                        <h2>Other Sizes :-</h2>
                        <p>{productData.otherSizes}</p>

                        <h2>Additional Options :-</h2>
                        <p>{productData.additionalOptions}</p>
                    </div>
                </div>
            </div>
        </div>
        // </div >
    )
}

export default SeparateProduct