import React, { Component } from 'react';

import BACKGROUNDS from '../../backgrounds';


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

export default Cell;
