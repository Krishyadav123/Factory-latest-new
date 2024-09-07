import React from 'react';
import productData from '../../../Data/ProductDetail/product07.json';
import './SeparateProduct07.css';

const SeparateProduct = () => {
  const { product } = productData;

  return (
    <div>
      <div className="product-container">
        <div className="separate-product-img">
          <img src={product.image} alt="product" />
        </div>
        <div className="product-details">
          <h1 className="header">{product.name}</h1>
          <p>{product.description}
          <h2 className="sub-header">Features</h2>
      <ul>
        {product.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
          </p>
        </div>
      </div>
      <h2 className="sub-header">Applications</h2>
      <ul>
        {product.applications.map((application, index) => (
          <li key={index}>{application}</li>
        ))}
      </ul>
      <h2 className="sub-header">Categories</h2>
      <table className="table-container">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Types</th>
          </tr>
        </thead>
        <tbody>
          {product.categories.map((category, index) => (
            <tr key={index}>
              <td>{category.name}</td>
              <td>{category.description}</td>
              <td>{category.types ? category.types.join(', ') : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <h2 className="sub-header">Specifications</h2>
      <table className="table-container">
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Diameter Thickness (mm)</td>
            <td>{product.specifications.standard_dimensions.diameter_thickness_mm.min} - {product.specifications.standard_dimensions.diameter_thickness_mm.max}</td>
          </tr>
          <tr>
            <td>Density (kg/m<sup>3</sup>)</td>
            <td>{product.specifications.standard_dimensions.density_kg_per_m3.min} - {product.specifications.standard_dimensions.density_kg_per_m3.max}</td>
          </tr>
          <tr>
            <td>Temperature Resistance</td>
            <td>{product.specifications.temperature_resistance}</td>
          </tr>
        </tbody>
      </table>
      
      {/* <h2 className="sub-header">Applications</h2>
      <ul>
        {product.applications.map((application, index) => (
          <li key={index}>{application}</li>
        ))}
      </ul> */}
      
      <h2 className="sub-header">Chemical Composition</h2>
      <table className="table-container">
        <thead>
          <tr>
            <th>Component</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(product.chemicalComposition.components).map(([key, value], index) => (
            <tr key={index}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <h2 className="sub-header">Properties and Chemical Composition Based on Base Fiber</h2>
      <table className="table-container">
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(product.propertiesAndChemicalComposition.baseFiber).map(([key, value], index) => (
            <tr key={index}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SeparateProduct;