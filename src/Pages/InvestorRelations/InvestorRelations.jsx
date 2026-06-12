import React from "react";
import "./InvestorRelations.css";
import annualReport2025 from "../../assets/annualreport-2024-25.pdf";



const heroImage =
  "https://res.cloudinary.com/dcsentl2f/image/upload/w_1600,q_auto,f_auto/v1731319326/shreeInsul/about%20page/qa0lgj7hhgouphsejb1x.jpg";

const InvestorRelations = () => {
  return (
    <div className="investor-relations-page">
      <div
        className="investor-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="investor-hero-overlay">
          {/* <h1>Investor Relations</h1> */}
        </div>

        <svg
          className="investor-curve"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C360,150 1080,0 1440,80 L1440,150 L0,150 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="investor-white-section">
        <h2>Shree Insulations</h2>
        <p>
          At Shree Insulations , We consider Investor Relations to be the key to
          building transparent, open and long-term relationships with our
          stakeholders.
        </p>
      </div>
      <div className="investor-right-only">
  <h3>Annual Reports</h3>

  <table>
    <thead>
      <tr>
        <th>Sr.No</th>
        <th>Title</th>
        <th>Year</th>
        <th>PDF</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Annual Report</td>
        <td>2024–25</td>
        <td>
          <a
    href={annualReport2025}
    target="_blank"
    rel="noopener noreferrer"
    title="View Annual Report 2024–25"
  >
    <img
src="https://tse2.mm.bing.net/th/id/OIP.cVUe5fAZUfV5tPtZQAK15gHaJS?pid=Api&P=0&h=180"
alt="PDF icon"
className="pdf-img-icon"
/>
  </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  );
};

export default InvestorRelations;
