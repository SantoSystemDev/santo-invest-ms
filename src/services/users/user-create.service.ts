import { Injectable } from '@nestjs/common';
import { Service } from 'src/core/base';
import { UserCreateMapper } from 'src/core/mappers/users';
import { UserRepository } from 'src/infra/repositories/users';
import { UserCreateRequestDto, UserResponseDto } from 'src/shared/dtos/users';

@Injectable()
export class UserCreateService implements Service<UserResponseDto> {
  private userCreateMapper: UserCreateMapper;

  constructor(private readonly repository: UserRepository) {
    this.userCreateMapper = new UserCreateMapper();
  }

  public async execute(user: UserCreateRequestDto): Promise<UserResponseDto> {
    const entity = this.userCreateMapper.mapFromRequestDto(user);
    const entityCreated = await this.repository.create(entity);
    return this.userCreateMapper.mapToResponseDto(entityCreated);
  }
}
