/**
 * create login table
 * @param {*} knex 
 */

export function up(knex) {
    return knex.schema.createTable('login',table => {
        table.increments('id');
        table.string('email',200).notNull().unique()
        table.string('password',200).notNull()

    });
}
/**
 * droplogin table
 * @param {*} knex 
 */
export function down(knex) {
     return knex.schema.dropTable('login');
};