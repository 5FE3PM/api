import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserDto } from './dto/user.dto';
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
  createUser(@Body() userDto: UserDto) {
    return this.usersService.create(userDto);
  }
}
