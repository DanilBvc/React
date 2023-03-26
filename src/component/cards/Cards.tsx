import React, { Component } from 'react';
import { CardProps } from '../../types/types';
import './card.css';
export default class Cards extends Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }
  getProps() {
    return this.props;
  }
  render() {
    return (
      <div className="card-wrapper">
        <img src={this.getProps().Poster} alt="" />
        <div className="title">Title: {this.getProps().Title}</div>
        <div className="year">Year: {this.getProps().Year}</div>
        <div className="type">Type: {this.getProps().Type}</div>
      </div>
    );
  }
}
