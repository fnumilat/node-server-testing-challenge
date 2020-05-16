const supertest = require("supertest")
const server = require("../server")
const db = require("../data/config")

beforeEach(async () => {
    await db.seed.run()
})

afterAll(async () => {
    await db.destroy()
})



describe("testing the endpoints", () => {
    test("Get /", async () => {
        const endpoint  = "/"
        const status = 200

        const res = await supertest(server).get(endpoint)
        // console.log(res)
        
        expect(res.statusCode).toBe(status)
        expect(res.body.message).toBe("Welcome to our API!")
    })

    test("Get /api/projects/", async () => {
        const endpoint  = "/api/projects/"
        const status = 200

        const res = await supertest(server).get(endpoint)
        
        expect(res.statusCode).toBe(status)
        expect(res.type).toBe("application/json")
        expect(res.body[1].name).toBe("Paint the restroom walls")
        // expect(res.body).toHaveLength(2)
    })

    test("Post /api/projects/", async () => {
        const endpoint  = "/api/projects/"
        const status = 500

        const res = await supertest(server).post(endpoint)
        
        expect(res.statusCode).toBe(status)
        expect(res.body.message).toMatch(/Failed/i)
    })

    test("Put /api/projects/:id", async () => {
        const endpoint  = "/api/projects/:id"
        const status = 404

        const res = await supertest(server).put(endpoint)
        
        expect(res.statusCode).toBe(status)
        expect(res.body.message).toBe("Could not find the project with given id")
    })

    test("Delete /api/projects/:id", async () => {
        const endpoint  = "/api/projects/:id"
        const status = 404

        const res = await supertest(server).delete(endpoint)
        
        expect(res.statusCode).toBe(status)
        expect(res.body.message).toMatch(/project/i)
    })
})