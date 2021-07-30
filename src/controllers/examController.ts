import { Request, Response } from "express";

interface newExam {
    name: string;
    category_id: number;
    subject_id: number;
    professor_id: number;
    link: string;
}

export async function newExam(req: Request, res: Response) {
    try {

    } catch(error) {
        console.error(error);
        res.sendStatus(500);
    }
}