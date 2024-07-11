import { applyDecorators, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiResponseOptions,
} from '@nestjs/swagger';

export function LocalApiPost(options?: ApiResponseOptions, path?: string | string[]): MethodDecorator {
  return applyDecorators(
    Post(path),
    ApiCreatedResponse({
      ...options,
      description: 'CREATED',
    }),
    ApiBadRequestResponse({ description: 'BAD_REQUEST' }),
    ApiInternalServerErrorResponse({ description: 'INTERNAL_SERVER_ERROR' }),
  );
}
