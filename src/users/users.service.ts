import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) { }

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    findOne(id: number): Promise<User | undefined> {
        return this.userRepository.findOneBy({ id });
    }

    findOneByName(username: string): Promise<User | undefined>{
        return this.userRepository.findOneBy({ username });
    }

    create(createUserDto: CreateUserDto) {
        return this.userRepository.save(createUserDto)
    }

    findOneByEmail(email: string) {
        return this.userRepository.findOneBy({ email })
    }

    findByEmailWithPassword(email: string) {
        return this.userRepository.findOne({
            where: { email },
            select: ['id', 'username', 'email', 'password', 'rol']
        })
    }

    update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
        return this.userRepository.save({ id, ...updateUserDto });
    }

    delete(id: number): Promise<void> {
        return this.userRepository.delete(id).then();
    }
}