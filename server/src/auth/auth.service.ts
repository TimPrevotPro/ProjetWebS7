import { Injectable } from '@nestjs/common';
import bcrypt = require('bcrypt');
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(user_id: string, pwd: string): Promise<any> {
    const user = this.usersService.findOne(user_id);
    if (user && this.comparePwd(pwd, (await user).password)) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      password: user.password,
      sub: user.user_id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async comparePwd(password: string, hashedPwd: string) {
    const validPassword = await bcrypt.compare(password, hashedPwd);
  }
}
