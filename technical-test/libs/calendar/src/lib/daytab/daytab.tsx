import styles from './daytab.module.scss';
import { Meeting } from '@technical-test/calendar';
import { Fragment, ReactHTML, useState } from 'react';
import { Popupform } from '@technical-test/calendar';

/* eslint-disable-next-line */

export interface DaytabProps {
  day: string;
  meetings: [];
}

export function Daytab(props: DaytabProps) {
  const [trigger, setTrigger] = useState(false);
  console.log(trigger);

  const arr = [...Array(15).keys()];
  const hours = arr.map((i) => i + 6);

  const meets = {
    startHour: 6,
    endHour: 7,
  };

  const Meet = (h: number): JSX.Element | null => {
    if (h === meets.startHour) {
      return (
        <a href="https://www.w3schools.com" target="_blank">
          meeting
        </a>
      );
    } else {
      return null;
    }
  };

  return (
    <div className={styles.daytab}>
      <h1>{props.day}</h1>
      <div>
        {hours.map((h) => {
          return (
            <div
              className={styles.meetings}
              onClick={() => {
                setTrigger(true);
              }}
            >
              <p className={styles.hours}>{h}</p>
              {Meet(h)}
            </div>
          );
        })}
      </div>
      <Popupform trigger={trigger} setTrigger={setTrigger} />
    </div>
  );
}

Daytab.defaultProps = {
  day: 'unknown',
  meetings: [],
};

export default Daytab;
