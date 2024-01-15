import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./entities/product.entity";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne(id: number): Promise<Product | null> {
    return this.productRepository.findOneBy({ id });
  }

  create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    return this.productRepository.save({ id, ...updateProductDto });
  }

  delete(id: number): Promise<void> {
    return this.productRepository.delete(id).then();
  }
}