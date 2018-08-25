import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header-footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlights from './components/highlights';
import Pricing from './components/pricing';


class App extends Component {
  render() {
    return (
      <div className="App" style={{height: 1500, background: 'brown'}}>
        <Header />
        <Featured />
        <VenueNfo />
        <Highlights />
        <Pricing />
        </div>
    );
  }
}

export default App;
