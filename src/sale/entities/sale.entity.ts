import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "src/user/entities/user.entity";

@Entity()
export class Sale {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @ManyToOne(() => User, (user) => user.sales)
    user: User
}
