import { Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common'
import { User } from './entities/user.entity' 
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    findAll(): Promise<User[]>{
      return this.userService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number): Promise<User | undefined> {
      return this.userService.findOne(id);
    }
  
    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
      return this.userService.create(createUserDto);
    }
  
    @Patch(':id')
    update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): Promise<User> {
      return this.userService.update(id, updateUserDto);
    }
  
    @Delete(':id')
    delete(@Param('id') id: number): Promise<void> {
      return this.userService.delete(id);
    }
}