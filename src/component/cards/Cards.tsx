import React from 'react';
import { CardProps } from '../../types/types';
import './card.css';
const Cards = ({ Title, Year, Poster, Type, handleOpenModal, id }: CardProps) => {
  return (
    <div
      className="card-wrapper"
      onClick={() => {
        handleOpenModal(Year, id, Type);
      }}
    >
      <img
        src={
          Poster !== 'N/A'
            ? Poster
            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRodoWns3OhjxtbQN1n27UlnGgdbkwqR7ZHTviEJc7q&s'
        }
        alt=""
      />
      <div className="title">Title: {Title}</div>
    </div>
  );
};
export default Cards;
