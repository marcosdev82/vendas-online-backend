import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.tdo';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  private users: User[] = [];

  async createUser(CreateUserDto: CreateUserDto): Promise<User> {
    return {
      ...CreateUserDto,
      id: 1,
    };
  }
}
