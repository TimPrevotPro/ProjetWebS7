import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { getConnection, getRepository, Repository } from 'typeorm';
import 'reflect-metadata';
import { UsersModule } from './users.module';
const bcrypt = require('bcrypt');

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  findAll(): Promise<UserEntity[]> {
    console.log('calling usersRepository...');
    return this.usersRepository.find();
  }

  async findOne(user_id: string): Promise<UserEntity | undefined> {
    console.log('findOne...');
    const user = this.usersRepository.findOne(user_id);
    return user;
  }

  async getUserByMail(email: string): Promise<UserEntity> {
    const user = await getRepository(UserEntity)
      .createQueryBuilder('user')
      .where('user.email = :email', { email })
      .getOne();
    return user;
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return await UserEntity.find();
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async addOne(user: any): Promise<void> {
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(UserEntity)
      .values([
        {
          nom: await user.nom,
          prenom: await user.prenom,
          password: await this.hashIt(user.password),
          email: await user.email,
          admin: false,
        },
      ])
      .execute();
    console.log('User added');
  }

  async hashIt(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(6);
    const hashed = await bcrypt.hash(password, salt);
    return hashed;
  }
}
