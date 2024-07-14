import { Module } from '@nestjs/common';
import { UserCreateMapper } from 'src/core/users/mappers';
import { UserCreateService, UserGetAllService } from 'src/core/users/services';
import { UserCacheMemoryRepository, UserRepository } from 'src/infra/repositories/users';
import { UserController } from 'src/presentation/controllers';
import { FiisModule } from './fiis/fiis.module';
import { ScrapingModule } from './scraping/scraping.module';

@Module({
  imports: [ScrapingModule, FiisModule],
  controllers: [UserController],
  providers: [
    UserCreateService,
    UserCreateMapper,
    UserGetAllService,
    {
      provide: UserRepository,
      useClass: UserCacheMemoryRepository,
    },
  ],
})
export class AppModule {}
