import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  index(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  show(@Param('id') id: string): Promise<User> {
    return this.usersService.showById(Number(id));
  }

  @Post()
  create(@Body() createUserDto: UserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }
}
