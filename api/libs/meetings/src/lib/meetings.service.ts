import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Meeting } from './meetings.model';

@Injectable()
export class MeetingsService {
  private meetings: Meeting[] = [];

  constructor(
    @InjectModel('Meeting') private readonly meetingModel: Model<Meeting>
  ) {}

  async insertMeeting(
    firstName: string,
    lastName: string,
    day: string,
    startHour: string,
    endHour: string
    //zoomLink: string
  ) {
    //const zoomLink = await generateZoomLink()
    const zoomLink = 'http://test-app.com';
    const newMeeting = new this.meetingModel({
      firstName: firstName,
      lastName: lastName,
      day: day,
      startHour: startHour,
      endHour: endHour,
      zoomLink: zoomLink,
    });
    const result = await newMeeting.save();
    console.log(result);
    return result;
  }

  async getMeetings(): Promise<Meeting[]> {
    const meetings = await this.meetingModel.find().exec();
    console.log(meetings);
    return meetings as Meeting[];
  }

  async getSingleMeeting(meetingId: string): Promise<Meeting> {
    try {
      const meeting = await this.meetingModel.findById(meetingId);
      return meeting as Meeting;
    } catch (error) {
      throw new NotFoundException('Could not find the meeting !');
    }
  }

  async updateMeeting(
    meetingId: string,
    firstName?: string,
    lastName?: string,
    day?: string,
    startHour?: string,
    endHour?: string,
    zoomLink?: string
  ) {
    try {
      const updatedMeeting = await this.meetingModel.findById(meetingId);
      if (firstName) {
        updatedMeeting.firstName = firstName;
      }
      if (lastName) {
        updatedMeeting.lastName = lastName;
      }
      if (day) {
        updatedMeeting.day = day;
      }
      if (startHour) {
        updatedMeeting.startHour = startHour;
      }
      if (endHour) {
        updatedMeeting.endHour = endHour;
      }
      if (zoomLink) {
        updatedMeeting.zoomLink = zoomLink;
      }
      updatedMeeting.save();
      console.log('updatedMeeting : ', updatedMeeting);
      return updatedMeeting;
    } catch (error) {
      throw new NotFoundException(' Could not find product !');
    }
  }

  async deleteMeeting(meetingId: string) {
    try {
      console.log(meetingId);
      const meeting = await this.meetingModel.deleteOne({ meetingId }).exec();
      console.log(meeting);
    } catch (error) {
      throw new NotFoundException(' Could not find product !');
    }
  }
}
