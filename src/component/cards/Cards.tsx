import React from 'react';
import { CardProps } from '../../types/types';
import './card.css';
const Cards = ({ Title, Year, Poster, Type }: CardProps) => {
  return (
    <div className="card-wrapper">
      <img src={Poster} alt="" />
      <div className="title">Title: {Title}</div>
      <div className="year">Year: {Year}</div>
      <div className="type">Type: {Type}</div>
    </div>
  );
};
export default Cards;
