import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { describe, test, expect } from 'vitest';

describe('App Security Checks', () => {
  test('reproduces missing input validation', () => {
    const { container } = render(<App />);

    // Find the number input specifically
    // We have two inputs with value 20000 (number and range).
    // We want the number input to test validation on typing.
    const volumeInput = container.querySelector('input[type="number"]');

    if (!volumeInput) throw new Error('Volume input not found');

    // Attempt to set a negative value
    fireEvent.change(volumeInput, { target: { value: '-100' } });

    // Security Fix: It should be clamped to 0
    expect(volumeInput).toHaveValue(0);
  });

  test('should clamp excessive values', () => {
    const { container } = render(<App />);
    const volumeInput = container.querySelector('input[type="number"]');

    if (!volumeInput) throw new Error('Volume input not found');

    // Attempt to set a very large value
    fireEvent.change(volumeInput, { target: { value: '999999999' } });

    // Security Fix: It should be clamped to 1000000
    expect(volumeInput).toHaveValue(1000000);
  });
});
