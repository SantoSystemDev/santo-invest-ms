import { LocalInjectable } from '@shared/decorators';
import { FiiCreateRequestDto, FiiResponseDto } from '@shared/dtos/fiis';
import { Mapper } from 'src/core/base';
import { FiiEntity } from '../entities';

@LocalInjectable()
export class FiiCreateMapper implements Mapper<FiiCreateRequestDto, FiiResponseDto, FiiEntity> {
  async mapFromRequestDto(dto: FiiCreateRequestDto): Promise<FiiEntity> {
    return await FiiEntity.create({ ...dto });
  }

  mapToResponseDto(entity: FiiEntity): FiiResponseDto {
    const { id } = entity;
    return new FiiResponseDto({ id, ...entity });
  }
}
