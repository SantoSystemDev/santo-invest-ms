import { Module } from '@nestjs/common';
import { UserCacheMemoryRepository, UserRepository } from 'src/infra/repositories/users';
import { UserController } from 'src/presentation/controllers';
import { UserCreateService, UserGetAllService } from 'src/services/users';
import { FiisModule } from './fiis/fiis.module';
import { ScrapingModule } from './scraping/scraping.module';

@Module({
  imports: [ScrapingModule, FiisModule],
  controllers: [UserController],
  providers: [
    UserCreateService,
    UserGetAllService,
    {
      provide: UserRepository,
      useClass: UserCacheMemoryRepository,
    },
  ],
})
export class AppModule {}
