const db = require("../db-config");
const Users = require("./users-model");

describe("users model", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("insert function", () => {
    it("inserts user into db checklength", async () => {
      let usersNumbers;
      usersNumbers = await db("users");
      expect(usersNumbers).toHaveLength(0);
      await Users.addUser({ username: "ruwaidah", password: "123" });
      usersNumbers = await db("users");
      expect(usersNumbers).toHaveLength(1);
    });

    it("inserts user into db", async () => {
      let user = await Users.addUser({ username: "Alfakhri", password: "123" });
      expect(user.username).toBe("Alfakhri");
    });
  });
});
