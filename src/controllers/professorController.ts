import { Request, Response } from "express";
import * as professorService from "../services/professorService";

export async function getAll(req: Request, res: Response) {
    try {
        const professors = await professorService.findAll();
        res.send(professors);
    } catch(error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export async function getById(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id);
        if (!id) return res.sendStatus(400);
        res.sendStatus(200);
    } catch(error) {
        console.error(error);
        res.sendStatus(500);
    }
}