import { getRepository } from "typeorm";
import Professor from "../entities/Professor";

export async function findAll() {
    try {
        return await getRepository(Professor).find({ relations: ['exams'], order: { id: "ASC" } });
    } catch(error) {
        console.error(error);
    }    
}

export async function findById(id: number) {
    try {
        return await getRepository(Professor).findOne({ relations: ['exams'], where: { id } });
    } catch(error) {
        console.error(error);
    }   
}