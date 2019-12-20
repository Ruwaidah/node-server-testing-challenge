exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { username: "rowValue1", password: "123" },
        { username: "rowValue2", password: "123" },
        { username: "rowValue3", password: "123" }
      ]);
    });
};
