import { Module } from '@nestjs/common';
import { FiisController } from './fiis.controller';
import { FiisService } from './fiis.service';

@Module({
  controllers: [FiisController],
  providers: [FiisService],
})
export class FiisModule {}
