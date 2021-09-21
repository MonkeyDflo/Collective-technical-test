import { Test } from '@nestjs/testing';
import { MeetingsController } from './meetings.controller';
import { MeetingsService } from './meetings.service';

describe('MeetingsController', () => {
  let controller: MeetingsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [MeetingsService],
      controllers: [MeetingsController],
    }).compile();

    controller = module.get(MeetingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
