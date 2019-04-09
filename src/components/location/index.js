import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        title="InterExpoCenter"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.5804717166693!2d23.39303861533821!3d42.64905307916857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa86f1b3b8d32f%3A0x6c12373c870fef3c!2sInter+Expo+Center!5e0!3m2!1sru!2sbg!4v1539165768101"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
