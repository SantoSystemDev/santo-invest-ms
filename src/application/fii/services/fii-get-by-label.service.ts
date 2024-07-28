import { LocalInjectable } from '@shared/decorators';
import { FiiResponseDto } from '@shared/dtos/fii';
import { Service } from '../../../core/base';
import { FiiMapper } from '../../../core/fii';
import { FiiRepository } from '../repositories';

@LocalInjectable()
export class FiiGetByLabelService implements Service<FiiResponseDto> {
  private readonly mapper: FiiMapper;

  constructor(private readonly repository: FiiRepository) {
    this.mapper = new FiiMapper();
  }

  async execute(label: string): Promise<FiiResponseDto> {
    const entity = await this.repository.getOne({ label });
    return this.mapper.toDto(entity);
  }
}
