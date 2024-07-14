import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  constructor(dto: UserResponseDto) {
    Object.assign(this, dto);
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;
}
