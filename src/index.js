import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import BACKGROUNDS from './backgrounds';
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


class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tile: 0,
      hover: false,
    };
  };
  
  onChange = (event) => {
    this.setState({tile: event.target.value})
  };

  onMouseEnter = () => {
    this.setState({hover: true})
  };

  onMouseLeave = () => {
    this.setState({hover: false})
  };

  render() {
    const style = {
      backgroundImage: BACKGROUNDS[this.state.tile],
      backgroundSize: 'cover',
      height: '200px',
      width: '200px',
    };
    return (
      <div 
        style={style}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <select 
          onChange={this.onChange}
          style={{
            display: this.state.hover ? 'inline-block' : 'none'
          }} 
        >
          {[...Array(12).keys()].map((e) => <option key={e} value={e}>{e}</option>)}
        </select>
      </div>
    );
  }
}


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
