import React from 'react';
import { renderWithQueryClient } from '../src/tests_utils/renderWithQueryClients';
import App from '../pages/index';

describe('should render the app without crash', () => {
  const wrapper = <App />;
  it('renders the home page', () => {
    renderWithQueryClient(wrapper);
    expect(wrapper).toBeTruthy();
  });
});
