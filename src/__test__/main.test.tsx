import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Main from '../component/main/Main';

describe('Main component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  test('renders correctly', () => {
    render(<Main />);
    expect(screen.getByText('about')).toBeInTheDocument();
  });

  test('opens and closes modal correctly', () => {
    render(<Main />);
    const fakePopupData = { year: '2021', type: 'movie', id: 'tt123456' };
    fireEvent.click(screen.getByText('Fake film 1'));
    expect(screen.getByText('Movie year: 2021')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(screen.queryByText('Movie year: 2021')).not.toBeInTheDocument();
  });

  test('updates input in localStorage correctly', () => {
    render(<Main />);
    const input = screen.getByRole('textbox', { name: 'input' });
    fireEvent.change(input, { target: { value: 'fake query' } });
    expect(localStorage.getItem('input')).toEqual('fake query');
  });

  test('loads input from localStorage correctly', () => {
    localStorage.setItem('input', 'fake query');
    render(<Main />);
    expect(screen.getByRole('textbox', { name: 'input' })).toHaveValue('fake query');
  });
});
