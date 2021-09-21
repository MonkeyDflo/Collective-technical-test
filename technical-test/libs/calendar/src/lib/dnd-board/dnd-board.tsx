import './dnd-board.module.scss';
import { DndSquare, Meeting } from '@technical-test/calendar';

interface Meeting {
  id: string;
  firstName: string;
  lastName: string;
  day: string;
  startHour: string;
  endHour: string;
  zoomLink: string;
}

function renderSquare(day: string, meetings: Meeting[]) {
  const meeting = meetings.find((meet) => meet.day === day) ? (
    <Meeting />
  ) : null;

  return (
    <div key={day} style={{ width: '12.5%', height: '40px' }}>
      <DndSquare>{meeting}</DndSquare>
    </div>
  );
}

/* eslint-disable-next-line */
export interface DndBoardProps {
  meetings: Meeting[];
}

export function DndBoard(props: DndBoardProps) {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  // const hours = ['6', '7', '8', '9', '10', '11', '12'];
  const squares: Array<JSX.Element> = [];
  days.map((day) => {
    squares.push(renderSquare(day, props.meetings));
  });
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {squares}
    </div>
  );
}

export default DndBoard;
