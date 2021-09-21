import * as mongoose from "mongoose";

export const MeetingSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  day: { type: String, required: true },
  startHour: { type: String, required: true },
  endHour: { type: String, required: true },
  zoomLink: { type: String, required: true },
});

export interface Meeting {
  id: string;
  firstName: string;
  lastName: string;
  day: string;
  startHour: string;
  endHour: string;
  zoomLink: string;
}
