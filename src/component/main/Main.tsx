import React, { useEffect, useState } from 'react';
import './main.css';
import Cards from '../cards/Cards';
import Modal from '../modal/modal';
type FilmsType = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};
const Main = () => {
  const baseUrl = 'https://www.omdbapi.com/?';
  const [input, setInput] = useState('');
  const [films, setFilms] = useState<[] | FilmsType[]>([]);
  const [loading, setLoading] = useState(false);
  const [popupData, setPopupData] = useState<null | { year: string; type: string; id: string }>(
    null
  );
  const handleOpenModal = (year: string, id: string, type: string) => {
    setPopupData({ year, type, id });
  };

  const handleCloseModal = () => {
    setPopupData(null);
  };
  const handleInput = (value: string) => {
    setInput(value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.length !== 0) {
      setLoading(true);
      const response = await fetch(baseUrl + `s=${input}&page=${1}&apikey=4a3b711b`);
      const result = await response.json();
      setFilms(result.Search);
      setLoading(false);
    }
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
    <form onSubmit={handleSubmit} className="card-main">
      <Modal popupData={popupData} onClose={handleCloseModal} />
      <input
        onChange={(e) => {
          handleInput(e.target.value);
        }}
        className="input"
        value={input}
        type="text"
      />
      {loading ? (
        <div>Loading please wait...</div>
      ) : (
        <div data-testid="card-container" className="card-container">
          {!films && !loading ? (
            <div>Nothing not found...</div>
          ) : (
            films.map((film) => (
              <Cards
                key={film.imdbID}
                Title={film.Title}
                Year={film.Year}
                Poster={film.Poster}
                Type={film.Type}
                id={film.imdbID}
                handleOpenModal={handleOpenModal}
              />
            ))
          )}
        </div>
      )}
    </form>
  );
};
export default Main;
