
import React from 'react'
import '../ProductsCss.css'
import productData from '../../../Data/ProductDetail/product02.json'
import product02new from '../../../assets/product02new.jpg'
const SeparateProduct = () => {

  return (
    <div className='separate-product'>
      <div className="separate-product-main-container">
        <div className="separate-product-card">
          <div className="separate-product-img">
            <img src={product02new} alt="slabs image" />
          </div>
          <div className="separate-product-text">
            <p className='separate-product-title'>{productData.title}</p>
            <h1>{productData.productName}</h1>
            <p className='separate-product-desc'>{productData.description}</p>
            <button className='separate-product-button'>Download PDF</button>
          </div>
        </div>
        <div className="separate-product-detail">
          <div className="detail-text">
            <div className="detail-text-one">
              <h2>Water Absorption</h2>
              <p>{productData.description}</p>
              {/* <p>Standard: {productData.combustibility.standard}</p> */}
            </div>
            {/* <div className="line"></div> */}
            <div className="detail-text-one">
              <h2>Physical Properties</h2>
              <p>{productData.physicalProperties.description}</p>
              <p>Standards: {productData.physicalProperties.standards.join(', ')}</p>
              <p>Facings: {productData.physicalProperties.facings.join(', ')}</p>
            </div>
          </div>

          <div className="separate-product-detail">
            <div className="detail-text">
              <div className="detail-text-one">
                <h2>Combustibility</h2>
                <p>{productData.combustibility.description}</p>
                <p>Standard: {productData.combustibility.standard}</p>
              </div>
              {/* <div className="line"></div> */}

              <div className="detail-text-one">
                <h2>Corrosion Resistance</h2>
                <p>{productData.corrosionResistance.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="separate-product-detail">
          <div className="detail-text">
            <div className="detail-text-one">
              <h2>pH Neutrality</h2>
              <p>{productData.phNeutrality.description}</p>
              <p>pH Range: {productData.phNeutrality.phRange}</p>
            </div>
            {/* <div className="line line-2"></div> */}
            <div className="detail-text-one">
              <h2>Biological Properties</h2>
              <p>{productData.biologicalProperties.description}</p>
              <p>Standard: {productData.biologicalProperties.standard}</p>
            </div>
          </div>
        </div>
        <div className="separate-product-detail">
          <div className="detail-text">
            <div className="detail-text-one">
              <h2>Handling and Installation</h2>
              <p>{productData.handlingAndInstallation.description}</p>
              <ul>
                {productData.handlingAndInstallation.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            {/* <div className="line line-2"></div> */}
            <div className="detail-text-one">
              <h2>Service Temperature</h2>
              <p>{productData.serviceTemperature.description}</p>
            </div>
          </div>
        </div>


        <h2>Thermal Conductivity</h2>
        <div className='scroll-table'>
          <table>
            <thead>
              <tr>
                <th>Density</th>
                <th>Temperature</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {productData.thermalConductivity.values.map((item, index) => (
                <tr key={index}>
                  <td>{item.density}</td>
                  <td>{item.temperature}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Thermal Resistance</h2>
        <div className='scroll-table'>
          <table>
            <thead>
              <tr>
                <th>Density</th>
                <th>Temperature</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {productData.thermalResistance.values.map((item, index) => (
                <tr key={index}>
                  <td>{item.density}</td>
                  <td>{item.temperature}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Sound Absorption</h2>
        <div className='scroll-table'>
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
            <tbody>
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
        <div className="product-details-table">
          <h2>Application</h2>
          <p>{productData.application}</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>Thickness</th>
              <th>Density</th>
            </tr>
          </thead>
          <tbody>
            {productData.standardThicknesses.map((thicknessItem, index) => {
              // Get the corresponding density item for the current index if available
              const densityItem = productData.standardDensities[index] || { density: "" };
              return (
                <tr key={index}>
                  <td>{thicknessItem.thickness}</td>
                  <td>{densityItem.density}</td>
                </tr>
              );
            })}
            {/* Add remaining densities if there are more densities than thicknesses */}
            {productData.standardDensities.slice(productData.standardThicknesses.length).map((densityItem, index) => (
              <tr key={index + productData.standardThicknesses.length}>
                <td></td>
                <td>{densityItem.density}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SeparateProduct