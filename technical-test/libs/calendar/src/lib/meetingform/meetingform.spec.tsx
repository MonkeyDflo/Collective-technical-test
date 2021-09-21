import { render } from '@testing-library/react';

import Meetingform from './meetingform';

describe('Meetingform', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Meetingform />);
    expect(baseElement).toBeTruthy();
  });
});
