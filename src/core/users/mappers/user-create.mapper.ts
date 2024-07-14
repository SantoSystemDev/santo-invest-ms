import { Mapper } from 'src/core/base';
import { LocalInjectable } from 'src/shared/decorators';
import { UserCreateRequestDto, UserResponseDto } from 'src/shared/dtos/users';
import { UserEntity } from '../entities';

@LocalInjectable()
export class UserCreateMapper implements Mapper<UserCreateRequestDto, UserResponseDto, UserEntity> {
  public mapFromRequestDto(dto: UserCreateRequestDto): UserEntity {
    const { name, email, password } = dto;
    return new UserEntity({ name, email, password });
  }

  public mapToResponseDto(entity: UserEntity): UserResponseDto {
    const { id, name, email } = entity;
    return new UserResponseDto({ id, name, email });
  }
}
