import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { Catalog } from './entities/catalog.entity';
import { CreateCatalogDto } from './dto/create-catalog.dto';
import { UpdateCatalogDto } from './dto/update-catalog.dto';

@Controller('catalog')
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Get()
  findAll(@Query('year') year: number, @Query('month') month: string): Promise<Catalog[]>{
    if(year && month){
      return this.catalogService.findByYearAndMonth(year, month);
    }
    return this.catalogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Catalog | undefined> {
    return this.catalogService.findOne(id);
  }

  @Post()
  create(@Body() createCatalogDto: CreateCatalogDto): Promise<Catalog> {
    return this.catalogService.create(createCatalogDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCatalogDto: UpdateCatalogDto): Promise<Catalog> {
    return this.catalogService.update(id, updateCatalogDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.catalogService.delete(id);
  }
  
}
