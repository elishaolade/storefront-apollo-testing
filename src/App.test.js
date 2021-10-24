import React from 'react';
import ReactDOM from 'react-dom';
import App, { query } from './App';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';


it('renders without crashing', () => {
  const mocks = [
    {
      request: {
        query: query
      },
      result: {
        data: {
          shop: {
            name: 'graphql: React Example',
            description: 'An example shop with GraphQL.'
          }
        }
      }
    }
  ];
  render(<MockedProvider mocks={ mocks } addTypename={false}>
    <App />
  </MockedProvider>);
  expect(screen.getByText('graphql: React Example')).toBeInTheDocument();
});
