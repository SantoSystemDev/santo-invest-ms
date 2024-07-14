import { Entity } from 'src/core/base';

export class UserEntity extends Entity {
  readonly name: string;
  readonly password: string;
  readonly email: string;

  constructor(entity: UserEntity) {
    super();
    Object.assign(this, entity);
    Object.freeze(this);
  }
}
