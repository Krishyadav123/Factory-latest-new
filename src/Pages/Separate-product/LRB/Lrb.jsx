import '../ProductsCss.css'
// import data from "./products01.json"
import product01new from '../../../assets/product01new.jpg'
import Parelax from '../../../Components/ParelaxEffect/Parelax'
// import parelax from '../../../Components/ParelaxEffect/Parelax'
import image03 from '../../../assets/AboutPageimg/image03.jpg'
import { FaRegFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom'

function Lrb() {
    return (
        <>
          <Parelax heading={"Shreeinsul Lightly Resin Bonded Blanket"} backgroundImage={image03} />
          <div className='separate-product'>
            <div className="separate-product-main-container">
              <div className="separate-product-card">
                <div className="separate-product-img">
                  <img src={product01new} alt="" />
                </div>
                <div className="separate-product-text">
                  {/* <p className='separate-product-title'>{productData.title}</p> */}
                  <h1>LRB</h1>
                  <h2>Shreeinsul Lightly Resin Bonded Blanket</h2>
                  <a href="/path/to/your/file.pdf" download="filename.pdf">
                    <div className='download-pdf'>
                      <FaRegFilePdf className='download-pdf-icon' />
                      <p>Download PDF</p>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <p className='separate-product-desc'>Shreeinsul Lightly Resin Bonded (LRB) Blankets offers an advanced solution for insulation needs, combining exceptional thermal efficiency with flexibility for different surface shapes and sizes. These matteresses are made  of molten stone wool bonded by a suitable resin and then stitching with GI wire mesh. This material complies to ASTM C592 & IS 8183
                </p>
              </div>
              <hr className='separate-product-hr' />
              <div>
                <div className="key-features">
                  <h3>Key Features:</h3>
                  <ul>
                    <li><span>High density</span></li>
                    <li><span>Water repellent</span> </li>
                    <li><span>Dimensionally stable</span> </li>
                    <li><span>Easy to handle and install</span> </li>
                  </ul>
                </div>
                <div className='back-to-products-div'>
                  <Link to="/products">
                    <button className='separate-product-button'>Back to Products</button>
                  </Link>
                </div>
    
              </div>
              {/* <div className="separate-product-detail">
              <div className="detail-text">
                <div className="detail-text-one">
                  <h2>Combustibility</h2>
                  <p>{productData.properties.combustibility}</p>
                </div>
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
                <div className="detail-text-one">
                  <h2>biologicalProperties</h2>
                  <p>{productData.properties.biologicalProperties}</p>
                </div>
    
              </div>
            </div> */}
              {/* <div className="separate-product-detail">
              <div className="detail-text">
                <div className="detail-text-one">
                  <h2>CuttingInstallation</h2>
                  <p>{productData.properties.easyHandlingCuttingInstallation}</p>
                </div>
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
                <div className="detail-text-one">
                  <h2>serviceTemperature</h2>
                  <p>{productData.properties.serviceTemperature}</p>
                </div>
    
              </div>
            </div>
            <div >
    
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
              <h2 className='heading-product-page'>Thermal Resistance</h2>
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
              <h2 className='heading-product-page'>Sound Absorption</h2>
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
            </div> */}
    
    
              {/* <div >
    
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
              <h2 className='heading-product-page'>Thermal Resistance</h2>
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
              <h2 className='heading-product-page'>Sound Absorption</h2>
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
            </div> */}
    
    
              {/* <div className='table-container'>
              <table className='scroll-table' border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ width: '20px' }}>S No</th>
                    <th>Characteristics</th>
                    <th>Reference Specification</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Thermal Conductivity (Density: 128 kg/cum)</td>
                    <td>IS 8183</td>
                    <td>
                      Mean Temp. (°C): 50, 100, 150, 200, 250, 300
                      <br />
                      k value (W/mK): 0.036, 0.042, 0.051, 0.060, 0.071, 0.081
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Maximum Service Temp</td>
                    <td>IS 8183</td>
                    <td>Up to 750°C</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Leachable Chlorides Content</td>
                    <td>ASTM C871</td>
                    <td>10 ppm max</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Surface Burning Characteristics</td>
                    <td>ASTM E84</td>
                    <td>FSI: 0, SDI: 0</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Shot Content</td>
                    <td>IS 8183</td>
                    <td>250 Microns - 15% Max, 500 Microns - 5% Max</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Incombustibility (Loss of Weight %)</td>
                    <td>IS 8183</td>
                    <td>5 Max</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Moisture Content (% weight)</td>
                    <td>IS 8183</td>
                    <td>2 Max</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Moisture Absorption (% weight)</td>
                    <td>IS 8183</td>
                    <td>2 Max</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Fibre Dia (microns)</td>
                    <td>IS 8183</td>
                    <td>7 Max</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Sulphur Content</td>
                    <td>IS 8183</td>
                    <td>0.6% Max</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Recovery after Compression</td>
                    <td>IS 8183</td>
                    <td>90% Min</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>Alkalinity (pH)</td>
                    <td>IS 8183</td>
                    <td>7-10</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>Heat Resistance</td>
                    <td>IS 8183</td>
                    <td>No Fusion of Fibres</td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>Resin Content</td>
                    <td></td>
                    <td>2% Max</td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>Chloride Content</td>
                    <td></td>
                    <td>10 ppm Max</td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>Compressive Strength at 10% Deformation</td>
                    <td></td>
                    <td>120 kg/sqm Min</td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>Linear Shrinkage</td>
                    <td></td>
                    <td>2% Max</td>
                  </tr>
                </tbody>
              </table>
            </div> */}
            </div>
          </div>
        </>
      )
}

export default Lrb