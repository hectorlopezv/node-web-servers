import express, { Router } from "express";
interface ServerOptions{
    port: number;
    publicPath: string;
    routes: Router;
}
export class Server{
    private app = express();
    private readonly port: number;
    private readonly publicPath: string;
    private readonly routes: Router;
    constructor(options: ServerOptions){
        const { port, publicPath, routes } = options;
        this.port = port;
        this.publicPath = publicPath;
        this.routes = routes;
    }
    async start(){

        // Middlewares
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
        // Routes
        this.app.use(this.routes);

        // Public Folder

        this.app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    }
}