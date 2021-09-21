import './dnd-game.module.scss';

interface Meeting {
  id: string;
  firstName: string;
  lastName: string;
  day: string;
  startHour: string;
  endHour: string;
  zoomLink: string;
}

export function observe(receive: (meetings: Meeting[]) => JSX.Element) {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const randDay = () => days[Math.floor(Math.random() % days.length)];
  const randMeet = [
    {
      id: '1',
      firstName: 'test1',
      lastName: 'test1',
      day: randDay(),
      startHour: '7',
      endHour: '8',
      zoomLink: 'http://test-app.com',
    },
  ];
  setInterval(() => receive(randMeet), 500);
}

/* eslint-disable-next-line */
export interface DndGameProps {}

export function DndGame(props: DndGameProps) {
  return (
    <div>
      <h1>Welcome to DndGame!</h1>
    </div>
  );
}

export default DndGame;
