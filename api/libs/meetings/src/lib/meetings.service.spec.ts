import { Test } from '@nestjs/testing';
import { MeetingsService } from './meetings.service';

describe('MeetingsService', () => {
  let service: MeetingsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [MeetingsService],
    }).compile();

    service = module.get(MeetingsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
