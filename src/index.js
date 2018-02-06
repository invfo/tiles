import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import BACKGROUNDS from './backgrounds';
import Cell from './components/Cell';
import Legend from './components/Legend';
import Row from './components/Row';


const NUMBER_OF_TILES_IN_SET = 12;
const INITIAL_NUMBER_OF_COLUMNS = 4;
const INITIAL_NUMBER_OF_ROWS = 3;

const MAX_WIDTH = 1200.0;
const MAX_TILE_WIDTH = 200;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfColumns: INITIAL_NUMBER_OF_COLUMNS,
      numberOfRows: INITIAL_NUMBER_OF_ROWS,
    };
  }

  onChange = (event) => {
    this.setState({numberOfColumns: parseInt(event.target.value)});
  };

  render() {
    const randomizedTiles = [...Array(NUMBER_OF_TILES_IN_SET).keys()].sort((e) => Math.random() - 0.5);
    const cellSize = MAX_WIDTH / this.state.numberOfColumns < MAX_TILE_WIDTH ?
      MAX_WIDTH/this.state.numberOfColumns :
      MAX_TILE_WIDTH;
    const rows = [...Array(this.state.numberOfRows).keys()].map((r) => (
      <Row key={r}>
        {[...Array(this.state.numberOfColumns).keys()].map((c) => (
          <Cell
            key={c}
            size={cellSize}
            tile={randomizedTiles[(INITIAL_NUMBER_OF_COLUMNS*r + c) % NUMBER_OF_TILES_IN_SET]}
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
          <select value={this.state.numberOfColumns} onChange={this.onChange}>
            {[...Array(9).keys()].map((i) => <option key={i} value={i}>{i}</option>)}
          </select>
          column(s)
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
