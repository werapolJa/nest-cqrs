import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './commands/create-user.command';
import { GetUsersQuery } from './queries/get-users.query';

@Controller('users')
export class UsersController {
  constructor(private commandBus: CommandBus, private queryBus: QueryBus) {}

  @Post()
  async createUser(@Body() body: { name: string; email: string }) {
    console.log(body);
    
    return this.commandBus.execute(new CreateUserCommand(body.name, body.email));
  }

  @Get()
  async getUsers() {
    return this.queryBus.execute(new GetUsersQuery());
  }
}