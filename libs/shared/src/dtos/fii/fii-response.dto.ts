export class FiiResponseDto {
  constructor(dto: FiiResponseDto) {
    Object.assign(this, dto);
  }

  id: string;
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
