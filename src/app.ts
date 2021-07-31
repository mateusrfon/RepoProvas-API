import "./setup";
import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as sendController from "./controllers/sendController";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send", sendController.postExam);

export default app;
export async function init() {
    await connectDatabase();
}