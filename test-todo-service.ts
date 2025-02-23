import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { TodoService } from './src/todo/todo.service';

async function bootstrap() {
  console.log('Starting test script...');
  const app = await NestFactory.createApplicationContext(AppModule);
  const todoService = app.get(TodoService);

  console.log('Testing createTodo...');
  const newTodo = await todoService.createTodo(
    1,
    'Buy groceries',
    2,
    new Date(),
  );
  console.log('Created Todo:', newTodo);

  console.log('Testing getTodos...');
  const todos = await todoService.getTodos(1);
  console.log('Todos for User 1:', todos);

  console.log('Testing updateTodo...');
  const updatedTodo = await todoService.updateTodo(newTodo.id, 1, {
    completed: true,
  });
  console.log('Updated Todo:', updatedTodo);

  console.log('Testing deleteTodo...');
  const deletedTodo = await todoService.deleteTodo(newTodo.id, 1);
  console.log('Deleted Todo:', deletedTodo);

  await app.close();
  console.log('Test script completed.');
}

bootstrap().catch((err) => {
  console.error('Error during testing:', err);
  process.exit(1);
});
console.log('Starting test script...');
