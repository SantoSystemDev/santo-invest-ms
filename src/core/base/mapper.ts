import { Entity } from './entity';

export interface Mapper<TRequestDto, TResponseDto, TEntity extends Entity> {
  mapEntityFromDto(dto: TRequestDto): Promise<TEntity>;
  mapEntityToDto(entity: TEntity): TResponseDto;
}
