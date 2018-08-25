import React, { Component } from 'react';
import MyButton from '../utils/MyButton';

import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

  state = {
    prices: [100,150,250],
    positions: ['Balcony', 'Medium', 'Star'],
    desc: [
      'digital mobile form tickets for Balcony seats',
      'digital mobile form tickets for Medium seats',
      'digital mobile form tickets for Star seats'
    ],
    linkto: ['http://sales/b','http://sales/m','http://sales/s'],
    delay: [800,0, 600]
  }

  showBoxes = () => (
    this.state.prices.map((box,i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>  
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">
              <span>{this.state.desc[i]}</span>
            </div>
            <div className="pricing_buttons">
            <MyButton
              text="Buy Tickets" 
              bck="#ffa800" 
              color="white" 
              link={this.state.linkto[i]}
            />
            
            </div>
          </div>
        </div>
      </Zoom>
    ))
  )

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
            {this.showBoxes()}
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;