import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ){}
  findAll(): Promise<User[]>{
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User | undefined>{
    return this.userRepository.findOneBy({ id });
  }

  create(createUserDto: CreateUserDto): Promise<User>{
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<User>{
    return this.userRepository.save({ id, ...updateUserDto });
  }

  delete(id: number): Promise<void>{
    return this.userRepository.delete(id).then();
  }

}
