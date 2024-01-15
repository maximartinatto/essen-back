import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Sale } from "src/sale/entities/sale.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @OneToMany(() => Sale, (sale) => sale.user)
    sales: Sale[];
}
