import { applyDecorators, Get } from '@nestjs/common';
import { ApiInternalServerErrorResponse, ApiOkResponse, ApiResponseOptions } from '@nestjs/swagger';

export function LocalApiGetAll(options?: ApiResponseOptions, path?: string | string[]): MethodDecorator {
  return applyDecorators(
    Get(path),
    ApiOkResponse({
      ...options,
      description: 'OK',
    }),
    ApiInternalServerErrorResponse({ description: 'INTERNAL_SERVER_ERROR' }),
  );
}
