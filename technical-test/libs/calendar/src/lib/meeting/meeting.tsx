import './meeting.module.scss';

/* eslint-disable-next-line */
export interface MeetingProps {}

export function Meeting(props: MeetingProps) {
  return <div style={{ background: 'red' }}>Welcome to Meeting!</div>;
}

export default Meeting;
