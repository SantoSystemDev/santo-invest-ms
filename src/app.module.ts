import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScrapingModule } from './scraping/scraping.module';
import { FiisModule } from './fiis/fiis.module';

@Module({
  imports: [ScrapingModule, FiisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
