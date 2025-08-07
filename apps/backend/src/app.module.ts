import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { TodoModule } from './todo/todo.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [DbModule, TodoModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
