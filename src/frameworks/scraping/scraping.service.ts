import { Injectable } from '@nestjs/common';
import axios, { AxiosError } from 'axios';
import * as iconv from 'iconv-lite';
import { parse } from 'node-html-parser';
import { FiiDto } from './dto/fii.dto';

@Injectable()
export class ScrapingService {
  private readonly url = 'https://www.fundamentus.com.br/fii_resultado.php';

  async getScrapedData(): Promise<FiiDto[]> {
    const html = await this.fetchData(this.url);
    return this.parseData(html);
  }

  private async fetchData(url: string): Promise<string> {
    try {
      const response = await axios.get(url, {
        responseType: 'arraybuffer',
      });
      const decodedData = iconv.decode(Buffer.from(response.data), 'ISO-8859-1');
      return decodedData;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error('AxiosError:', error.message);
      } else {
        console.error('Unknown error', error);
      }
      throw new Error(`Error fetching data: ${error}`);
    }
  }

  private async parseData(html: string): Promise<FiiDto[]> {
    const root = parse(html);
    const table = root.querySelector('table');

    if (!table) {
      console.log('Tabela não encontrada na página');
      return [];
    } else {
      const headers = table.querySelectorAll('th').map(header => this.normalizeHeader(header.textContent.trim()));
      const data: FiiDto[] = [];

      table.querySelectorAll('tr').forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length > 0) {
          const rowData: any = {};
          cells.forEach((cell, index) => {
            const key = headers[index] ? headers[index].replace(/ /g, '_') : `col_${index}`;
            rowData[key] = cell.textContent.trim();
          });

          const dto: FiiDto = this.getDto(rowData);
          data.push(dto);
        }
      });
      return data;
    }
  }

  private getDto(rowData: any): FiiDto {
    return new FiiDto({
      label: rowData['papel'],
      segment: rowData['segmento'],
      quotation: this.parseNumber(rowData['cotacao']),
      ffoYield: this.parseNumber(rowData['ffo_yield']),
      dividendYield: this.parseNumber(rowData['dividend_yield']),
      pVP: this.parseNumber(rowData['pvp']),
      marketValue: this.parseNumber(rowData['valor_mercado']),
      liquidity: this.parseNumber(rowData['liquidez']),
      quantityRealEstate: this.parseIntValue(rowData['qtd_imoveis']),
      priceM2: this.parseNumber(rowData['preco_m2']),
      rentM2: this.parseNumber(rowData['aluguel_m2']),
      capRate: this.parseNumber(rowData['cap_rate']),
      vacancy: this.parseNumber(rowData['vacancia_media']),
    });
  }

  private parseNumber(value: string): number {
    return parseFloat(value?.replaceAll('%', '').replaceAll('.', '').replaceAll(',', '.'));
  }

  private parseIntValue(value: string): number {
    return parseInt(value?.replaceAll('.', ''));
  }

  private normalizeHeader(header: string): string {
    const normalizedHeader = header
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s]/gi, '')
      .toLowerCase();

    if (!normalizedHeader.includes(' ')) return normalizedHeader;

    const words = normalizedHeader.split(' ');
    const shortHeader = `${words[0]}_${words.at(-1)}`;
    return shortHeader;
  }
}
