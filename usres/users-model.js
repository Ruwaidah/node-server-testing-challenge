const db = require("../db-config");

module.exports = {
  getAll,
  getById,
  addUser,
  updateUser,
  removeUser
};

function getAll() {
  return db("users");
}

function getById(id) {
  return db("users")
    .where({ id })
    .first();
}

async function addUser(user) {
  const [id] = await db("users").insert(user, "id");
  return db("users")
    .where({ id })
    .first();
}

function updateUser(user, id) {
  return db("users")
    .where({ id })
    .update(user);
}
function removeUser(id) {
  return db("users")
    .where({ id })
    .del();
}
