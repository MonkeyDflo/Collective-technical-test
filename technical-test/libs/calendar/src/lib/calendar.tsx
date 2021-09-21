import styles from './calendar.module.scss';
import { Daytab, Popupform, TestAxios, Meeting, DndSquare, DndBoard } from '..';
import { Meetingform } from '..';
import { useState } from 'react';
import { observe } from './dnd-game/dnd-game';

interface Meeting {
  id: string;
  firstName: string;
  lastName: string;
  day: string;
  startHour: string;
  endHour: string;
  zoomLink: string;
}

/* eslint-disable-next-line */
export interface CalendarProps {}

export function Calendar(props: CalendarProps) {
  // const [trigger, setTrigger] = useState(false);
  // console.log(trigger);
  const daytabs = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  return (
    <>
      <div className={styles.calendar}>
        <h1>Welcome to Calendar!</h1>
      </div>
      <DndBoard
        meetings={[
          {
            id: '1',
            firstName: 'test1',
            lastName: 'test1',
            day: 'Monday',
            startHour: '7',
            endHour: '8',
            zoomLink: 'http://test-app.com',
          },
        ]}
      />
      {observe((meetings: Array<Meeting>) => (
        <DndBoard meetings={meetings} />
      ))}
    </>
  );
}

export default Calendar;
