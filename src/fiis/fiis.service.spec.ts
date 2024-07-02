import { Test, TestingModule } from '@nestjs/testing';
import { FiisService } from './fiis.service';

describe('FiisService', () => {
  let service: FiisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FiisService],
    }).compile();

    service = module.get<FiisService>(FiisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
