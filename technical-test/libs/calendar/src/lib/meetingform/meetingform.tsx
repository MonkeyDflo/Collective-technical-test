import './meetingform.module.scss';
import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useState,
} from 'react';
import { addMeeting } from '../../../axiosRequest';

/* eslint-disable-next-line */
export interface MeetingformProps {}

export function Meetingform(props: MeetingformProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [day, setDay] = useState('');
  const [startHour, setStartHour] = useState('');
  const [endHour, setEndHour] = useState('');

  const handleChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    evt.preventDefault();
    console.log('Date Selected!!');
    console.log(JSON.stringify(evt));
    setDay(evt.target.value);
  };

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // alert(`Submitting Name ${firstName} \n
    // Submitting LastName ${lastName} \n
    // Submitting Day ${day} \n
    // Submitting startHour ${startHour} \n
    // Submitting endHour ${endHour} \n`);
    console.log(evt);

    const generatedObj = await addMeeting(
      firstName,
      lastName,
      day,
      startHour,
      endHour
    );
    alert(`generatedId : ${JSON.stringify(generatedObj.data)}`);
  };

  const arr = [...Array(15).keys()];
  const hours = arr.map((i) => i + 6);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Day:
        <select
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
          }}
        >
          <option value="None">None</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
      </label>
      <br />
      <label>
        startHour :
        <select
          value={startHour}
          onChange={(e) => {
            setStartHour(e.target.value);
          }}
        >
          <option value="None">None</option>
          {hours.map((h) => {
            return <option value={h}>{h}</option>;
          })}
        </select>
      </label>
      <br />
      <label>
        endHour :
        <select
          value={endHour}
          onChange={(e) => {
            setEndHour(e.target.value);
          }}
        >
          <option value="None">None</option>
          {hours.map((h) => {
            return <option value={h}>{h}</option>;
          })}
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Meetingform;
