import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { Catalog } from "src/catalog/entities/catalog.entity";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    category: string;

    @Column()
    diners: string;

    @Column()
    capacitance: number;

    @Column()
    diameter: number;

    @Column()
    code: number;

    @ManyToMany(() => Catalog, (catalog) => catalog.products)
    @JoinTable()
    catalog: Catalog[]
}
