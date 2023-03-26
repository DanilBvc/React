import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Addition.css';
export class AdditionComponent extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="addition-wrapper">
        <span>Reviews</span>
        <div className="addition-item">
          <input type="checkbox" name="" id="cool-w" />
          <label htmlFor="cool-w">Cool website</label>
        </div>
        <div className="addition-item">
          <input type="checkbox" name="" id="cool-f" />
          <label htmlFor="cool-f">Cool forms</label>
        </div>
      </div>
    );
  }
}

export default AdditionComponent;
