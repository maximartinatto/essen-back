import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';

@Entity()
export class Catalog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    year: number;

    @Column()
    month: string;

    @OneToMany(() => Product, (product) => product.catalog)
    products: Product[];
}
