import React, { Component } from 'react';
import './Radio.css';
export class RadioComponent extends Component {
  render() {
    return (
      <div className="radio-wrapper">
        <span>Who are you</span>
        <div className="radio-item">
          <input type="radio" name="radio" id="" />
          Doomer
        </div>
        <div className="radio-item">
          <input type="radio" name="radio" id="" />
          Zoomer
        </div>
      </div>
    );
  }
}

export default RadioComponent;
