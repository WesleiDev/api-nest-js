import { Body, Controller, Get, Post, Response } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/user.model';
import { Repository } from 'typeorm';

@Controller('users')
export class UserController {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  @Post()
  store(@Body() body: User): Promise<User> {
    const user = this.userRepo.create(body);
    return this.userRepo.save(user);
  }
}
