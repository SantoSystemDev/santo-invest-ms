import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/core/users/entities';
import { CacheMemoryRepository } from '../base/cache-memory.repository';
import { UserRepository } from './user.repository';

@Injectable()
export class UserCacheMemoryRepository extends CacheMemoryRepository<UserEntity> implements UserRepository {}
