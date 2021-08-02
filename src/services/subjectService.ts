import { getRepository } from "typeorm";
import Subject from "../entities/Subject";

export async function findAll() {
    try {
        return await getRepository(Subject).find({ relations: ['exams', 'term', 'professors'], order: { id: "ASC" } });
    } catch(error) {
        console.error(error);
    }    
}

export async function findById(id: number) {
    try {
        return await getRepository(Subject).findOne({ relations: ['exams', 'exams.category'], where: { id } });
    } catch(error) {
        console.error(error);
    }   
}