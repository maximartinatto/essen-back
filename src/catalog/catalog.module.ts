import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Catalog } from './entities/catalog.entity';
import { CatalogService } from './catalog.service';
import { CatalogController } from './catalog.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Catalog])],
  controllers: [CatalogController],
  providers: [CatalogService],
})
export class CatalogModule {}
