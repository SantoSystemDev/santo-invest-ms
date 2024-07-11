import { ApiProperty } from '@nestjs/swagger';

export class UserCreateRequestDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
