import { applyDecorators, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export function LocalController(path?: string): ClassDecorator {
  return applyDecorators(ApiTags(path), Controller(path));
}
