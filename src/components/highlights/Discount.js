import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Discount extends Component {

  state = {
    discountStart: 0,
    discountEnd: 40
  }

  porcentage = () => {
    if(this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      })
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage()
    }, 80)
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
        <Fade
          onReveal={() => this.porcentage()}
          delay={100} 
        >
          <div className="discount_porcentage">
            <span>{this.state.discountStart}%</span>
            <span>OFF</span>
          </div>
          </Fade>
          <Slide right>
          <div className="discount_description">
            <h3>Purchase tickets before August 30, 2018</h3>
            <p>Capacity at the MGA Grand is about 10,000.</p> 
            <p>Tickets will be supplied in "digital mobile" form, meaning attendees will be emailed codes that then will be scanned from their cell phones at the MGM grand gates.</p>
          </div>
          <div>Button</div>
          </Slide>

        </div>
        
      </div>
    )
  }
}

export default Discount;