import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { AboutUs } from '../component/about/AboutUs';

describe('NotFound component', () => {
  test('renders "Not found" text', () => {
    const { getByText }: RenderResult = render(<AboutUs />);
    const notFoundText: HTMLElement = getByText(/About us/i);
    expect(notFoundText).toBeInTheDocument();
  });
});
