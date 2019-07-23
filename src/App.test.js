import '@testing-library/react/cleanup-after-each';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import App from './App';
import TextInput from './components/TextInput';

afterEach(cleanup);

it('renders without crashing', () => {
  render(<App />);
});

it('inputs message', () => {
  const { getByPlaceholderText, getByText } = render(<TextInput />);

  const inputMessage = 'react';
  fireEvent.change(getByPlaceholderText(/type here/i), {
    target: { value: inputMessage },
  });

  expect(getByText(inputMessage)).toBeVisible();
});
