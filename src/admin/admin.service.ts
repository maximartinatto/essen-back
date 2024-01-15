import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './entities/admin.entity';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
  ) {}

  findAll(): Promise<Admin[]> {
    return this.adminRepository.find();
  }

  findOne(id: number): Promise<Admin | undefined> {
    return this.adminRepository.findOneBy({ id });
  }

  create(createAdminDto: CreateAdminDto): Promise<Admin>{
    const admin = this.adminRepository.create(createAdminDto);
    return this.adminRepository.save(admin);
  }

  update(id: number, updateAdminDto: UpdateAdminDto): Promise<Admin>{
    return this.adminRepository.save({ id, ...updateAdminDto});
  }

  delete(id: number): Promise<void>{
    return this.adminRepository.delete(id).then();
  }
}
