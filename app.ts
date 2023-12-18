 import express from "express";
 import bodyParser, { BodyParser } from "body-parser";
 import  todosroutes from "./routes/todos";

const app=express();

app.use(bodyParser.json());

app.use(todosroutes);

app.listen(3000);