import { getRepository } from "typeorm";
import ExamCategory from "../entities/ExamCategory";

export async function findAll() {
    try {
        return await getRepository(ExamCategory).find({ order: { id: "ASC" } });
    } catch(error) {
        console.error(error);
    }
}