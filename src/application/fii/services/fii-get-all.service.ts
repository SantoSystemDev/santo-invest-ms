import { LocalInjectable } from '@shared/decorators';
import { FiiResponseDto } from '@shared/dtos/fii';
import { Service } from '../../../core/base';
import { FiiMapper } from '../../../core/fii';
import { FiiRepository } from '../repositories';

@LocalInjectable()
export class FiiGetAllService implements Service<FiiResponseDto[]> {
  private readonly mapper: FiiMapper;

  constructor(private readonly repository: FiiRepository) {
    this.mapper = new FiiMapper();
  }

  async execute(): Promise<FiiResponseDto[]> {
    const entities = await this.repository.getAll();
    return entities.map(entity => this.mapper.toDto(entity));
  }
}
