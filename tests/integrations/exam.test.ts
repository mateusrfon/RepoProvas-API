import app, { init } from "../../src/app";
import { getConnection, getRepository } from "typeorm";
import supertest from "supertest";
import Exam from "../../src/entities/Exam";
import Subject from "../../src/entities/Subject";
import Term from "../../src/entities/Term";

beforeAll(async () => {
    await init();
});

beforeEach(async () => {
    await getRepository(Exam).clear();
})

afterAll(async () => {
    await getRepository(Exam).clear();
    await getConnection().close();
})

describe("POST /exam", () => {
    it("should return status 400 for missing params", async () => {
        const body = {
            "name": "string",
            "link": "string",
            "category": {  },
            "subject": { "id": 17 },
            "professor": { "id": 29 }
        }
        const result = await supertest(app).post("/exam").send(body);
        expect(result.status).toBe(400);
    });
    it("should return status 200 for valid exam", async () => {
        const terms = await getRepository(Term).find();
        const subjects = await getRepository(Subject).find({ relations: ['professors'] });
        const body = {
            "name": "Teste",
            "link": "TesteLink",
            "category": { "id": terms[0].id },
            "subject": { "id": subjects[0].id },
            "professor": { "id": subjects[0].professors[0].id }
        }
        const result = await supertest(app).post("/exam").send(body);
        expect(result.status).toBe(200);
    });
});