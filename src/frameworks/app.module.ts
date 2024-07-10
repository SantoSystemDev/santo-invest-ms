import { Module } from '@nestjs/common';
import { FiisModule } from './fiis/fiis.module';
import { ScrapingModule } from './scraping/scraping.module';

@Module({
  imports: [ScrapingModule, FiisModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
