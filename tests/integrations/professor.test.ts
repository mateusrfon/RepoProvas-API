import app, { init } from "../../src/app";
import { getConnection, getRepository } from "typeorm";
import supertest from "supertest";
import Professor from "../../src/entities/Professor";

beforeAll(async () => {
    await init();
});

afterAll(async () => {
    await getConnection().close();
});

describe("GET /professors", () => {
    it("should return list of professors and status 200", async () => {
        const result = await supertest(app).get("/professors");
        const professorType = await getRepository(Professor).create();
        professorType.id = expect.any(Number);
        professorType.name = expect.any(String);
        professorType.exams = expect.any(Array);
        expect(result.body).toEqual(expect.arrayContaining([expect.objectContaining(professorType)]));
        expect(result.status).toBe(200);
    });
});

describe("GET /professor/:id", () => {
    it("should return status 400 for NaN id", async () => {
        const result = await supertest(app).get("/professor/a");
        expect(result.status).toEqual(400);
    });
    it("should return status 404 for inexistent id", async () => {
        const result = await supertest(app).get("/professor/-1");
        expect(result.status).toEqual(404);
    });
    it("should return a professor object for valid id", async () => {
        const professor = await getRepository(Professor).findOne({ relations: ['exams', 'exams.category', 'exams.subject'] });
        const id = professor.id;
        const result = await supertest(app).get(`/professor/${id}`);
        expect(result.body).toEqual(professor);
    });
});