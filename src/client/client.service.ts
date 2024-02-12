import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ){}
  findAll(): Promise<Client[]>{
    return this.clientRepository.find();
  }

  findOne(id: number): Promise<Client | undefined>{
    return this.clientRepository.findOneBy({ id });
  }

  async create(createClientDto: CreateClientDto) {
    const newClient = this.clientRepository.create(createClientDto)
    return this.clientRepository.save(newClient)
  }

  update(id: number, updateClientDto: UpdateClientDto): Promise<Client>{
    return this.clientRepository.save({ id, ...updateClientDto });
  }

  delete(id: number): Promise<void>{
    return this.clientRepository.delete(id).then();
  }

}
