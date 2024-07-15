import { IsNotEmpty, IsNumber, validate, ValidationError } from 'class-validator';
import { Entity } from 'src/core/base';

export class FiiEntity extends Entity {
  private constructor() {
    super();
  }

  async create(entity: FiiEntity): Promise<FiiEntity | ValidationError[]> {
    Object.assign(this, entity);
    Object.freeze(this);

    return (await validate(entity)) || entity;
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
