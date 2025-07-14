import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './intreface/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {

    private users: User[] = [];
    async createUser(CreateUserDto: CreateUserDto): Promise<User> {

        const salOrRounds = 10;

        const passwordHashed = await hash(CreateUserDto.password, salOrRounds)

        const user: User = {
            ...CreateUserDto,
            id: this.users.length + 1,
            password: passwordHashed,
        }

        this.users.push(user);
        return user;
    };

}
