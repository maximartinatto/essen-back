import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin } from './entities/admin.entity';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  findAll(): Promise<Admin[]>{
    return this.adminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Admin | undefined> {
    return this.adminService.findOne(id);
  }

  @Post()
  create(@Body() createAdminDto: CreateAdminDto): Promise<Admin> {
    return this.adminService.create(createAdminDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateAdminDto: UpdateAdminDto): Promise<Admin> {
    return this.adminService.update(id, updateAdminDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.adminService.delete(id);
  }
}
