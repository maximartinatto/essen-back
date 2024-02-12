import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CatalogModule } from './catalog/catalog.module';
import { ClientModule } from './client/client.module';
import { UserModule } from './users/users.module';
import { SaleModule } from './sale/sale.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'essen',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ClientModule,
    ProductModule, 
    CatalogModule, 
    UserModule, 
    SaleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
