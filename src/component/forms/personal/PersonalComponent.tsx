import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Personal.css';
export class PersonalComponent extends Component {
  constructor() {
    super({});
  }
  render() {
    return (
      <div className="personal-wrapper">
        <h3>Personal information</h3>
        <span>First Name</span>
        <input type="text" />
        <span>Last Name</span>
        <input type="text" />
        <span>Birthday</span>
        <input type="date" />
        <span>Upload profile picture</span>
        <input type="file" id="" />
      </div>
    );
  }
}

export default PersonalComponent;
