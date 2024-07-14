import { ApiProperty } from '@nestjs/swagger';

export class UserCreateRequestDto {
  constructor(dto: UserCreateRequestDto) {
    Object.assign(this, dto);
  }

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
