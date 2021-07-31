import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Exam from "./Exam";

@Entity('exam_categories')
export default class ExamCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @OneToMany(() => Exam, exams => exams.category)
    exams: Exam[];
}