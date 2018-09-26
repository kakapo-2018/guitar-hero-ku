exports.up = function(knex, Promise) {
  return knex.schema.createTable("knexTable", table => {
    table.increments("id").primary() //the .primary is optional
    table.string("name")
    table.string("stringifiedThing")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("knexTable")
};