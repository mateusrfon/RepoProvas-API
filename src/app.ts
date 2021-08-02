import "./setup";
import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as examController from "./controllers/examController";
import * as professorController from "./controllers/professorController";
import * as subjectController from "./controllers/subjectController";
import * as categoriesController from "./controllers/categoriesController";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/categories", categoriesController.get)
app.post("/exam", examController.postExam);
app.get("/professors", professorController.getAll);
app.get("/professor/:id", professorController.getById);
app.get("/subjects", subjectController.getAll);
app.get("/subject/:id", subjectController.getById);

export default app;
export async function init() {
    await connectDatabase();
}