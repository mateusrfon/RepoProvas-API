import "./setup";
import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as sendController from "./controllers/sendController";
import * as professorController from "./controllers/professorController";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send", sendController.postExam);
app.get("/professors", professorController.getAll);
app.get("/professor/:id", professorController.getById);

export default app;
export async function init() {
    await connectDatabase();
}