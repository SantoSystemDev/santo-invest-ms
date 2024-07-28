import { LocalInjectable } from '@shared/decorators';
import { FiiCreateRequestDto, FiiResponseDto } from '@shared/dtos/fii';
import { Service } from '../../../core/base';
import { FiiMapper } from '../../../core/fii';
import { FiiRepository } from '../repositories';

@LocalInjectable()
export class FiiCreateService implements Service<FiiResponseDto> {
  private readonly mapper: FiiMapper;

  constructor(private readonly repository: FiiRepository) {
    this.mapper = new FiiMapper();
  }

  async execute(dto: FiiCreateRequestDto): Promise<FiiResponseDto> {
    const entity = await this.mapper.toEntity(dto);
    const entityCreated = await this.repository.create(entity);
    return this.mapper.toDto(entityCreated);
  }
}
