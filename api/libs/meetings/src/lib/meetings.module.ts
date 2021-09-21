import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MeetingsController } from './meetings.controller';
import { MeetingSchema } from './meetings.model';
import { MeetingsService } from './meetings.service';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Meeting', schema: MeetingSchema }]),
  ],
  controllers: [MeetingsController],
  providers: [MeetingsService],
  exports: [MeetingsService],
})
export class MeetingsModule {}
