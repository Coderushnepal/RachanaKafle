//create table
export function up(knex) {
    return knex.schema.createTable("user_phone_number", (table) => {
      table.increments("id");
      table.integer("user_id").notNull().references("id").inTable("users");
      table.bigInteger("phone_number").notNull();
      table.string("type", 4).notNull();
    });
  }

  //drop above created table
  export function down(knex) {
    return knex.schema.dropTable("user_phone_number");
  }