import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { ProductModule } from './product/product.module';
import { CatalogModule } from './catalog/catalog.module';
import { UserModule } from './user/user.module';
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
    AdminModule,
    ProductModule, 
    CatalogModule, 
    UserModule, 
    SaleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
