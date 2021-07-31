import { QueryRunner} from "typeorm";

export async function truncate(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        TRUNCATE TABLE exams;
    `);
}

export async function examCategory(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO exam_categories (name) VALUES ('P1'), ('P2'), ('P3'), ('2ch'), ('Outras')
    `);
}

export async function terms(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO terms (name) VALUES ('1'), ('2'), ('3'), ('4'), ('5'), ('6'), ('7'), ('8')
    `);
}

export async function professors(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO professors (name) VALUES 
        ('Mateus Fonseca'), 
        ('Pedro Gomes'), 
        ('Ana Carla'), 
        ('Devi Ribeiro')
    `);
}

export async function subjects(queryRunner: QueryRunner): Promise<void> {
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

export async function relationProfessorsSubjects(queryRunner: QueryRunner): Promise<void> {
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