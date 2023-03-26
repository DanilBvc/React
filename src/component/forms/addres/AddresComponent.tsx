import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Addres.css';
export class AddresComponent extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="addres-wrapper">
        <h3>Addres</h3>
        <select>
          <option value="uk">ukraine</option>
          <option value="ru">russia</option>
          <option value="bel">belarus</option>
          <option value="kz">kazakhstan</option>
        </select>
        <span>City</span>
        <input type="text" />
        <span>Addres</span>
        <input type="text" />
      </div>
    );
  }
}

export default AddresComponent;
