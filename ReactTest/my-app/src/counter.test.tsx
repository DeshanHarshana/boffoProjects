// src/Counter.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from './Counter';

test('renders Counter component', () => {
  render(<Counter />);
  const countElement = screen.getByTestId('count');
  expect(countElement).toBeInTheDocument();
  expect(countElement).toHaveTextContent('0');
});

test('increments count on button click', () => {
  render(<Counter />);
  const buttonElement = screen.getByText(/increment/i);
  fireEvent.click(buttonElement);
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('1');
});

//we can use It function with describe

describe('Counter component', () => {
    it('renders Counter component', () => {
      render(<Counter />);
      const countElement = screen.getByTestId('count');
      expect(countElement).toBeInTheDocument();
      expect(countElement).toHaveTextContent('0');
    });
  
    it('increments count on button click', () => {
      render(<Counter />);
      const buttonElement = screen.getByText(/increment/i);
      fireEvent.click(buttonElement);
      const countElement = screen.getByTestId('count');
      expect(countElement).toHaveTextContent('1');
    });
  });