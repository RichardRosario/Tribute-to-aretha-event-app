import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
    <footer className="bck_brown">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">Event Venue</div>
        <div className="footer_copyright"> SPA in ReactJS by tech2js for RRMedia. &copy;2018</div>
      </Fade>
    </footer>
  );
};

export default Footer;