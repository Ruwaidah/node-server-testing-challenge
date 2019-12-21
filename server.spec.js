const server = require("./server.js");
const request = require("supertest");

describe("GET /", () => {
  it("has process .env.DB_ENV as 'testing'", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  it("returns h2 tag", () => {
    return request(server)
      .get("/")
      .expect("<h2> Hello </h2>");
  });
});

describe("GET /users", () => {
  it("TESTING USERS ROUTER", () => {
    return request(server)
      .get("/users")
      .expect(200)
      .expect("Content-Type", /json/);
  });

  it("testing users delete request", () => {
    return request(server)
      .delete("/:id")
      .then(res => {
        expect(res.body).toMatchObject({});
      });
  });
  let user = { username: "ruwaidah", password: "123" };
  it("testing add new user::", () => {
    return request(server)
      .post("/users")
      .send(user)
      .expect(202, {
        id: 2,
        username: "ruwaidah",
        password: "123"
      });
  });
});
