import { applyDecorators, Delete } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiResponseOptions,
} from '@nestjs/swagger';

export function LocalApiDelete(options?: ApiResponseOptions, path?: string | string[]): MethodDecorator {
  return applyDecorators(
    Delete(path),
    ApiNoContentResponse({
      ...options,
      description: 'NO_CONTENT',
    }),
    ApiBadRequestResponse({ description: 'BAD_REQUEST' }),
    ApiInternalServerErrorResponse({ description: 'INTERNAL_SERVER_ERROR' }),
  );
}
