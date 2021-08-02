import { Request, Response } from "express";

import * as categoriesService from "../services/categoriesService";

export async function get(req: Request, res: Response) {
    try {
        const categories = await categoriesService.findAll();
        res.send(categories);
    } catch(error) {
        console.error(error);
        res.sendStatus(500);
    }
}