import {MigrationInterface, QueryRunner} from "typeorm";

export class addProfessorsAndSubjects1627687626530 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO professors (name) VALUES 
            ('Mateus Fonseca'), 
            ('Pedro Gomes'), 
            ('Ana Carla'), 
            ('Devi Ribeiro')
        `);
        const terms = await queryRunner.query(`
            SELECT * FROM terms
        `);
        await queryRunner.query(`
            INSERT INTO subjects (name, "termId") VALUES 
            ('Cálculo A', ${terms[0].id}), 
            ('Cálculo B', ${terms[1].id}), 
            ('Cálculo C', ${terms[2].id}), 
            ('Cálculo D', ${terms[3].id})
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
