import { Response, Request } from "express";
import { CreateTodoDto } from "../../domain/dtos/todos/create-todo.dto";
import { TodoRepository } from "../../domain/repositories/todo.repository";
import { CreateTodo } from "../../domain/usecases/todo/create-todo";

export class TodosController {
    //DI
    constructor(private readonly todoRepository: TodoRepository) {}
    public getTodos = async (req: Request, res: Response) => {
        const todos = await this.todoRepository.getAll();
        res.json(todos);
    };
    public updateTodo = async (req: Request, res: Response) => {
        const id = req.params.id;
        const body = req.body;
        const [error, updateTodoDto] = CreateTodoDto.create(req.body);
        if(error) return res.status(400).json({error});
        const todo = this.todoRepository.updateById(Number(id), updateTodoDto as any);
        res.json(todo);
    };
    public getTodyById = async (req: Request, res: Response) => {
        const id = req.params.id;
        const todo = await this.todoRepository.findById(Number(id));
        res.json(todo);
    }
    public  createTodo = async (req: Request, res: Response) => {
        const body = req.body;
        const [error, createTodoDtos] = CreateTodoDto.create(req.body);
        if(error) return res.status(400).json({error});
       // How it should be called with the useCases!
        new CreateTodo(this.todoRepository).execute(createTodoDtos as any)
        .then(todo => res.json(todo))
        .catch(err => res.status(400).json(err));
    }
    public deleteTodo = async (req: Request, res: Response) => {
        const id = req.params.id;
        const todo = await this.todoRepository.deleteById(Number(id));
        res.json(todo);
    }

}