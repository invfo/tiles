import React, { Component } from 'react';

import BACKGROUNDS from '../../backgrounds';
import Cell from '../Cell';
import Legend from '../Legend';
import Row from '../Row';


const MAX_WIDTH = 1200.0;
const MAX_TILE_WIDTH = 200;


const App = ({ layout, numberOfColumns, numberOfRows, onChange }) => {
  const cellSize = MAX_WIDTH / numberOfColumns < MAX_TILE_WIDTH ?
    MAX_WIDTH/numberOfColumns :
    MAX_TILE_WIDTH;
  const rows = [...Array(numberOfRows).keys()].map((r) => (
    <Row key={r}>
      {[...Array(numberOfColumns).keys()].map((c) => (
        <Cell
          key={c}
          row={r}
          column={c}
          size={cellSize}
          tile={layout[r][c]}
        >
        </Cell>
      ))}
    </Row>
  ));
  return (
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {rows}
      </div>
      <Legend />
      <div>
        <select value={numberOfColumns} onChange={onChange}>
          {[...Array(9).keys()].map((i) => <option key={i} value={i}>{i}</option>)}
        </select>
        column(s)
      </div>
    </div>
  );
};


export default App;
