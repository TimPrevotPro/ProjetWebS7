import {
  Controller,
  Request,
  Get,
  Put,
  UseGuards,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserEntity } from './entity/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('get/users')
  getAll() {
    return this.usersService.findAll();
  }

  @Put('add/user')
  async addUser(@Request() req) {
    await this.usersService.addOne(req.body);
  }

  @Get('get/user_id')
  async getUserId(@Query('email') mail, @Request() req): Promise<UserEntity> {
    return await this.usersService.getUserByMail(mail);
  }

  @Get('get/user')
  async getUser(@Request() req): Promise<UserEntity> {
    return await this.usersService.findOne(req.params);
  }
}
