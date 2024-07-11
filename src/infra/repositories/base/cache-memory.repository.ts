import { randomUUID } from 'crypto';
import { Entity } from 'src/core/base/entity';
import { Repository } from './repository';

export class CacheMemoryRepository<TEntity extends Entity> extends Repository<TEntity> {
  protected readonly items: TEntity[];

  constructor() {
    super();
    this.items = [];
  }

  public async create(data: TEntity): Promise<TEntity> {
    data.id = randomUUID().toString();

    const count = this.items.push(data);

    return this.items[count - 1];
  }

  public async update(id: string, data: TEntity): Promise<TEntity> {
    const index = this.getIndexById(id);

    if (index === -1) {
      // todo: trate o caso de não encontrar o item a ser atualizado
    }

    this.items[index] = data;

    return this.items[index];
  }

  public async patch(id: string, data: Partial<TEntity>): Promise<TEntity> {
    const index = this.getIndexById(id);

    if (index === -1) {
      // todo: trate o caso de não encontrar o item a ser atualizado
    }

    for (const key in data) {
      this.items[index][key] = data[key];
    }

    return this.items[index];
  }

  public async getById(id: string): Promise<TEntity> {
    const items = this.items.find(item => item.id === id);

    return items;
  }

  public async getAll(): Promise<TEntity[]> {
    return this.items;
  }

  public async getOne(filter: Partial<TEntity>): Promise<TEntity> {
    return this.getMany(filter).then(items => (items.length > 0 ? items[0] : null));
  }

  public async getMany(filter: Partial<TEntity>): Promise<TEntity[]> {
    let filtered = this.items;

    for (const key in filter) {
      filtered = filtered.filter(item => item[key] === filter[key]);
    }

    return filtered;
  }

  public async delete(id: string): Promise<void> {
    const index = this.getIndexById(id);

    if (index === -1) {
      // todo: trate o caso de não encontrar o item a ser deletado
    }

    this.items.splice(index, 1);
    return;
  }

  private getIndexById(id: string) {
    return this.items.findIndex(item => item.id === id);
  }
}
