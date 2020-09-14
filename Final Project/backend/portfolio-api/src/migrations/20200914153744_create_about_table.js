/**
 * Create 'about' table/'
 * @param knex 
 * @returns {Promise}
 */


export function up(knex) {
    return knex.schema.createTable('about',table => {
        table.increments('id');
        table.string('name',30).notNull();
        table.string('description',300)
        table.string('image')

    });
}

export function down(knex) {
     return knex.schema.dropTable('about');
};