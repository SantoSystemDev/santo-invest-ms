import { LocalInjectable } from '@shared/decorators';
import { FiiRepository } from '../../../application/fii';
import { FiiEntity } from '../../../core/fii';
import { CacheMemoryRepository } from '../base';

@LocalInjectable()
export class FiiCacheMemoryRepository extends CacheMemoryRepository<FiiEntity> implements FiiRepository {}
