import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import BACKGROUNDS from './backgrounds';
import Cell from './components/Cell';
import Row from './components/Row';


const Legend = () => (
  <div style={{marginLeft: '200px'}}>
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
