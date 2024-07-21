import { LocalInjectable } from '@shared/decorators';
import { FiiCreateRequestDto, FiiResponseDto } from '@shared/dtos/fii';
import { Service } from '../../../core/base';
import { FiiCreateMapper } from '../../../core/fii';
import { FiiRepository } from '../repositories';

@LocalInjectable()
export class FiiCreateService implements Service<FiiResponseDto> {
  private readonly mapper: FiiCreateMapper;

  constructor(private readonly repository: FiiRepository) {
    this.mapper = new FiiCreateMapper();
  }

  async execute(dto: FiiCreateRequestDto): Promise<FiiResponseDto> {
    const entity = await this.mapper.mapEntityFromDto(dto);
    const entityCreated = await this.repository.create(entity);
    return this.mapper.mapEntityToDto(entityCreated);
  }
}
