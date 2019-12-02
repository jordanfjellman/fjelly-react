import React from 'react';
import { App } from '../App';
import { render } from '@testing-library/react';

describe('App', () => {

  it('should render', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display welcome message', async () => {
    const { findByText } = render(<App />);

    return findByText('Hello, React App!')
      .then(result => {
        expect(result).not.toBeNull();
      });
  });
});
