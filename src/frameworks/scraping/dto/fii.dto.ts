export class FiiDto {
  constructor(object: Partial<FiiDto>) {
    Object.assign(this, object);
  }

  readonly label: string;
  readonly segment: string;
  readonly quotation: number;
  readonly ffoYield: number;
  readonly dividendYield: number;
  readonly pVP: number;
  readonly marketValue: number;
  readonly liquidity: number;
  readonly quantityRealEstate: number;
  readonly priceM2: number;
  readonly rentM2: number;
  readonly capRate: number;
  readonly vacancy: number;
}
