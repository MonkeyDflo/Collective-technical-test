import { render } from '@testing-library/react';

import Meeting from './meeting';

describe('Meeting', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Meeting />);
    expect(baseElement).toBeTruthy();
  });
});
