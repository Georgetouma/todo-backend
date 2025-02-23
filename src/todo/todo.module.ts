
import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Use relative path

@Module({
  imports: [PrismaModule], // Import PrismaModule
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}