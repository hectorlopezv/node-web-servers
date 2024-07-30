import { prisma } from "../../data/postgres";
import { TodoDatasource } from "../../domain/datasources/todo.datasource";
import { CreateTodoDto } from "../../domain/dtos/todos/create-todo.dto";
import { TodoEntity } from "../../domain/entities/todo.entity";

export class TodoDatasourceImpl implements TodoDatasource{
    async create(createTodoDtop: CreateTodoDto): Promise<TodoEntity> {
        const todo = await prisma.todo.create({data:{
            text: createTodoDtop.text
        }});
        return TodoEntity.fromObject(todo);
    }
    async getAll(): Promise<TodoEntity[]> {
        const todos  = await prisma.todo.findMany();
        return todos.map((todo)=> TodoEntity.fromObject(todo));
    }
    async findById(id: number): Promise<TodoEntity> {
        const todo = await prisma.todo.findUnique({where:{id}});
        if(!todo) throw new Error("Todo not found");
        return TodoEntity.fromObject(todo);   
    }
    async updateById(id: number, todo: TodoEntity): Promise<TodoEntity> {
        const newTodo = TodoEntity.fromObject(todo);
        const updatedTodo = await prisma.todo.update({where:{id}, data:newTodo});
        if(!updatedTodo) throw new Error("Todo not found");
        return TodoEntity.fromObject(updatedTodo);
    }
    async deleteById(id: number): Promise<TodoEntity> {
        const todo = await prisma.todo.delete({where:{id}});
        if(!todo) throw new Error("Todo not found");
        return TodoEntity.fromObject(todo);
    }
    
}