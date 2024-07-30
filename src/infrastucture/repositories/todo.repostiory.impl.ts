import { TodoDatasource } from "../../domain/datasources/todo.datasource";
import { CreateTodoDto } from "../../domain/dtos/todos/create-todo.dto";
import { TodoEntity } from "../../domain/entities/todo.entity";
import { TodoRepository } from "../../domain/repositories/todo.repository";


export class TodoRepositoryImpl implements TodoRepository {
    constructor(private readonly todoDataSource: TodoDatasource) {}
    create(createTodoDtop: CreateTodoDto): Promise<TodoEntity> {
        return this.todoDataSource.create(createTodoDtop);
    }
    getAll(): Promise<TodoEntity[]> {
        return this.todoDataSource.getAll();
    }
    findById(id: number): Promise<TodoEntity> {
        return this.todoDataSource.findById(id);
    }
    updateById(id: number, todo: TodoEntity): Promise<TodoEntity> {
        return this.todoDataSource.updateById(id, todo);
    }
    deleteById(id: number): Promise<TodoEntity> {
        return this.todoDataSource.deleteById(id);
    }
    
}