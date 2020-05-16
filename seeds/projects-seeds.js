
exports.seed = async function(knex) {
  await knex("projects").insert([
    {name: "Front offices lights", description: "Renew the front offices lights."},
    {name: "Paint the restroom walls", description: "Repaint all the restroom walls in the plant by January first."}
  ])
};
