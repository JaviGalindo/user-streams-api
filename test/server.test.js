const request = require("supertest");
const app = require("../src/app");

const successfulScenarios = [
    {
        "userId": 1,
        "numStreams": 1
    },
    {
        "userId": 2,
        "numStreams": 2
    }
];

const errorScenarios = [
    {
        "userId": 3,
        "code": 403,
        "message": "This user has already 3 concurrent streamings"
    }
];
describe("Tests --> get number of streams by UserId", () => {
    describe("Successful scenarios -->", () => {
        successfulScenarios.forEach(scenario => {
            it(`should succeed and return num:${scenario.numStreams} if userId is ${scenario.userId}`, async () => {
                const res = await request(app)
                .get(`/streams/${scenario.userId}`);
                expect(res.statusCode).toEqual(200);
                expect(res.body).toEqual({"numStreams": scenario.numStreams});
            });
        });
    });
    describe("Error scenarios -->", () => {
        errorScenarios.forEach(scenario => {
            it(`should fail and return  ${scenario.code}:${scenario.message} if userId is ${scenario.userId} because it has already 3 concurrent streamings`, async () => {
                const res = await request(app)
                .get(`/streams/${scenario.userId}`);
                expect(res.statusCode).toEqual(403);
                expect(res.body).toEqual({"message": scenario.numStreams});
            });
        });
    });
});