import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Subject from "./Subject";

@Entity('terms')
export default class Term {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @OneToMany(() => Subject, subjects => subjects.term)
    subject: Subject[];
}