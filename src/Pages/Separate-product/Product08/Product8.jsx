import React from 'react'
import productData from '../../../Data/ProductDetail/product01.json'
// import data from "./products01.json"
import product01new from '../../../assets/product01new.jpg'
import '../ProductsCss.css'
const SeparateProduct = () => {

    
      // const { properties } = productData.productDetails;
    }
const Product8 = () => {
  return (
    <div className='separate-product'>
    <div className="separate-product-main-container">
      <div className="separate-product-card">
        <div className="separate-product-img">
          <img src={product01new} alt="" />
        </div>
        <div className="separate-product-text">
          <p className='separate-product-title'>{productData.title}</p>
          <h1>{productData.product.name}</h1>
          <p className='separate-product-desc'>{productData.product.description}</p>
        </div>
      </div>
      <div className="separate-product-detail">
        <div className="detail-text">
          <div className="detail-text-one">
            <h2>Combustibility</h2>
            <p>{productData.properties.combustibility}</p>
          </div>
          {/* <div className="line"></div> */}
          <div className="detail-text-one">
            <h2>Corrosion Resistant</h2>
            <p>{productData.properties.corrosionResistance}</p>
          </div>
        </div>
      </div>
      <div className="separate-product-detail">
        <div className="detail-text">
          <div className="detail-text-one">
            <h2>phNeutrality</h2>
            <p>{productData.properties.phNeutrality}</p>
          </div>
          {/* <div className="line line-2"></div> */}
          <div className="detail-text-one">
            <h2>biologicalProperties</h2>
            <p>{productData.properties.biologicalProperties}</p>
          </div>

        </div>
      </div>
      <div className="separate-product-detail">
        <div className="detail-text">
          <div className="detail-text-one">
            <h2>CuttingInstallation</h2>
            <p>{productData.properties.easyHandlingCuttingInstallation}</p>
          </div>
          {/* <div className="line line-2"></div> */}
          <div className="detail-text-one">
            <h2>physicalProperties</h2>
            <p>{productData.properties.physicalProperties}</p>
          </div>

        </div>
      </div>
      <div className="separate-product-detail">
        <div className="detail-text">
          <div className="detail-text-one">
            <h2>soundAbsorptionCoefficient</h2>
            <p>{productData.properties.soundAbsorptionCoefficient}</p>
          </div>
          {/* <div className="line line-2"></div> */}
          <div className="detail-text-one">
            <h2>serviceTemperature</h2>
            <p>{productData.properties.serviceTemperature}</p>
          </div>

        </div>
      </div>
      <div >
        {/* <h1>{productData.productDetails.name}</h1> */}

        <h2 className='heading-product-page'>Thermal Conductivity</h2>
        <div className='sroll-table'>
          <table>
            <thead>
              <tr>
                <th>Density</th>
                <th>Temperature</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {productData.thermalConductivity.typicalValues.map((item, index) => (
                <tr key={index}>
                  <td>{item.density}</td>
                  <td>{item.temperature}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2  className='heading-product-page'>Thermal Resistance</h2>
        <div className='sroll-table'>
          <table>
            <thead>
              <tr>
                <th>Density</th>
                <th>Temperature</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {productData.thermalResistance.typicalValues.map((item, index) => (
                <tr key={index}>
                  <td>{item.density}</td>
                  <td>{item.temperature}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2  className='heading-product-page'>Sound Absorption</h2>
        <div className='sroll-table'>
          <table>
            <thead>
              <tr>
                <th>Density</th>
                <th>125 Hz</th>
                <th>250 Hz</th>
                <th>1000 Hz</th>
                <th>2000 Hz</th>
                <th>4000 Hz</th>
                <th>NRC</th>
              </tr>
            </thead>
            <tbody className='table-container'>
              {productData.soundAbsorption.values.map((item, index) => (
                <tr key={index}>
                  <td>{item.density}</td>
                  <td>{item.frequencies.find(freq => freq.frequency === "125 Hz")?.value}</td>
                  <td>{item.frequencies.find(freq => freq.frequency === "250 Hz")?.value}</td>
                  <td>{item.frequencies.find(freq => freq.frequency === "1000 Hz")?.value}</td>
                  <td>{item.frequencies.find(freq => freq.frequency === "2000 Hz")?.value}</td>
                  <td>{item.frequencies.find(freq => freq.frequency === "4000 Hz")?.value}</td>
                  <td>{item.frequencies.find(freq => freq.NRC)?.NRC}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Product8
