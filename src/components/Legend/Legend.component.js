import React from 'react';

import BACKGROUNDS from '../../backgrounds';


const Legend = () => (
  <div>
    {[...Array(12).keys()].map((e) => (
      <div key={e} style={{display: 'flex', flexDirection: 'row'}}>
        <div>{e}</div>
        <div style={{
          height: '50px',
          width: '50px',
          backgroundImage: BACKGROUNDS[e],
          backgroundSize: 'cover',
        }}></div>
      </div>
    ))}
  </div>
);

export default Legend;
