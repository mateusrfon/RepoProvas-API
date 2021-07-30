import {MigrationInterface, QueryRunner} from "typeorm";

export class createDatabase1627686501034 implements MigrationInterface {
    name = 'createDatabase1627686501034'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "exam_categories" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_6e13421069d2ac913c806a19884" UNIQUE ("name"), CONSTRAINT "PK_6b4d996a1ce1e4809b7696ce068" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "professors" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_6b249c6363a154820c909c45e27" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "terms" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_79b56b84207dc3c5510bb093d3d" UNIQUE ("name"), CONSTRAINT "PK_33b6fe77d6ace7ff43cc8a65958" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subjects" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "termId" integer, CONSTRAINT "UQ_47a287fe64bd0e1027e603c335c" UNIQUE ("name"), CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exams" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "link" character varying NOT NULL, "categoryId" integer, "subjectId" integer, "professorId" integer, CONSTRAINT "PK_b43159ee3efa440952794b4f53e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subjects_professors_professors" ("subjectsId" integer NOT NULL, "professorsId" integer NOT NULL, CONSTRAINT "PK_f1e47bc92aa2417b9cb92deba7a" PRIMARY KEY ("subjectsId", "professorsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e34e39105e2fb3d152831bd174" ON "subjects_professors_professors" ("subjectsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a951cc9c4c6c77d1c7de8ae883" ON "subjects_professors_professors" ("professorsId") `);
        await queryRunner.query(`ALTER TABLE "subjects" ADD CONSTRAINT "FK_c30a2867f3d9917aee56d2ef14d" FOREIGN KEY ("termId") REFERENCES "terms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_a4b572eed2e7293985b93a55eb3" FOREIGN KEY ("categoryId") REFERENCES "exam_categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_1dc4dcc3e975e1378e9d235cd1c" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_bcfdfcbfb5fe82b98eb79ac5818" FOREIGN KEY ("professorId") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subjects_professors_professors" ADD CONSTRAINT "FK_e34e39105e2fb3d152831bd1742" FOREIGN KEY ("subjectsId") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "subjects_professors_professors" ADD CONSTRAINT "FK_a951cc9c4c6c77d1c7de8ae8836" FOREIGN KEY ("professorsId") REFERENCES "professors"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        //
        await queryRunner.query(`INSERT INTO exam_categories (name) VALUES ('P1'), ('P2'), ('P3'), ('2ch'), ('Outras')`);
        await queryRunner.query(`INSERT INTO terms (name) VALUES ('1'), ('2'), ('3'), ('4'), ('5'), ('6'), ('7'), ('8')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects_professors_professors" DROP CONSTRAINT "FK_a951cc9c4c6c77d1c7de8ae8836"`);
        await queryRunner.query(`ALTER TABLE "subjects_professors_professors" DROP CONSTRAINT "FK_e34e39105e2fb3d152831bd1742"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_bcfdfcbfb5fe82b98eb79ac5818"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_1dc4dcc3e975e1378e9d235cd1c"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_a4b572eed2e7293985b93a55eb3"`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP CONSTRAINT "FK_c30a2867f3d9917aee56d2ef14d"`);
        await queryRunner.query(`DROP INDEX "IDX_a951cc9c4c6c77d1c7de8ae883"`);
        await queryRunner.query(`DROP INDEX "IDX_e34e39105e2fb3d152831bd174"`);
        await queryRunner.query(`DROP TABLE "subjects_professors_professors"`);
        await queryRunner.query(`DROP TABLE "exams"`);
        await queryRunner.query(`DROP TABLE "subjects"`);
        await queryRunner.query(`DROP TABLE "terms"`);
        await queryRunner.query(`DROP TABLE "professors"`);
        await queryRunner.query(`DROP TABLE "exam_categories"`);
    }

}
