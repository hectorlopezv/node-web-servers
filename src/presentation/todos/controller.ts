import { Response, Request } from "express";
import { prisma } from "../../data/postgres";

export class TodosController {
    //DI
    constructor() {}
    public getTodos = (req: Request, res: Response) => {
        const todos = prisma.todo.findMany();
        res.json(todos);
    };

    public getTodyById = (req: Request, res: Response) => {
        const id = req.params.id;
        const todo = prisma.todo.findUnique({where:{id:Number(id)}});
        res.json(todo);
    }
     public  createTodo = async (req: Request, res: Response) => {
        const body = req.body;
        const todo = await prisma.todo.create({data:{
            id: body.id,
            text: body.text,
            completedAt: body.completedAt
        }})
        res.json(todo);
    }
    public deleteTodo = (req: Request, res: Response) => {
        const id = req.params.id;
        const todo = prisma.todo.delete({where:{id:Number(id)}});
        res.json(todo);
   
    }

}