import '@testing-library/react/cleanup-after-each';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Button from '.';

afterEach(cleanup);

it('renders without crashing', () => {
  const { getByText } = render(
    <Button text="Click here"
            color="white"
            backgroundColor="darkred"
    />,
  );

  expect(getByText('Click here')).toBeVisible();
});
