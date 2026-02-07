import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the calculator', () => {
    render(<App />);
    expect(screen.getByText(/Profit Calculator/i)).toBeInTheDocument();
  });

  it('validates monthly volume input (prevents negative values)', () => {
    render(<App />);

    const inputs = screen.getAllByDisplayValue('20000');
    const volumeInput = inputs.find(
      (el): el is HTMLInputElement => el instanceof HTMLInputElement && el.type === 'number'
    );

    if (!volumeInput) throw new Error('Volume input not found');

    // Try to set negative value
    fireEvent.change(volumeInput, { target: { value: '-5000' } });

    // The state should not update, so input value should revert to 20000
    expect(volumeInput.value).toBe('20000');

    // Try to set valid value
    fireEvent.change(volumeInput, { target: { value: '25000' } });
    expect(volumeInput.value).toBe('25000');
  });

  it('validates current fee input (prevents negative values and > 100)', () => {
    render(<App />);

    const inputs = screen.getAllByDisplayValue('30');
    const feeInput = inputs.find(
      (el): el is HTMLInputElement => el instanceof HTMLInputElement && el.type === 'number'
    );

    if (!feeInput) throw new Error('Fee input not found');

    // Try to set negative value
    fireEvent.change(feeInput, { target: { value: '-10' } });
    expect(feeInput.value).toBe('30');

    // Try to set value > 100
    fireEvent.change(feeInput, { target: { value: '150' } });
    expect(feeInput.value).toBe('30');

    // Try to set valid value
    fireEvent.change(feeInput, { target: { value: '40' } });
    expect(feeInput.value).toBe('40');
  });
});
