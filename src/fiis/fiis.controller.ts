import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateFiiDto } from './dto/create-fii.dto';
import { UpdateFiiDto } from './dto/update-fii.dto';
import { FiisService } from './fiis.service';

@Controller('fiis')
export class FiisController {
  constructor(private readonly fiisService: FiisService) {}

  @Post()
  create(@Body() createFiiDto: CreateFiiDto) {
    return this.fiisService.create(createFiiDto);
  }

  @Get()
  findAll() {
    return this.fiisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fiisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFiiDto: UpdateFiiDto) {
    return this.fiisService.update(+id, updateFiiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fiisService.remove(+id);
  }
}
