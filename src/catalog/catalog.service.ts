import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Catalog } from './entities/catalog.entity';
import { CreateCatalogDto } from './dto/create-catalog.dto';
import { UpdateCatalogDto } from './dto/update-catalog.dto';

@Injectable()
export class CatalogService {
  constructor(
    @InjectRepository(Catalog)
    private readonly catalogRepository: Repository<Catalog>,
  ){}

  findAll(): Promise<Catalog[]>{
    return this.catalogRepository.find();
  }

  findOne(id: number): Promise<Catalog | undefined>{
    return this.catalogRepository.findOneBy({ id });
  } 

  findByYearAndMonth(year: number, month: string): Promise<Catalog[]>{
    return this.catalogRepository.find({ where: { year, month }});
  }

  create(createCatalogDto: CreateCatalogDto): Promise<Catalog>{
    const catalog = this.catalogRepository.create(createCatalogDto);
    return this.catalogRepository.save(catalog);
  }

  update(id: number, updateCatalogDto: UpdateCatalogDto): Promise<Catalog>{
    return this.catalogRepository.save({ id, ...updateCatalogDto });
  }

  delete(id: number): Promise<void>{
    return this.catalogRepository.delete(id).then();
  }
}
