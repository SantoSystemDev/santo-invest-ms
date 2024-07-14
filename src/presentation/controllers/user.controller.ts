import { Body } from '@nestjs/common';
import { UserCreateService, UserGetAllService } from 'src/core/users/services';
import { LocalApiGetAll, LocalApiPost, LocalController } from 'src/shared/decorators';
import { UserCreateRequestDto, UserResponseDto } from 'src/shared/dtos/users';

@LocalController('/users')
export class UserController {
  constructor(
    private readonly userCreate: UserCreateService,
    private readonly userGetAll: UserGetAllService,
  ) {}

  @LocalApiPost({ type: UserResponseDto })
  public create(@Body() user: UserCreateRequestDto): Promise<UserResponseDto> {
    return this.userCreate.execute(user);
  }

  @LocalApiGetAll({ type: [UserResponseDto] })
  public findAll(): Promise<UserResponseDto[]> {
    return this.userGetAll.execute();
  }
}
