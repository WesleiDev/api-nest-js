import { Body, Controller, Get, Param, Post, Response } from '@nestjs/common';
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

  @Get()
  async index(): Promise<User[]> {
    return this.userRepo.find();
  }

  @Get(':id')
  show(@Param() id: string): Promise<User> {
    return this.userRepo.findOneOrFail(id);
  }
}
