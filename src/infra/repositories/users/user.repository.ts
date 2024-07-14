import { UserEntity } from 'src/core/users/entities';
import { Repository } from '../base';

export abstract class UserRepository extends Repository<UserEntity> {}
