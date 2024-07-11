import { applyDecorators, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiResponseOptions,
} from '@nestjs/swagger';

export function LocalApiGetOne(options?: ApiResponseOptions, path?: string | string[]): MethodDecorator {
  return applyDecorators(
    Get(path),
    ApiOkResponse({
      ...options,
      description: 'OK',
    }),
    ApiBadRequestResponse({ description: 'BAD_REQUEST' }),
    ApiInternalServerErrorResponse({ description: 'INTERNAL_SERVER_ERROR' }),
  );
}
