import { FiiCreateRequestDto, FiiResponseDto } from '@shared/dtos/fii';
import { Mapper } from '../../base';
import { FiiEntity } from '../entities';

export class FiiMapper implements Mapper<FiiCreateRequestDto, FiiResponseDto, FiiEntity> {
  async toEntity(dto: FiiCreateRequestDto): Promise<FiiEntity> {
    return await FiiEntity.create({ ...dto });
  }

  toDto(entity: FiiEntity): FiiResponseDto {
    const { id } = entity;
    return new FiiResponseDto({ id, ...entity });
  }
}
