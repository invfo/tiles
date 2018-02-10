import React, { Component } from 'react';

import BACKGROUNDS from '../../backgrounds';
import Cell from '../Cell';
import Legend from '../Legend';
import Row from '../Row';


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
    const cellSize = MAX_WIDTH / this.state.numberOfColumns < MAX_TILE_WIDTH ?
      MAX_WIDTH/this.state.numberOfColumns :
      MAX_TILE_WIDTH;
    const rows = [...Array(this.state.numberOfRows).keys()].map((r) => (
      <Row key={r}>
        {[...Array(this.state.numberOfColumns).keys()].map((c) => (
          <Cell
            key={c}
            row={r}
            column={c}
            size={cellSize}
            tile={this.props.layout[r][c]}
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

export default App;
