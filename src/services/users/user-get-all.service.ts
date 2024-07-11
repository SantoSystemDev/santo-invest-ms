import { Injectable } from '@nestjs/common';
import { Service } from 'src/core/base';
import { UserCreateMapper } from 'src/core/mappers/users';
import { UserRepository } from 'src/infra/repositories/users';
import { UserResponseDto } from 'src/shared/dtos/users';

@Injectable()
export class UserGetAllService implements Service<UserResponseDto[]> {
  private userCreateMapper: UserCreateMapper;

  constructor(private readonly repository: UserRepository) {
    this.userCreateMapper = new UserCreateMapper();
  }

  public async execute(): Promise<UserResponseDto[]> {
    return this.repository.getAll().then(data => data.map(this.userCreateMapper.mapToResponseDto));
  }
}
