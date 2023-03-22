import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Main } from '../component/main/Main';
import { films } from '../constants/films';

describe('Main', () => {
  it('renders input and card-container', () => {
    const { getByRole, getByTestId } = render(<Main />);
    const input = getByRole('textbox');
    const cardContainer = getByTestId('card-container');
    expect(input).toBeInTheDocument();
    expect(cardContainer).toBeInTheDocument();
  });

  it('renders cards based on input value', () => {
    const { getByRole, queryByText } = render(<Main />);
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'blade' } });
    films.forEach((film) => {
      const element = queryByText(`Title: ${film.Title}`);
      if (element) {
        if (film.Title.toLowerCase().includes('blade')) {
          expect(queryByText(`Title: ${film.Title}`)).toBeInTheDocument();
        } else {
          expect(queryByText(`Title: ${film.Title}`)).not.toBeInTheDocument();
        }
      }
    });
  });

  it('saves input value to local storage when component is unmounted', () => {
    const { unmount } = render(<Main />);
    const input = document.querySelector('input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'blade' } });
    unmount();
    expect(localStorage.getItem('input')).toBe('blade');
  });
});
