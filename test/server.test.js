const request = require("supertest");
const app = require("../src/app");

const successfulScenarios = [
    {
        "userId": "3e4e6e36-cbd2-4da2-bc38-d530bc528c9d",
        "numberStreams": 1
    },
    {
        "userId": "bf49d24e-7737-4b27-a353-90a450b24028",
        "numberStreams": 2
    }
];

const errorScenarios = [
    {
        "userId": "1",
        "code": 400,
        "message": "\"userId\" must be a valid GUID"
    },
    {
        "userId": "2564be69-2df9-495f-b077-1e93789c59bc",
        "code": 403,
        "message": "This user already has 3 concurrent streams"
    },
    {
        "userId": "2564be69-2df9-495f-b077-1e93789c59bd",
        "code": 404,
        "message": "User not found"
    }
];
describe("Tests --> get number of streams by UserId", () => {
    describe("Successful scenarios -->", () => {
        successfulScenarios.forEach(scenario => {
            const {userId, numberStreams} =scenario;

            it(`should succeed and return num:${numberStreams} if userId is ${userId}`, async () => {
                const res = await request(app)
                .get(`/streams/${userId}`);
                expect(res.statusCode).toEqual(200);
                expect(res.body).toEqual({"numberStreams": numberStreams});
            });
        });
    });
    describe("Error scenarios -->", () => {
        errorScenarios.forEach(scenario => {
            const {code, message, userId} =scenario;
            it(`should fail and return  ${code}:${message} if userId is ${userId} because it has already 3 concurrent streamings`, async () => {
                const res = await request(app)
                .get(`/streams/${userId}`);
                expect(res.statusCode).toEqual(code);
                expect(res.body).toEqual({"message": message, "errorCode": code});
            });
        });
    });
});