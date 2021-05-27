import { UsersService } from './users/users.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private userService: UsersService) {}

  async getHello() {
    this.userService.getUser();
    this.getWow();
    return process.env.SECRET;
  }

  getWow() {}
}
