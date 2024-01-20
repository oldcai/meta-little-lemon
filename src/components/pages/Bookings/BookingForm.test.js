import { render, screen } from '@testing-library/react';

import BookingForm from './BookingForm';

describe('Booking form', () => {
  const availableTimes = ['17:00', '17:30'];
  const submitForm = jest.fn();
  const today = new Date().toISOString().split('T')[0];

  render(
    <BookingForm
      availableTimes={availableTimes}
      submitForm={submitForm}
    />
  );

  const dateInput = screen.getByLabelText(/Date/);
  const timeSelect = screen.getByLabelText(/Time/);
  const timeOptions = screen.getAllByRole('option');
  const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
  const submitButton = screen.getByRole('button');

  test('should correctly render all fields and their default values', () => {
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('id', 'booking-date');
    expect(dateInput).toHaveValue(today);

    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute('id', 'booking-time');

    expect(numberOfGuestsInput).toBeInTheDocument();
    expect(numberOfGuestsInput).toHaveAttribute('id', 'booking-number-guests');
    expect(numberOfGuestsInput).toHaveAttribute('type', 'number');
    expect(numberOfGuestsInput).toHaveValue(2);

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
  });

  //test('', () => {});

  //test('', () => {});
});
