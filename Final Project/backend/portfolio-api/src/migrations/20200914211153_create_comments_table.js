/**
 * create comment table
 * @param {*} knex 
 */

export function up(knex) {
    return knex.schema.createTable('comments',table => {
    table.increments('id');
    table.string('commented_by',50);
    table.string('comment',200)

    

    });
}
/**
 * drop comment table
 * @param {*} knex 
 */

export function down(knex) {
     return knex.schema.dropTable('comments');
};