import app, { init } from "../../src/app";
import { getConnection, getRepository } from "typeorm";
import supertest from "supertest";
import Subject from "../../src/entities/Subject";

beforeAll(async () => {
    await init();
});

afterAll(async () => {
    await getConnection().close();
});

describe("GET /subjects", () => {
    it("should return list of subjects and status 200", async () => {
        const result = await supertest(app).get("/subjects");
        const subjectType = await getRepository(Subject).create();
        subjectType.id = expect.any(Number);
        subjectType.name = expect.any(String);
        subjectType.exams = expect.any(Array);
        subjectType.term = expect.any(Object);
        subjectType.professors = expect.any(Object);
        expect(result.body).toEqual(expect.arrayContaining([expect.objectContaining(subjectType)]));
        expect(result.status).toBe(200);
    });
});

describe("GET /subject/:id", () => {
    it("should return status 400 for NaN id", async () => {
        const result = await supertest(app).get("/subject/a");
        expect(result.status).toEqual(400);
    });
    it("should return status 404 for inexistent id", async () => {
        const result = await supertest(app).get("/subject/-1");
        expect(result.status).toEqual(404);
    });
    it("should return a subject object for valid id", async () => {
        const subject = await getRepository(Subject).findOne({ relations: ['exams'] });
        const id = subject.id;
        const result = await supertest(app).get(`/subject/${id}`);
        expect(result.body).toEqual(subject);
    });
});