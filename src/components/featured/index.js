import React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';

const Featured = () => {
  return (
    <div style={{ positiion: 'relative'}}>

    <Carrousel />
      <div className="artist_name">
        <div className="wrapper">
          Aretha Franklin
        </div>
      </div>

      <TimeUntil />
    </div>
  )
}

export default Featured;