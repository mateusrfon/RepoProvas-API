import {MigrationInterface, QueryRunner} from "typeorm";

export class linkProfessorsToSubjects1627689458487 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const professors = await queryRunner.query(`
            SELECT * FROM professors
        `);
        const subjects = await queryRunner.query(`
            SELECT * FROM subjects
        `);
        await queryRunner.query(`
            INSERT INTO "subjects_professors_professors" ("subjectsId", "professorsId") VALUES 
            (${subjects[0].id}, ${professors[0].id}), 
            (${subjects[1].id}, ${professors[1].id}), 
            (${subjects[2].id}, ${professors[2].id}), 
            (${subjects[3].id}, ${professors[3].id})
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
