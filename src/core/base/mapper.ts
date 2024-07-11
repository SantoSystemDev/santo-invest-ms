import { Entity } from './entity';

export interface Mapper<TRequestDto, TResponseDto, TEntity extends Entity> {
  mapFromRequestDto(data: TRequestDto): TEntity;
  mapToResponseDto(data: TEntity): TResponseDto;
}
