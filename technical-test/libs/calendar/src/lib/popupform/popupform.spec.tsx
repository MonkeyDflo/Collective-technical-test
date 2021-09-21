import { render } from '@testing-library/react';

import Popupform from './popupform';

describe('Popupform', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Popupform />);
    expect(baseElement).toBeTruthy();
  });
});
