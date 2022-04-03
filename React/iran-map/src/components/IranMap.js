import React, { useEffect, useState } from "react";

import "./IranMap.css";

import CityModal from "./CityModal";

const IranMap = () => {
  const [citiesData, setCitiesData] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(decodeURI(`http://localhost:9000/cities/`));
      let dataFinal = await response.text();
      let message = await JSON.parse(dataFinal);
      setCitiesData(message);
      console.log("ans :>> ", message);
      // setCitiesData(message);
    }
    fetchData();
  }, []);

  const cityClicked = (id) => (event) => {
    event.preventDefault();
    // Fetch city details and open modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="map-container">
        {(citiesData || []).map((record) => (
          <div
            key={record.id}
            className="city-name"
            style={{
              top: `${record.top}%`,
              left: `${record.left}%`,
            }}
            onClick={cityClicked(record.id)}
          >
            {record.name}
          </div>
        ))}
      </div>
      <CityModal
        city={selectedCity}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default IranMap;
