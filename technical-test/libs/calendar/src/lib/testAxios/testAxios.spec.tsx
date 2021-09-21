import { render } from '@testing-library/react';

import Dnd from './testAxios';

describe('Dnd', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dnd />);
    expect(baseElement).toBeTruthy();
  });
});
