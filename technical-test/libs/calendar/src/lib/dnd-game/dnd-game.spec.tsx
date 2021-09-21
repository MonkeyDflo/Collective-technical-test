import { render } from '@testing-library/react';

import DndGame from './dnd-game';

describe('DndGame', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DndGame />);
    expect(baseElement).toBeTruthy();
  });
});
