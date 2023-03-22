import React, { Component } from 'react';
import './main.css';
import { films } from '../../constants/films';
import Cards from '../cards/Cards';
import { IMain } from '../../types/types';
export class Main extends Component<unknown, IMain> {
  constructor(props: IMain) {
    super(props);
    this.state = {
      input: 'blade',
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(value: string) {
    this.setState({ input: value });
  }
  getInutValue() {
    if (this.state.input !== null) {
      return this.state.input;
    } else {
      return '';
    }
  }
  getFilteredFilms() {
    return films.filter((item) => item.Title.toLowerCase().includes(this.state.input));
  }
  componentWillUnmount(): void {
    if (this.getInutValue() !== null && this.getInutValue().length > 0) {
      localStorage.setItem('input', this.state.input);
    }
  }
  componentDidMount(): void {
    const inputFromLocalStorage = localStorage.getItem('input');
    this.handleInput(inputFromLocalStorage as string);
  }
  render() {
    return (
      <div className="card-main">
        <input
          onChange={(e) => {
            this.handleInput(e.target.value);
          }}
          className="input"
          value={this.getInutValue()}
          type="text"
        />
        <div data-testid="card-container" className="card-container">
          {this.getFilteredFilms().length > 0 ? (
            this.getFilteredFilms().map((film) => (
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
  }
}
