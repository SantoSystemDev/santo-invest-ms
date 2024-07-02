import { Test, TestingModule } from '@nestjs/testing';
import { FiisController } from './fiis.controller';
import { FiisService } from './fiis.service';

describe('FiisController', () => {
  let controller: FiisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FiisController],
      providers: [FiisService],
    }).compile();

    controller = module.get<FiisController>(FiisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
