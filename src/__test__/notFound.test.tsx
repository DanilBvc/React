import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { NotFound } from '../component/notFound/notFound';

describe('NotFound component', () => {
  test('renders "Not found" text', () => {
    const { getByText }: RenderResult = render(<NotFound />);
    const notFoundText: HTMLElement = getByText(/Not found/i);
    expect(notFoundText).toBeInTheDocument();
  });
});
