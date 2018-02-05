import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import BACKGROUNDS from './backgrounds';
import Cell from './components/Cell';
import Legend from './components/Legend';
import Row from './components/Row';


class App extends Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Row>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
          </Row>
          <Row>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
          </Row>
          <Row>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
          </Row>
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
