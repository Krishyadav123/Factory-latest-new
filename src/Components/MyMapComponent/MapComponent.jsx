import React, { useEffect } from 'react';
import './MapComponent.css';
const MapComponent = () => {
  useEffect(() => {
    // Initialize and add the map
    const initMap = () => {
      // The location of a default place, e.g., Uluru
      const uluru = { lat: 22.7196, lng: 75.8577 };
      // The map, centered at Uluru
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
      });
      // The marker, positioned at Uluru
      new window.google.maps.Marker({
        position: uluru,
        map: map,
      });
    };

    if (window.google) {
      initMap();
    } else {
      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?callback=initMap';
      script.async = true;
      document.head.appendChild(script);
      script.onload = () => initMap();
    }
  }, []);

  return (
    <div>
      <div id="map">
        <h1> hello world</h1>
      </div>
      <hr />
    </div>
  );
};

export default MapComponent;
