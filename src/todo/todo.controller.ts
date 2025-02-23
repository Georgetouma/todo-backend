import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Patch,
    Delete,
    UseGuards,
    Request, // Add this
  } from '@nestjs/common';
  import { TodoService } from './todo.service';
  import { AuthGuard } from '@nestjs/passport';
  import { Prisma } from '@prisma/client'; // For type safety
  
  @Controller('todo')
  @UseGuards(AuthGuard('jwt'))
  export class TodoController {
    constructor(private todoService: TodoService) {}
  
    @Post()
    createTodo(
      @Request() req, 
      @Body('description') description: string,
      @Body('priority') priority: number,
      @Body('date') date: Date,
    ) {
      const userId = req.user.sub; 
      return this.todoService.createTodo(userId, description, priority, date);
    }
  
    @Get()
    getTodos(@Request() req) {
      const userId = req.user.sub;
      return this.todoService.getTodos(userId);
    }
  
    @Patch(':id')
    updateTodo(
      @Param('id') id: number,
      @Request() req,
      @Body() data: Prisma.TodoUpdateInput, // Use Prisma type
    ) {
      const userId = req.user.sub;
      return this.todoService.updateTodo(id, userId, data);
    }
  
    @Delete(':id')
    deleteTodo(@Param('id') id: number, @Request() req) {
      const userId = req.user.sub;
      return this.todoService.deleteTodo(id, userId);
    }
  }