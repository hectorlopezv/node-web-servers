import { readFileSync } from "fs";
import http2 from "http2";

const server = http2.createSecureServer({
    key: readFileSync("/keys/server.key"),
    cert: readFileSync("/keys/server.crt"),
},
(req, res)=>{
    console.log(req.url);
    res.write("Hello World");
    res.end();
});
server.listen(8080, ()=>{
    console.log("Server is running on port 8080");
});