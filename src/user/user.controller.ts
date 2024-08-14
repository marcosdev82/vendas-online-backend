import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.tdo';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUser: CreateUserDto) {
    return {
      ...createUser,
      password: undefined,
    };
  }
}
