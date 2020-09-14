/**
 * create table contact
 * @param knex 
 */

export function up(knex) {
    return knex.schema.createTable('contact',table => {
        table.increments('id');
        table.string('full_name',30).notNull();
        table.string('email',40).notNull()
        table.bigInteger("phone_number").notNull();
        table.string('message',200);
    });
}

/**
 * drop table contact 
 * @param knex 
 */
export function down(knex) {
     return knex.schema.dropTable('contact'); table.string('phone_number',10)
};