import React, { Component } from 'react';

import BACKGROUNDS from '../../backgrounds';


class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tile: props.tile,
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
    console.log(localStorage);
    const style = {
      backgroundImage: BACKGROUNDS[this.state.tile],
      backgroundSize: 'cover',
      height: `${this.props.size}px`,
      width: `${this.props.size}px`,
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
          value={this.state.tile}
        >
          {[...Array(12).keys()].map((e) => <option key={e} value={e}>{e}</option>)}
        </select>
      </div>
    );
  }
}

export default Cell;
