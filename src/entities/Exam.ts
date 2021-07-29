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
    category_id: number; //foreign key

    @Column()
    subject_id: number; //foreign key

    @Column()
    professor_id: number; //foreign key

    @Column()
    link: string;

    @ManyToOne(() => ExamCategory, (exam_categories) => exam_categories.exam)
    category: ExamCategory;

    @ManyToOne(() => Subject, (subjects) => subjects.exam)
    subject: Subject;

    @ManyToOne(() => Professor, (professors) => professors.exam)
    professor: Professor;
}