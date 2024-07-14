import { Service } from 'src/core/base';
import { UserRepository } from 'src/infra/repositories/users';
import { LocalInjectable } from 'src/shared/decorators';
import { UserResponseDto } from 'src/shared/dtos/users';
import { UserCreateMapper } from '../mappers';

@LocalInjectable()
export class UserGetAllService implements Service<UserResponseDto[]> {
  constructor(
    private readonly repository: UserRepository,
    private readonly mapper: UserCreateMapper,
  ) {}

  public async execute(): Promise<UserResponseDto[]> {
    const entities = await this.repository.getAll();
    return entities.map(this.mapper.mapToResponseDto);
  }
}
