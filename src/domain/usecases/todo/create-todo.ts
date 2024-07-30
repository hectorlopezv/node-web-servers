import { CreateTodoDto } from "../../dtos/todos/create-todo.dto";
import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";

export interface CreateTodoDtoUseCase{
    execute(dto: CreateTodoDto) : Promise<TodoEntity>
}

export class CreateTodo implements CreateTodoDtoUseCase{
    constructor(private readonly todoRepository: TodoRepository) {}
    async execute(dto: CreateTodoDto): Promise<TodoEntity> {
        return this.todoRepository.create(dto);
    }
    
}