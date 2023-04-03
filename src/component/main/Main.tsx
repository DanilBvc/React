import React, { useEffect, useState } from 'react';
import './main.css';
import { films } from '../../constants/films';
import Cards from '../cards/Cards';
const Main = () => {
  const [input, setInput] = useState('');
  const handleInput = (value: string) => {
    setInput(value);
  };
  const getFilteredFilms = () => {
    return films.filter((item) => item.Title.toLowerCase().includes(input));
  };
  useEffect(() => {
    localStorage.setItem('input', input);
  }, [input]);
  useEffect(() => {
    const inputFromLocalStorage = localStorage.getItem('input');
    if (inputFromLocalStorage) {
      setInput(inputFromLocalStorage);
    }
  }, []);
  return (
    <div className="card-main">
      <input
        onChange={(e) => {
          handleInput(e.target.value);
        }}
        className="input"
        value={input}
        type="text"
      />
      <div data-testid="card-container" className="card-container">
        {getFilteredFilms().length > 0 ? (
          getFilteredFilms().map((film) => (
            <Cards
              key={film.imdbID}
              Title={film.Title}
              Year={film.Year}
              Poster={film.Poster}
              Type={film.Type}
            />
          ))
        ) : (
          <div>Nothing found</div>
        )}
      </div>
    </div>
  );
};
export default Main;
