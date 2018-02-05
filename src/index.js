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

  render() {
    const rows = [...Array(this.state.numberOfRows).keys()].map(() => (
      <Row>
        {[...Array(this.state.numberOfColumns).keys()].map(() => (
          <Cell></Cell>
        ))}
      </Row>
    ));
    return (
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          {rows}
        </div>
        <Legend />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
