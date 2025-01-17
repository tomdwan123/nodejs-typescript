import express from "express";
import todosRoute from "./routes/todos";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(todosRoute);

app.listen({ port: 3000 });
