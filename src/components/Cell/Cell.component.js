import React, { Component } from 'react';

import BACKGROUNDS from '../../backgrounds';
import store from '../../store';
import { changeBackground, switchBackground } from './actions';


class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  };

  onMouseEnter = () => {
    this.setState({hover: true})
  };

  onMouseLeave = () => {
    this.setState({hover: false})
  };

  onClick = (event) => {
    console.log(event.target.tagName);
    if (event.target.tagName !== 'SELECT') {
      store.dispatch(switchBackground(this.props.row, this.props.column, this.props.tile))
    }
  };

  render() {
    const style = {
      backgroundImage: BACKGROUNDS[this.props.tile],
      backgroundSize: 'cover',
      height: `${this.props.size}px`,
      width: `${this.props.size}px`,
    };

    return (
      <div
        style={style}
        onClick={this.onClick}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <select
          onChange={(event) => {
            store.dispatch(changeBackground(this.props.row, this.props.column, parseInt(event.target.value)));
          }}
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
