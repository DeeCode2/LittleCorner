import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
  it('Renders title correctly', () => {
    render(<App/>);
    expect(screen.getByText(/Little Corner/)).toBeInTheDocument
  });
});