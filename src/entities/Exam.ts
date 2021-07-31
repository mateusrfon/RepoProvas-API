import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

import ExamCategory from "./ExamCategory";
import Professor from "./Professor";
import Subject from "./Subject";

@Entity('exams')
export default class Exam {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    link: string;

    @ManyToOne(() => ExamCategory, (exam_categories) => exam_categories.exams)
    category: ExamCategory;

    @ManyToOne(() => Subject, (subjects) => subjects.exams)
    subject: Subject;

    @ManyToOne(() => Professor, (professors) => professors.exams)
    professor: Professor;
}