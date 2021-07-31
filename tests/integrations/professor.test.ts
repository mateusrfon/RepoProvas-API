import app, { init } from "../../src/app";
import { getConnection, getRepository } from "typeorm";
import supertest from "supertest";
import Professor from "../../src/entities/Professor";

beforeAll(async () => {
    await init();
});

beforeEach(async () => {
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