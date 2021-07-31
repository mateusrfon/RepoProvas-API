import { Request, Response } from "express";
import Exam from "../entities/Exam";

import * as examService from "../services/sendService";

export async function postExam(req: Request, res: Response) {
    try {
        const body = req.body as Exam;
        const { name, link, category, subject, professor } = body;
        if (!name || !link || !category.id || !subject.id || !professor.id) return res.sendStatus(400);
        
        await examService.createExam(body);

        res.sendStatus(200);
    } catch(error) {
        console.error(error);
        res.sendStatus(500);
    }
}