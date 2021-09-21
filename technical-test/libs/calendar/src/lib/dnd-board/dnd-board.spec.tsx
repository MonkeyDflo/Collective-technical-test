import { render } from '@testing-library/react';

import DndBoard from './dnd-board';

describe('DndBoard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DndBoard />);
    expect(baseElement).toBeTruthy();
  });
});
