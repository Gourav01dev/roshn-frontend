import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailPage from '../DetailPage';


jest.mock('../components/detailedUser/DetailedUser', () => {
  return () => <div data-testid="detailed-user">Mocked DetailedUser Component</div>;
});

describe('DetailPage Component', () => {
  test('renders DetailPage without crashing', () => {
    render(<DetailPage />);
    const detailedUserElement = screen.getByTestId('detailed-user');
    expect(detailedUserElement).toBeInTheDocument();
  });

  test('renders DetailedUser component inside DetailPage', () => {
    render(<DetailPage />);
    const detailedUserElement = screen.getByTestId('detailed-user');
    expect(detailedUserElement).toHaveTextContent('Mocked DetailedUser Component');
  });
});
