import { Injectable } from '@nestjs/common';
import { CreateFiiDto } from './dto/create-fii.dto';
import { UpdateFiiDto } from './dto/update-fii.dto';

@Injectable()
export class FiisService {
  create(createFiiDto: CreateFiiDto) {
    return 'This action adds a new fii';
  }

  findAll() {
    return `This action returns all fiis`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fii`;
  }

  update(id: number, updateFiiDto: UpdateFiiDto) {
    return `This action updates a #${id} fii`;
  }

  remove(id: number) {
    return `This action removes a #${id} fii`;
  }
}
