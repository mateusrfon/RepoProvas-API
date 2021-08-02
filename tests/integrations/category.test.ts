import app, { init } from "../../src/app";
import { getConnection, getRepository } from "typeorm";
import supertest from "supertest";
import ExamCategory from "../../src/entities/ExamCategory";

beforeAll(async () => {
    await init();
});

afterAll(async () => {
    await getConnection().close();
})

describe("POST /exam", () => {
    it("should return list of categories and status 200", async () => {
        const result = await supertest(app).get("/categories");
        const categoryType = await getRepository(ExamCategory).create();
        categoryType.id = expect.any(Number);
        categoryType.name = expect.any(String);
        expect(result.body).toEqual(expect.arrayContaining([expect.objectContaining(categoryType)]));
        expect(result.status).toBe(200);
    });
});