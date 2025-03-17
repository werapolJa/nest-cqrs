import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UsersController } from './users.controller';
import { PrismaService } from '../prisma.service';
import { CreateUserHandler } from './commands/create-user.handler';
import { GetUsersHandler } from './queries/get-users.handler';

@Module({
  imports: [CqrsModule],
  controllers: [UsersController],
  providers: [PrismaService, CreateUserHandler, GetUsersHandler],
})
export class UsersModule {}