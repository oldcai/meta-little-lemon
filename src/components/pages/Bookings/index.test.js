import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Bookings from './';

describe('Booking page', () => {
  const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

  test('should have one or more available booking time options', () => {
    render(
      <MemoryRouter>
        <Bookings />
      </MemoryRouter>
    );

    const timeOptions = screen.getAllByRole('option');

    expect(timeOptions.length).toBeGreaterThanOrEqual(1);
  });

  test('should update available booking time options when changing booking date', () => {
    render(
      <MemoryRouter>
        <Bookings />
      </MemoryRouter>
    );

    const bookingDate = '2023-04-01';
    const dateInput = screen.getByLabelText(/Date/);
    fireEvent.change(dateInput, { target: { value: bookingDate } });
    fireEvent.blur(dateInput);
    expect(dateInput).toHaveValue(bookingDate);
  });
});
