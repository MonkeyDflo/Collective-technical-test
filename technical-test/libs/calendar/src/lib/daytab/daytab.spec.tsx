import { render } from '@testing-library/react';

import Daytab from './daytab';

describe('Daytab', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Daytab />);
    expect(baseElement).toBeTruthy();
  });
});
