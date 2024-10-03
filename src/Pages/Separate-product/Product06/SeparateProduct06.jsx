import React from 'react';
import '../ProductsCss.css'
import productData from "../../../Data/ProductDetail/product06.json"

const SeparateProduct06 = () => {
  const { features } = productData.product
  return (
    <>
      <div className='separate-product'>
        <div className="separate-product-main-container">


          <div className="separate-product-card">
            <div className="separate-product-img">
              <img src={productData.product.image} alt="" />
            </div>
            <div className="separate-product-text">
              <h1>{productData.product.name}</h1>
              <p className='separate-product-desc'>{productData.product.description.PIR}</p>
              <p className='separate-product-desc'>{productData.product.description.PUF}</p>
              <button className='separate-product-button'>Download PDF</button>
            </div>
          </div>
          {/* </div> */}
          <div className="separate-product-detail">
            <div className="detail-text">
              <div className="detail-text-one">
                <h2>PUFSupport</h2>
                <p>{productData.product.PUFSupport.description}</p>
              </div>
              <div className="detail-text-one">
                <h2>PUFSupport/SalientFeatures</h2>
                <p>{productData.product.PUFSupport.salientFeatures}</p>
                {/* <h3>Types:</h3><p>{productData.product.PUFSupport.types}</p> */}
              </div>
            </div>
            <div className="separate-product-detail">
              <div className="detail-text">
                <div className="detail-text-one">
                  <h2>PUF:Available sizes</h2>
                  <p>{productData.product.technicalSpecifications.PUF.availableSizes.map((item, index) => (
                    <tr><li>{item}</li></tr>
                  ))}</p>
                </div>
                <div className="detail-text-one">
                  <h2>PIR:Available sizes</h2>
                  <p>{productData.product.technicalSpecifications.PIR.availableSizes.map((item, index) => (
                    <tr><li>{item}</li></tr>
                  ))}</p>
                  {/* <h3>Types:</h3><p>{productData.product.PUFSupport.types}</p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="separate-product-detail">
            <div className="detail-text">
              <div className="detail-text-one resistance">
                <h2>PUF:Fire resistance</h2>
                <li style={{marginTop:'15px'}}>{productData.product.technicalSpecifications.PUF.fireResistance.ignitability}</li>
                <li>{productData.product.technicalSpecifications.PUF.fireResistance.surfaceSpreadFlame}</li>
                <li>{productData.product.technicalSpecifications.PUF.fireResistance.meanExtentOfBurn}</li>
              </div>
              <div className="detail-text-one resistance">
                <h2>PIR:Fire resistance</h2>
                <li style={{marginTop:'15px'}}>{productData.product.technicalSpecifications.PIR.fireResistance.ignitability}</li>
                <li>{productData.product.technicalSpecifications.PIR.fireResistance.surfaceSpreadFlame}</li>
                <li>{productData.product.technicalSpecifications.PIR.fireResistance.meanExtentOfBurn}</li>
                {/* <h3>Types:</h3><p>{productData.product.PUFSupport.types}</p> */}
              </div>
            </div>
          </div>


          <div className='table'>
            <h2 className='heading-product-page'>Features</h2>
            <div className="scroll-table">
              <table>
                <thead>
                  <tr>
                    <th>PUF Features</th>
                    <th>PIR Features</th>
                  </tr>
                </thead>
                <tbody>
                  {Math.max(features.PUF.length, features.PIR.length) > 0 && (
                    [...Array(Math.max(features.PUF.length, features.PIR.length))].map((_, index) => (
                      <tr key={index}>
                        <td>{features.PUF[index] || ''}</td>
                        <td>{features.PIR[index] || ''}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
          {/* <h2>PUF:TechnicalSpecifications</h2>
                <li><span>TemperatureLimit </span>{productData.product.technicalSpecifications.PUF.temperatureLimit}</li>                            <li><span style={{ fontSize: "20px" }}>ThermalConductivity :</span>{productData.product.technicalSpecifications.PUF.thermalConductivity}</li>
                <li><span style={{ fontSize: "20px" }}>Oxygen:</span>{productData.product.technicalSpecifications.PUF.oxygen}</li>
                <li><span style={{ fontSize: "20px" }}>Density:</span>{productData.product.technicalSpecifications.PUF.density}</li>
                <li><span style={{ fontSize: "20px" }}>Smoke:</span>{productData.product.technicalSpecifications.PUF.smoke}</li>
                <li><span style={{ fontSize: "20px" }}>ClosedCellContent:</span>{productData.product.technicalSpecifications.PUF.closedCellContent}</li>
                <li><span style={{ fontSize: "20px" }}>CompressionStrength:</span>{productData.product.technicalSpecifications.PUF.compressionStrength}</li>
                <li><span style={{ fontSize: "20px" }}>WaterVaporTransmission:</span>{productData.product.technicalSpecifications.PUF.waterVaporTransmission}</li>
                <li><span style={{ fontSize: "20px" }}>Toxicity:</span>{productData.product.technicalSpecifications.PUF.toxicity}</li> */}

{/* 
          <div className="separate-product-detail">
            <div className="detail-text">
              <div className="detail-text-one "> */}

                <div className="scroll-table">
                  <table className='table'>
                    <thead>
                      <tr>
                        <th>TechnicalSpecifications</th>
                        <th>PUF:TechnicalSpecifications</th>
                        <th>PIR:TechnicalSpecifications</th>
                        {/* <th>PIR:TechnicalSpecifications</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>TemperatureLimit </td>
                        <td>{productData.product.technicalSpecifications.PUF.temperatureLimit}</td>
                        <td>{productData.product.technicalSpecifications.PIR.temperatureLimit}</td>
                      </tr>
                      <tr>
                        <td>Oxygen </td>
                        <td>{productData.product.technicalSpecifications.PUF.oxygen}</td>
                        <td>{productData.product.technicalSpecifications.PUF.oxygen}</td>
                      </tr>
                      <tr>
                        <td>Density </td>
                        <td>{productData.product.technicalSpecifications.PUF.density}</td>
                        <td>{productData.product.technicalSpecifications.PUF.density}</td>
                      </tr>
                      <tr>
                        <td>Smoke </td>
                        <td>{productData.product.technicalSpecifications.PUF.smoke}</td>
                        <td>{productData.product.technicalSpecifications.PUF.smoke}</td>
                      </tr>
                      <tr>
                        <td>ClosedCellContent </td>
                        <td>{productData.product.technicalSpecifications.PUF.closedCellContent}</td>
                        <td>{productData.product.technicalSpecifications.PUF.closedCellContent}</td>
                      </tr>
                      <tr>
                        <td>Toxicity </td>
                        <td>{productData.product.technicalSpecifications.PUF.toxicity}</td>
                        <td>{productData.product.technicalSpecifications.PUF.toxicity}</td>
                      </tr>
                      <tr>
                        <td>CompressionStrength </td>
                        <td>{productData.product.technicalSpecifications.PUF.compressionStrength}</td>
                        <td>{productData.product.technicalSpecifications.PUF.compressionStrength}</td>
                      </tr>
                      <tr>
                        <td>WaterVaporTransmission </td>
                        <td>{productData.product.technicalSpecifications.PUF.waterVaporTransmission}</td>
                        <td>{productData.product.technicalSpecifications.PUF.waterVaporTransmission}</td>
                      </tr>
                      <tr>
                        <td>ThermalConductivity </td>
                        <td>{productData.product.technicalSpecifications.PUF.thermalConductivity}</td>
                        <td>{productData.product.technicalSpecifications.PUF.thermalConductivity}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>


              {/* </div> */}
              {/* <div className="detail-text-one ">
                <div className="scroll-table">
                  <table className='table'>
                    <thead>
                      <tr>
                        <th>PIR:TechnicalSpecifications</th>
                        <th>PIR:TechnicalSpecifications</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>TemperatureLimit </td>
                        <td>{productData.product.technicalSpecifications.PIR.temperatureLimit}</td>
                      </tr>
                      <tr>
                        <td>Oxygen </td>
                        <td>{productData.product.technicalSpecifications.PIR.oxygen}</td>
                      </tr>
                      <tr>
                        <td>Density </td>
                        <td>{productData.product.technicalSpecifications.PIR.density}</td>
                      </tr>
                      <tr>
                        <td>Smoke </td>
                        <td>{productData.product.technicalSpecifications.PIR.smoke}</td>
                      </tr>
                      <tr>
                        <td>ClosedCellContent </td>
                        <td>{productData.product.technicalSpecifications.PIR.closedCellContent}</td>
                      </tr>
                      <tr>
                        <td>Toxicity </td>
                        <td>{productData.product.technicalSpecifications.PIR.toxicity}</td>
                      </tr>
                      <tr>
                        <td>CompressionStrength </td>
                        <td>{productData.product.technicalSpecifications.PIR.compressionStrength}</td>
                      </tr>
                      <tr>
                        <td>WaterVaporTransmission </td>
                        <td>{productData.product.technicalSpecifications.PIR.waterVaporTransmission}</td>
                      </tr>
                      <tr>
                        <td>ThermalConductivity </td>
                        <td>{productData.product.technicalSpecifications.PIR.thermalConductivity}</td>
                      </tr>
                    </tbody>
                  </table>
                </div> */}


              {/* </div> */}
              {/* <div className="detail-text-one resistance">
                <h2>PIR:TechnicalSpecifications</h2>
                <li><span style={{ fontSize: "20px" }}>TemperatureLimit:</span>{productData.product.technicalSpecifications.PUF.temperatureLimit}</li>
                <li><span style={{ fontSize: "20px" }}>ThermalConductivity:</span>{productData.product.technicalSpecifications.PUF.thermalConductivity}</li>
                <li><span style={{ fontSize: "20px" }}>Toxicity:</span>{productData.product.technicalSpecifications.PUF.toxicity}</li>
                <li><span style={{ fontSize: "20px" }}>Oxygen:</span>{productData.product.technicalSpecifications.PUF.oxygen}</li>
                <li><span style={{ fontSize: "20px" }}>Density:</span>{productData.product.technicalSpecifications.PUF.density}</li>
                <li><span style={{ fontSize: "20px" }}>Smoke:</span>{productData.product.technicalSpecifications.PUF.smoke}</li>
                <li><span style={{ fontSize: "20px" }}>ClosedCellContent:</span>{productData.product.technicalSpecifications.PUF.closedCellContent}</li>
                <li><span style={{ fontSize: "20px" }}>CompressionStrength:</span>{productData.product.technicalSpecifications.PUF.compressionStrength}</li>
                <li><span style={{ fontSize: "20px" }}>WaterVaporTransmission:</span>{productData.product.technicalSpecifications.PUF.waterVaporTransmission}</li>
              </div> */}
            {/* </div>
          </div> */}

          <div className="scroll-table">
            <table className='table'>
              <thead>
                <tr>
                  <th>Properties</th>
                  <th>Advantages</th>
                </tr>
              </thead>
              <tbody>
                {productData.product.properties.map((property, index) => (
                  <tr key={index}>
                    <td>{property}</td>
                    <td>{productData.product.advantages[index]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
};
export default SeparateProduct06;