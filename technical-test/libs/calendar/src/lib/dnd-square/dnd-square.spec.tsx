import { render } from '@testing-library/react';

import DndSquare from './dnd-square';

describe('DndSquare', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DndSquare />);
    expect(baseElement).toBeTruthy();
  });
});
