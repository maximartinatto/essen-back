import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Catalog } from "./entities/catalog.entity";

@Injectable()
export class CatalogService {
  constructor(
    @InjectRepository(Catalog)
    private readonly catalogoRepository: Repository<Catalog>
  ) {}

  async actualizarCatalogoMensual(): Promise<void>{
    // logica para actualizar el catalogo mensualmente
    const fechaActual = new Date();
    const nuevoMes = fechaActual.getMonth() + 1;
    const nuevoAño = fechaActual.getFullYear();

    // eliminar catalogos antiguos si es necesario
    await this.catalogoRepository.delete({month: nuevoMes, year: nuevoAño})
  }
}