import { Entity } from './entity';

export interface Mapper<TRequestDto, TResponseDto, TEntity extends Entity> {
  toEntity(dto: TRequestDto): Promise<TEntity>;
  toDto(entity: TEntity): TResponseDto;
}
