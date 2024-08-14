import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.tdo';
import { User } from './interfaces/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  private users: User[] = [];

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const saltOrRounds = 10;

    const passwordHash = await hash(createUserDto.password, saltOrRounds);

    console.log('passwordHashed', passwordHash);

    return {
      ...createUserDto,
      id: 1,
    };
  }
}
