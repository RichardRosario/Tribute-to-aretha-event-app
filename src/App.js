import React, { Component } from 'react';
import Header from './components/header-footer/Header'
import './resources/styles.css';

import Featured from './components/featured';


class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px", background: 'brown'}}>
        <Header />
        <Featured />
        </div>
    );
  }
}

export default App;
