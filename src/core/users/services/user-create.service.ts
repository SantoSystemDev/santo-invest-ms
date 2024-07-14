import { Service } from 'src/core/base';
import { UserRepository } from 'src/infra/repositories/users';
import { LocalInjectable } from 'src/shared/decorators';
import { UserCreateRequestDto, UserResponseDto } from 'src/shared/dtos/users';
import { UserCreateMapper } from '../mappers';

@LocalInjectable()
export class UserCreateService implements Service<UserResponseDto> {
  constructor(
    private readonly repository: UserRepository,
    private readonly mapper: UserCreateMapper,
  ) {}

  public async execute(user: UserCreateRequestDto): Promise<UserResponseDto> {
    const entity = this.mapper.mapFromRequestDto(user);
    const entityCreated = await this.repository.create(entity);
    return this.mapper.mapToResponseDto(entityCreated);
  }
}
