const request = require("supertest")
const app = require("../index")
const {getAllOwnersFromDb} = require("../repositories/owners")
const {getAllReviewsFromDb} = require("../repositories/reviews")


jest.mock("../config/db.js", ()=>null)
jest.mock("../repositories/owners")
jest.mock("../repositories/reviews")

describe("GET /api/not-found", ()=>{
  it("responds with 404 status and not found message", async ()=>{
    const response = await request(app).get("/api/not-found")
  expect(response.status).toBe(404)
  expect(response.body).toStrictEqual("Not found")
    })
  })

// Testing OWNERS
  
  describe("GET /api/owners", ()=>{
    it("responds with status 200 and an empty array of owners", async ()=>{
      getAllOwnersFromDb.mockImplementation(()=> [])
      const response = await request(app).get("/api/owners")
      expect(response.status).toBe(200)
      expect(response.body).toStrictEqual({data: []})
    })
  })

// Testing REVIEWS
  describe("GET /api/reviews", ()=>{
    it("responds with status 200 and an empty array of reviews", async ()=>{
      getAllReviewsFromDb.mockImplementation(()=> [])
      const response = await request(app).get("/api/reviews")
      expect(response.status).toBe(200)
      expect(response.body).toStrictEqual({data: []})
    })
  })