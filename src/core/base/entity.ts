import { randomUUID } from 'crypto';

export abstract class Entity {
  id?: string = randomUUID.toString();
}
