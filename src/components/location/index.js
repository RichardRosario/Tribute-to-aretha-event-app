import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d338.842178107493!2d-115.17055372234933!3d36.102549557222666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c5cb5ad3f40f%3A0x6c4606945b2c20f4!2sL&#39;Atelier+De+Joel+Robuchon!5e0!3m2!1sen!2sph!4v1535166932940" 
        width="100%" 
        height="500px" 
        frameBorder="0" 
        style={{border:0}} 
        title="location" 
        allowfullScreen>
      </iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;