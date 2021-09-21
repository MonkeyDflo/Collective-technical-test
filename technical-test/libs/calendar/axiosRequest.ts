import axios, { AxiosResponse } from 'axios';
const BASE_API_URL = 'http://localhost:3333/api';

/* eslint-disable-next-line */
// findByid
export const getMeeting = async (
  meetingId: string
): Promise<AxiosResponse<Meeting>> => {
  const meeting = await axios.get(BASE_API_URL + `/meetings/${meetingId}`);
  return meeting;
};
//findAll
export const getMeetings = async (): Promise<AxiosResponse<Meeting[]>> => {
  const meetings = await axios.get(BASE_API_URL + `/meetings`);
  return meetings;
};
//post
export const addMeeting = async (
  firstName: string,
  lastName: string,
  day: string,
  startHour: string,
  endHour: string
): Promise<AxiosResponse<string>> => {
  const generatedObj = await axios.post(BASE_API_URL + `/meetings`, {
    firstName,
    lastName,
    day,
    startHour,
    endHour,
  });
  return generatedObj;
};

//update
export const updateMeeting = async (
  meetingId: string,
  firstName?: string,
  lastName?: string,
  day?: string,
  startHour?: string,
  endHour?: string
): Promise<AxiosResponse<string>> => {
  const updatedMeeting = await axios.patch(
    BASE_API_URL + `/meetings/${meetingId}`,
    {
      firstName,
      lastName,
      day,
      startHour,
      endHour,
    }
  );
  return updatedMeeting;
};
//delete
export const deleteMeeting = async (meetingId: string): Promise<void> => {
  await axios.delete(BASE_API_URL + `/meetings/${meetingId}`);
};

interface Meeting {
  id: string;
  firstName: string;
  lastName: string;
  day: string;
  startHour: string;
  endHour: string;
  zoomLink: string;
}
