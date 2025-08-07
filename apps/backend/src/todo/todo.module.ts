import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { TodoService } from './todo.service';
import { TodoRouter } from './todo.router';

@Module({
  imports: [DbModule],
  providers: [TodoService, TodoRouter],
})
export class TodoModule {}
