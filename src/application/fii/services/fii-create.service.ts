import { FiiCreateRequestDto, FiiResponseDto } from '@shared/dtos/fii';
import { Service } from '../../../core/base';
import { FiiCreateMapper } from '../../../core/fii';
import { FiiRepository } from '../repositories';

export class FiiCreateService implements Service<FiiResponseDto> {
  constructor(
    private readonly repository: FiiRepository,
    private readonly mapper: FiiCreateMapper,
  ) {}

  async execute(dto: FiiCreateRequestDto): Promise<FiiResponseDto> {
    const entity = await this.mapper.mapEntityFromDto(dto);
    const entityCreated = await this.repository.create(entity);
    return this.mapper.mapEntityToDto(entityCreated);
  }
}
