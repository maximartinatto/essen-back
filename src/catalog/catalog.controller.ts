import { Controller, Get } from '@nestjs/common';
import { CatalogService } from './catalog.service';

@Controller('catalogo')
export class CatalogController{
  constructor(private readonly catalogoService: CatalogService) {}
  
  @Get('actualizar')
  async actualizarCatalogoMensual(): Promise<string>{
    await this.catalogoService.actualizarCatalogoMensual();
    return 'Catalogo actualizado exitosamente';
  }
}