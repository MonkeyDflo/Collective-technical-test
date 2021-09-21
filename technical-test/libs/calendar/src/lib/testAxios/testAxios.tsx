import { useState } from 'react';
import './testAxios.module.scss';
import { deleteMeeting, getMeetings } from '../../../axiosRequest';

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
export interface TestAxiosProps {}

export function TestAxios(props: TestAxiosProps) {
  const initialValue: Array<Meeting> = [];
  const [meetings, setMeetings] = useState(initialValue);
  const retrieveMeetings = async (): Promise<void> => {
    const meetings = await getMeetings();
    setMeetings(meetings.data);
  };
  const delMeeting = async (meetingId: string): Promise<void> => {
    await deleteMeeting(meetingId);
    //
    //const meetings = await getMeetings();
    setMeetings([]);
  };
  return (
    <div>
      <button
        onClick={() => {
          retrieveMeetings();
        }}
      >
        {' '}
        Retrieve meetings
      </button>
      {meetings.map((meet) => (
        <div style={{ display: 'flex' }}>
          <p>{meet.firstName}</p>
          <button
            onClick={() => {
              delMeeting(meet.id);
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TestAxios;
