import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from './entities/sale.entity';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Sale])],
  controllers: [SaleController],
  providers: [SaleService],
})
export class SaleModule {}
