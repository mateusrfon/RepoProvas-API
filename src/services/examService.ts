import { getRepository } from "typeorm";
import Exam from "../entities/Exam";

export async function createExam(params: Exam): Promise<void> {
    try {
        await getRepository(Exam).insert(params);
    } catch(error) {
        console.error(error);
    }
}