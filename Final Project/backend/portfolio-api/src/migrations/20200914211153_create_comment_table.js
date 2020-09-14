/**
 * create comment table
 * @param {*} knex 
 */

export function up(knex) {
    return knex.schema.createTable('comment',table => {
    table.increments('id');
    table.string('username',50);
    table.string('comment',200)

    

    });
}
/**
 * drop comment table
 * @param {*} knex 
 */

export function down(knex) {
     return knex.schema.dropTable('comment');
};