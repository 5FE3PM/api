import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserDto } from './user.dto';

@Injectable()
export class UsersService {
  async create(userDto: UserDto): Promise<User> {
    const user = User.create(userDto);
    await user.save();
    // delete user's password for the response
    delete user.password;
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    let users = await User.find();
    users = users.map((user: User) => {
      delete user.password;
      return user;
    });
    return users;
  }

  async showById(id: number): Promise<User> {
    const user = await this.findById(id);
    delete user.password;
    return user;
  }

  async findById(id: number): Promise<User> {
    return await User.findOne(id);
  }
}
