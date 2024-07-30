import { CreateTodoDto } from "../dtos/todos/create-todo.dto";
import { TodoEntity } from "../entities/todo.entity";

export abstract class TodoRepository {
    abstract create( createTodoDtop: CreateTodoDto): Promise<TodoEntity>;
    abstract getAll(): Promise<TodoEntity[]>;
    abstract findById(id: number): Promise<TodoEntity>;
    abstract updateById(id: number, todo: TodoEntity): Promise<TodoEntity>;
    abstract deleteById(id: number): Promise<TodoEntity>;
}