import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Sale } from "src/sale/entities/sale.entity";

@Entity({name: 'client'})
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    cardName: string;

    @Column()
    cardNumber: string;

    @Column()
    cardCode: number;

    @Column()
    dateCard: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @OneToMany(() => Sale, (sale) => sale.client)
    sales: Sale[];
}
