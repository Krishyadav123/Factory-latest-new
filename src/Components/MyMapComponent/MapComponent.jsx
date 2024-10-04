import React from 'react';
import './MapComponent.css';

const MapComponent = () => {
  return (
    < div className="row">
    <div className="col-12">
      <div className="rounded">
        <iframe
          className="rounded w-100"
          // style={{ height: "400px" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d75.855067!3d22.7184419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0a3c2422a1%3A0xb8cf3a1b62708158!2sRajwada%20Palace%2C%20Indore%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1694259649153!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map of Rajwada Palace, Indore"
        ></iframe>
      </div>
    </div>

    <div className="col-12">
      <div className="rounded">
        <iframe
          className="rounded w-100"
          // style={{ height: "400px" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d75.855067!3d22.7184419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0a3c2422a1%3A0xb8cf3a1b62708158!2sRajwada%20Palace%2C%20Indore%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1694259649153!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map of Rajwada Palace, Indore"
        ></iframe>
      </div>
    </div>
    </div>

    
  );
};

export default MapComponent;