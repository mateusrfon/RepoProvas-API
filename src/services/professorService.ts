import { getRepository } from "typeorm";
import Professor from "../entities/Professor";

export async function findAll() {
    try {
        return await getRepository(Professor).find({ relations: ['exams'] });
    } catch(error) {
        console.error(error);
    }    
}