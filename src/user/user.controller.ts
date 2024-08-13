import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  async getAllUsers() {
    JSON.stringify({ test: 'abc' });
  }
}
