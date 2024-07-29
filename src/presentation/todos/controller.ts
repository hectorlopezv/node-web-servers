import { Response, Request } from "express";

export class TodosController {
    //DI
    constructor() {}
    public getTodos = (req: Request, res: Response) => {
        res.json({ message: "Hello World" });
    };

    public getTodyById = (req: Request, res: Response) => {
        const id = req.params.id;
        res.json({ message: `Hello World by id ${id}` });
    }
    public createTodo = (req: Request, res: Response) => {
        const body = req.body;
        res.json({ message: `Hello World by id ${body}` });
    }
    public deleteTodo = (req: Request, res: Response) => {
        const id = req.params.id;
        res.json({ message: `Hello World by id ${id}` });
    }

}