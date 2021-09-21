import { Module } from '@nestjs/common';
import { MeetingsModule } from '../../../../libs/meetings/src';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MeetingsModule,
    MongooseModule.forRoot(
      'mongodb+srv://api:collective@cluster0.ixpej.mongodb.net/test?retryWrites=true&w=majority'
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
