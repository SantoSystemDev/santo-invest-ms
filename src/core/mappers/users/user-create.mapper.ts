import { Mapper } from 'src/core/base/mapper';
import { UserEntity } from 'src/core/entities/user.entity';
import { UserCreateRequestDto, UserResponseDto } from 'src/shared/dtos/users';

export class UserCreateMapper implements Mapper<UserCreateRequestDto, UserResponseDto, UserEntity> {
  public mapFromRequestDto(data: UserCreateRequestDto): UserEntity {
    const user = new UserEntity();

    user.name = data.name;
    user.email = data.email;
    user.password = data.password;

    return user;
  }

  public mapToResponseDto(data: UserEntity): UserResponseDto {
    const user = new UserResponseDto();

    user.id = data.id;
    user.name = data.name;
    user.email = data.email;

    return user;
  }
}
