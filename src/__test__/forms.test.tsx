import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Forms from '../pages/Forms/Forms';

describe('Forms', () => {
  test('submits form with valid data', async () => {
    const { getByText, queryByText } = render(<Forms />);

    const firstName = getByText('First Name');
    const lastName = getByText('Last Name');
    const birthday = getByText('Birthday');
    const country = getByText('Country');
    const address = getByText('Address');
    const city = getByText('City');
    const emailNotification = getByText('Email Notification');
    const phoneNotification = getByText('Phone Notification');
    const coolWebsite = getByText('Cool website');
    const coolFroms = getByText('Cool forms');

    fireEvent.change(firstName, { current: { value: 'John' } });
    fireEvent.change(lastName, { current: { value: 'Doe' } });
    fireEvent.change(birthday, { current: { value: '1990-01-01' } });
    fireEvent.change(country, { current: { value: 'USA' } });
    fireEvent.change(address, { current: { value: '123 Main St' } });
    fireEvent.change(city, { current: { value: 'Anytown' } });
    fireEvent.click(emailNotification);
    fireEvent.click(phoneNotification);
    fireEvent.click(coolWebsite);
    fireEvent.click(coolFroms);

    fireEvent.submit(getByText('Send'));

    expect(queryByText('Please fill in this field.')).not.toBeInTheDocument();
    expect(queryByText('Please select an option.')).not.toBeInTheDocument();
    expect(queryByText('Please upload a file.')).not.toBeInTheDocument();
  });
});
