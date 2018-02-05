import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import tileMarqueeBlue from './img/marquee-blue.jpg';
import tileFloralTrellisBlue from './img/floral-trellis-blue.jpg';
import tileChantillyBlue from './img/chantilly-blue.jpg';
import tileStMaloBlue from './img/stmalo-blue.jpg';
import tileLiberteBlue from './img/liberte-blue.jpg';
import tileToulonBlue from './img/toulon-blue.jpg';
import tileOrleansBlue from './img/orleans-blue.jpg';
import tileVinnerieBlue from './img/vannerie-blue.jpg';
import tileJosetteBlue from './img/josette-blue.jpg';
import tileRivieraBlue from './img/riviera-blue.jpg';
import tileFiligreeBlue from './img/filigree-blue.jpg';
import tileChambrayBlue from './img/chambray-blue.jpg'


const BACKGROUNDS = {
  0: `url('${tileMarqueeBlue}')`,
  1: `url('${tileFloralTrellisBlue}')`,
  2: `url('${tileChantillyBlue}')`,
  3: `url('${tileStMaloBlue}')`,
  4: `url('${tileLiberteBlue}')`,
  5: `url('${tileToulonBlue}')`,
  6: `url('${tileOrleansBlue}')`,
  7: `url('${tileVinnerieBlue}')`,
  8: `url('${tileJosetteBlue}')`,
  9: `url('${tileRivieraBlue}')`,
  10: `url('${tileFiligreeBlue}')`,
  11: `url('${tileChambrayBlue}')`,
};


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


const Row = styled.div`
  display: flex;
  flex-direction: row;
`;


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
      <div style={{display: 'flex', flexDirection: 'row'}}>
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
