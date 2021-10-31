import { Module } from '@nestjs/common';
import { UserEntity } from './entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [TypeOrmModule],
  controllers: [UsersController],
})
export class UsersModule {}
