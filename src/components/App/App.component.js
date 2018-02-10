import React, { Component } from 'react';

import BACKGROUNDS from '../../backgrounds';
import Cell from '../Cell';
import Legend from '../Legend';
import Row from '../Row';
import store from '../../store';
import { changeNumberOfColumns } from './actions';


const MAX_WIDTH = 1200.0;
const MAX_TILE_WIDTH = 200;


class App extends Component {
  onChange = (event) => {
    store.dispatch(changeNumberOfColumns(parseInt(event.target.value)));
  };

  render() {
    const cellSize = MAX_WIDTH / this.props.numberOfColumns < MAX_TILE_WIDTH ?
      MAX_WIDTH/this.props.numberOfColumns :
      MAX_TILE_WIDTH;
    console.log('props', this.props.layout);
    const rows = [...Array(this.props.numberOfRows).keys()].map((r) => (
      <Row key={r}>
        {[...Array(this.props.numberOfColumns).keys()].map((c) => (
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
          <select value={this.props.numberOfColumns} onChange={this.onChange}>
            {[...Array(9).keys()].map((i) => <option key={i} value={i}>{i}</option>)}
          </select>
          column(s)
        </div>
      </div>
    );
  }
}

export default App;
