const request = require("supertest");
const app = require("../src/app");

const successfulScenarios = [
    {
        "userId": "3e4e6e36-cbd2-4da2-bc38-d530bc528c9d",
        "numStreams": 1
    },
    {
        "userId": "bf49d24e-7737-4b27-a353-90a450b24028",
        "numStreams": 2
    }
];

const errorScenarios = [
    {
        "userId": "2564be69-2df9-495f-b077-1e93789c59bc",
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