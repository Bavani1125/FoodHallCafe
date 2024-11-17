import React from 'react';
import './Catering.css';
import catring from '../assets/catering.jpg';

const Catering = () => {
  return (
    <div id="catering" className="catering-section">
      <div className="catering-content">
        <h2>Catering & Private Events</h2>
        <p>
          Food Hall Cafe offers catering services for all occasions, including corporate events, weddings, private parties, and more.
          Let us make your event special with our delicious menu options and exceptional service.
        </p>
        <p>
          Whether you're planning an intimate gathering or a grand celebration, we are here to provide a tailored experience
          that exceeds your expectations.
        </p>
        {/* <button className="catering-btn">Learn More</button> */}
      </div>
      <div className="catering-image">
      <img src={catring} alt="People Around" className="grid-image people-image" />
      </div>
    </div>
  );
};

export default Catering;
