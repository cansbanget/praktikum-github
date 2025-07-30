const request = require("supertest");
const app = require("../app");

describe("App Root Endpoint", () => {
  it("GET / → should return 200 and a welcome message", async () => {
    const res = await request(app).get("/");

    expect(res.statusCode).toBe(200);

    // Untuk respon JSON
    if (res.headers["content-type"].includes("application/json")) {
      expect(res.body).toHaveProperty("message");
    }

    // Untuk respon teks biasa
    if (res.headers["content-type"].includes("text/html")) {
      expect(res.text.toLowerCase()).toMatch(/welcome|halo|hello/);
    }
  });
});
