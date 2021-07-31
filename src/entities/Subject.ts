import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import Exam from "./Exam";
import Professor from "./Professor";
import Term from "./Term";

@Entity('subjects')
export default class Subject {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @OneToMany(() => Exam, exams => exams.subject)
    exams: Exam[];

    @ManyToOne(() => Term, terms => terms.subject)
    term: Term;

    @ManyToMany(() => Professor)
    @JoinTable()
    professors: Professor[];
}