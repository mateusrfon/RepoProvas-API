import { Request, Response } from "express";
import * as subjectService from "../services/subjectService";

export async function getAll(req: Request, res: Response) {
    try {
        const subjects = await subjectService.findAll();
        res.send(subjects);
    } catch(error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export async function getById(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id);
        if (!id) return res.sendStatus(400);

        const subject = await subjectService.findById(id);
        if (subject === undefined) return res.sendStatus(404);

        res.send(subject);
    } catch(error) {
        console.error(error);
        res.sendStatus(500);
    }
}