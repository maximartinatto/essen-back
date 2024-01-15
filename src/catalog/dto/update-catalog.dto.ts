import { PartialType } from '@nestjs/mapped-types';
import { CreateCatalogDto } from './create-catalog.dto';

export class UpdateCatalogDto extends PartialType(CreateCatalogDto) {
    readonly year?: number;
    readonly month?: string;
}
