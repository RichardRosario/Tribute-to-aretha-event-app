import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header-footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header-footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: 1500, background: 'brown'}}>
        <Header />
        <Element name="Featured"><Featured /></Element>
        
        <Element name="Venue NFO"><VenueNfo /></Element>
        <Element name="Highlights"><Highlights /></Element>
        
        <Element name="Pricing"><Pricing /></Element>
        <Element name="Location"><Location /></Element>
        <Footer />
        </div>
    );
  }
}

export default App;
