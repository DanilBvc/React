import React from 'react';
import { render } from '@testing-library/react';
import Cards from '../component/cards/Cards';

describe('Cards', () => {
  const props = {
    Poster: 'http://example.com/poster.jpg',
    Title: 'Example Title',
    Year: '2022',
    Type: 'Movie',
  };

  it('renders the component with correct props', () => {
    const { getByAltText, getByText } = render(<Cards {...props} />);

    expect(getByAltText('')).toHaveAttribute('src', props.Poster);
    expect(getByText(`Title: ${props.Title}`)).toBeInTheDocument();
    expect(getByText(`Year: ${props.Year}`)).toBeInTheDocument();
    expect(getByText(`Type: ${props.Type}`)).toBeInTheDocument();
  });
});
