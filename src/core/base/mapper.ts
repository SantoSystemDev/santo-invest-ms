import { Entity } from './entity';

export interface Mapper<TRequestDto, TResponseDto, TEntity extends Entity> {
  mapFromRequestDto(dto: TRequestDto): TEntity;
  mapToResponseDto(entity: TEntity): TResponseDto;
}
