import React from 'react';
import Fade from 'react-reveal/Fade';

const Description = () => {
  return (
    <Fade duration={1500} delay={200}>
      <div className="center_wrapper">
        <h2>Highlights</h2>
        <div className="highlight_description">
        <p>Aretha Franklin's life and musical legacy will be celebrated with a free concert Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,.</p>
        </div>
      </div>
      
    </Fade>
  );
};

export default Description;