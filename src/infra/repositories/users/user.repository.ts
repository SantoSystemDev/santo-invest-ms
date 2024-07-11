import { UserEntity } from 'src/core/entities';
import { Repository } from '../base';

export abstract class UserRepository extends Repository<UserEntity> {}
