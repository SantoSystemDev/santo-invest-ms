import { IsNotEmpty, IsNumber, validate, ValidationError } from 'class-validator';
import { Entity } from '../../base';

export class FiiEntity extends Entity {
  private constructor() {
    super();
  }

  static async create(entity: FiiEntity): Promise<FiiEntity> {
    Object.assign(this, entity);
    Object.freeze(this);

    const erros: ValidationError[] = await validate(entity);

    if (erros.length > 0) throw new Error('INVALID_FII');

    return entity;
  }

  @IsNotEmpty()
  readonly label: string;

  @IsNotEmpty()
  readonly segment: string;

  @IsNumber()
  readonly quotation: number;

  @IsNumber()
  readonly ffoYield: number;

  @IsNumber()
  readonly dividendYield: number;

  @IsNumber()
  readonly pVP: number;

  @IsNumber()
  readonly marketValue: number;

  @IsNumber()
  readonly liquidity: number;

  @IsNumber()
  readonly quantityRealEstate: number;

  @IsNumber()
  readonly priceM2: number;

  @IsNumber()
  readonly rentM2: number;

  @IsNumber()
  readonly capRate: number;

  @IsNumber()
  readonly vacancy: number;
}
