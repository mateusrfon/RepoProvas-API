import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}