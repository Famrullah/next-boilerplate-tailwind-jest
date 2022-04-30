import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { renderWithQueryClient } from '../tests_utils/renderWithQueryClients';
import App from '../pages/index';

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};

describe('should render the app without crash', () => {
  const wrapper = createWrapper();
  it('renders the home page', () => {
    renderWithQueryClient(wrapper);
    expect(wrapper).toBeTruthy();
  });
});
