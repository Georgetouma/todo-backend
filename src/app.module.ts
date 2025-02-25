// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { TodoModule } from './todo/todo.module';
import { PrismaModule } from './prisma/prisma.module'; 

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule, 
    AuthModule,
    TodoModule,
  ],
})
export class AppModule {}