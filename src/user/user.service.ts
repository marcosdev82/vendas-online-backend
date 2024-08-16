import { Get, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.tdo';
import { UserEntity } from './interfaces/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const saltOrRounds = 10;

    const passwordHash = await hash(createUserDto.password, saltOrRounds);

    const user: User = {
      ...createUserDto,
      id: this.users.length + 1,
      password: passwordHash,
    };

    this.users.push(user);

    return user;
  }

  @Get()
  async getAlUser(): Promise<User[]> {
    return this.users;
  }
}
