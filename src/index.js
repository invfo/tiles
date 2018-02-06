import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import BACKGROUNDS from './backgrounds';
import Cell from './components/Cell';
import Legend from './components/Legend';
import Row from './components/Row';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfColumns: 4,
      numberOfRows: 3,
    };
  }

  onChange = (event) => {
    this.setState({numberOfColumns: parseInt(event.target.value)});
  };

  render() {
    const randomizedTiles = [...Array(12).keys()].sort((e) => Math.random() - 0.5);
    const cellSize = 1200.0/this.state.numberOfColumns < 200 ?
      1200.0/this.state.numberOfColumns :
      200;
    const rows = [...Array(this.state.numberOfRows).keys()].map((r) => (
      <Row key={r}>
        {[...Array(this.state.numberOfColumns).keys()].map((c) => (
          <Cell
            key={c}
            size={cellSize}
            tile={randomizedTiles[4*r + c]}
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
