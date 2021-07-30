import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import Exam from "./Exam";
import Term from "./Term";

@Entity('subjects')
export default class Subject {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @OneToMany(() => Exam, exams => exams.subject)
    exam: Exam[];

    @ManyToOne(() => Term, terms => terms.subject)
    term: Term;
}