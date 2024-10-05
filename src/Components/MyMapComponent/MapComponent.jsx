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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.3084375352853!2d75.86455077627843!3d22.718536592344327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd1220fa84b9%3A0x8d4d88b3f254a18a!2sPrem%20Trade%20Center%2C%20Mahatma%20Gandhi%20Rd%2C%20Siyaganj%2C%20Indore%2C%20Madhya%20Pradesh%20452007!5e0!3m2!1sen!2sin!4v1696508932584!5m2!1sen!2sin"
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d784.1241912494427!2d75.5951667!3d22.5727768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39625120dc848675%3A0x941728317abae187!2sSHREE%20INSULATIONS%20INDIA%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1696480216614!5m2!1sen!2sin"
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