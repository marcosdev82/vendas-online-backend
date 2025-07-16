import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './intreface/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {

    private users: UserEntity[] = [];
    async createUser(CreateUserDto: CreateUserDto): Promise<UserEntity> {

        const salOrRounds = 10;

        const passwordHashed = await hash(CreateUserDto.password, salOrRounds)

        const user: UserEntity = {
            ...CreateUserDto,
            id: this.users.length + 1,
            password: passwordHashed,
        }

        this.users.push(user);
        return user;
    }

    async getAllUser(): Promise<UserEntity[]> {
        return this.users;
    }
}
