import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SaleService } from './sale.service';
import { Sale } from './entities/sale.entity';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';

@Controller('sale')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @Get()
  findAll(): Promise<Sale[]>{
    return this.saleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Sale | undefined> {
    return this.saleService.findOne(id);
  }

  @Post()
  create(@Body() createSaleDto: CreateSaleDto): Promise<Sale> {
    return this.saleService.create(createSaleDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateSaleDto: UpdateSaleDto): Promise<Sale> {
    return this.saleService.update(id, updateSaleDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.saleService.delete(id);
  }
}
