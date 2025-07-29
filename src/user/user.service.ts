import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './intreface/user.entity';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {
        
    }

    async createUser(CreateUserDto: CreateUserDto): Promise<UserEntity> {

        const salOrRounds = 10;

        const passwordHashed = await hash(CreateUserDto.password, salOrRounds)

        return this.userRepository.save({
            ...CreateUserDto,
            password: passwordHashed,
        });
    }

    async getAllUser(): Promise<UserEntity[]> {
        return this.userRepository.find();
    }
}
