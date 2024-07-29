import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";

function main(){
    const server = new Server({
        routes: AppRoutes.routes,
        port: Number(process.env.PORT),
        publicPath: String(process.env.PUBLIC_PATH)
    });
    server.start();
}


(async ()=>{
    main();
})();