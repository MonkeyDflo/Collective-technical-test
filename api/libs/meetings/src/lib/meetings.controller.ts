import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { MeetingsService } from './meetings.service';
import { addMeetingDto, updateMeetingDto } from './dto';

@Controller('meetings')
export class MeetingsController {
  constructor(private meetingsService: MeetingsService) {}

  @Post()
  //@ApiOkResponses({ type: })
  async addMeeting(
    // @Body('firstName') firstName: string,
    // @Body('lastName') lastName: string,
    // @Body('day') day: string,
    // @Body('dtartHour') startHour: string,
    // @Body('endHour') endHour: string,
    // @Body('zoomLink') zoomLink: string
    @Body() addMeetingDto: addMeetingDto
  ) {
    const generatedId = await this.meetingsService.insertMeeting(
      addMeetingDto.firstName,
      addMeetingDto.lastName,
      addMeetingDto.day,
      addMeetingDto.startHour,
      addMeetingDto.endHour
      //addMeetingDto.zoomLink
    );
    console.log('generatedId : ', generatedId);
    return { id: generatedId };
  }

  @Get()
  async getAllMeetings() {
    const meetings = await this.meetingsService.getMeetings();
    return meetings.map((meeting) => ({
      id: meeting.id,
      firstName: meeting.firstName,
      lastName: meeting.lastName,
      day: meeting.day,
      startHour: meeting.startHour,
      endHour: meeting.endHour,
      zoomLink: meeting.zoomLink,
    }));
  }

  @Get(':id')
  getMeeting(@Param('id') meetingId: string) {
    return this.meetingsService.getSingleMeeting(meetingId);
  }

  @Patch(':id')
  async updateMeeting(
    @Param('id') meetingId: string,
    @Body() updateMeetingDto: updateMeetingDto
    // @Body('firstName') firstName: string,
    // @Body('lastName') lastName: string,
    // @Body('day') day: string,
    // @Body('startHour') startHour: string,
    // @Body('endHour') endHour: string,
    // @Body('zoomLink') zoomLink: string
  ) {
    const updatedMeeting = await this.meetingsService.updateMeeting(
      meetingId,
      updateMeetingDto.firstName,
      updateMeetingDto.lastName,
      updateMeetingDto.day,
      updateMeetingDto.startHour,
      updateMeetingDto.endHour,
      updateMeetingDto.zoomLink
    );
    return updatedMeeting;
  }

  @Delete(':id')
  async removeMeeting(@Param('id') meetingId: string) {
    this.meetingsService.deleteMeeting(meetingId);
    return null;
  }
}
