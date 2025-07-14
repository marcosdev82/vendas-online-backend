import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './intreface/user.interface';

@Injectable()
export class UserService {

    private users: User[] = [];
    async createUser(createUser: CreateUserDto): Promise<User> {
        return {
            ...createUser,
            id: 1,
        }
    };

}
