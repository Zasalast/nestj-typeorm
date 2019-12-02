import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../models/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
	constructor(@InjectRepository(UserEntity) private readonly UserRepository: Repository<UserEntity>) { }

	async createUser(data: CreateUserDto): Promise<UserEntity> {
		try {
			let user = new UserEntity();
			user.name = data.name;
			user.username = data.username;
			user.password = data.password;
			user.email = data.email;
		return	await this.UserRepository.save(user)
		} catch (error) {
			return error
		}		  
	}
}
