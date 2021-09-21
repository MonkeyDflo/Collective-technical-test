import { ApiProperty } from '@nestjs/swagger';

export class addMeetingDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  day: string;

  @ApiProperty()
  startHour: string;

  @ApiProperty()
  endHour: string;

  // @ApiProperty()
  // zoomLink: string;
}
