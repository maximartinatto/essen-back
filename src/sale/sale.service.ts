import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from './entities/sale.entity';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';

@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(Sale)
    private readonly saleRepository: Repository<Sale>,
  ){}

  findAll(): Promise<Sale[]>{
    return this.saleRepository.find();
  }

  findOne(id: number): Promise<Sale>{
    return this.saleRepository.findOneBy({ id });
  }

  create(createSaleDto: CreateSaleDto): Promise<Sale>{
    const sale = this.saleRepository.create(createSaleDto);
    return this.saleRepository.save(sale);
  }

  update(id: number, updateSaleDto: UpdateSaleDto): Promise<Sale>{
    return this.saleRepository.save({ id, ...UpdateSaleDto });
  }

  delete(id: number): Promise<void>{
    return this.saleRepository.delete(id).then();
  }
}
