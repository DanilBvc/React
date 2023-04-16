import React, { useState } from 'react';
import './main.css';
import Cards from '../cards/Cards';
import Modal from '../modal/modal';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { MovieActions, fetchMovies } from '../../store/reducers/apiReducer';

const Main = () => {
  const dispatch = useAppDispatch();
  const { loading, searchMovie, movies } = useAppSelector((state) => state.search);
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
    dispatch(MovieActions.setSearchValue(value));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(fetchMovies(searchMovie));
  };

  return (
    <form onSubmit={handleSubmit} className="card-main">
      <Modal popupData={popupData} onClose={handleCloseModal} />
      <input
        onChange={(e) => {
          handleInput(e.target.value);
        }}
        className="input"
        value={searchMovie}
        type="text"
      />
      {loading ? (
        <div>Loading please wait...</div>
      ) : (
        <div data-testid="card-container" className="card-container">
          {!movies && !loading ? (
            <div>Nothing not found...</div>
          ) : (
            movies.map((film) => (
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
