
exports.up = async function(knex) {
  await knex.schema.createTable("projects", (table) => {
      table.increments("id")
      table.string("name").notNull()
      table.string("description").notNull()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("projects")
};
