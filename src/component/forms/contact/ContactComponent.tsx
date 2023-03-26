import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Contact.css';
export class ContactComponent extends Component {
  render() {
    return (
      <div className="contact-wrapper">
        <span>email</span>
        <div className="contact-item">
          <input type="checkbox" />
          <span>Receive notifications by mail</span>
        </div>
        <span>Phone</span>
        <div className="contact-item">
          <input type="checkbox" />
          <span>Receive notifications by sms</span>
        </div>
      </div>
    );
  }
}

export default ContactComponent;
