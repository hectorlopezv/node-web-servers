import { CreateTodoDto } from "../../dtos/todos/create-todo.dto";
import { UpdateTodoDto } from "../../dtos/todos/update-todo.dto";
import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";

export interface UpdateTodoDtoUseCase{
    execute(id: number, dto: UpdateTodoDto) : Promise<TodoEntity>
}

export class UpdateTodo implements UpdateTodoDtoUseCase{
    constructor(private readonly todoRepository: TodoRepository) {}
    async execute(id:number, dto: UpdateTodoDto): Promise<TodoEntity> {
        return this.todoRepository.updateById(id, TodoEntity.fromObject(dto));
    }
    
}