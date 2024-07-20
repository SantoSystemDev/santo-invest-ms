export class FiiCreateRequestDto {
  constructor(dto: FiiCreateRequestDto) {
    Object.assign(this, dto);
  }

  label: string;
  segment: string;
  quotation: number;
  ffoYield: number;
  dividendYield: number;
  pVP: number;
  marketValue: number;
  liquidity: number;
  quantityRealEstate: number;
  priceM2: number;
  rentM2: number;
  capRate: number;
  vacancy: number;
}
