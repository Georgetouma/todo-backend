import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Todo, Prisma } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async createTodo(
    userId: number,
    description: string,
    priority: number,
    date: Date,
  ): Promise<Todo> {
    return this.prisma.todo.create({
      data: { description, priority, date, userId },
    });
  }

  async getTodos(userId: number): Promise<Todo[]> {
    return this.prisma.todo.findMany({ where: { userId } });
  }

  async updateTodo(
    id: number,
    userId: number,
    data: Prisma.TodoUpdateInput, // Use Prisma's generated type
  ): Promise<Todo> {
    return this.prisma.todo.update({ where: { id, userId }, data });
  }

  async deleteTodo(id: number, userId: number): Promise<Todo> {
    return this.prisma.todo.delete({ where: { id, userId } });
  }
}