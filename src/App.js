import React, { Component } from 'react';
import Header from './components/header-footer/Header'
import './resources/styles.css';

import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlights from './components/highlights';


class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1600px", background: 'brown'}}>
        <Header />
        <Featured />
        <VenueNfo />
        <Highlights />
        </div>
    );
  }
}

export default App;
