/**
 * Create 'blog' table/'
 * @param knex 
 * @returns {Promise}
 */


export function up(knex) {
    return knex.schema.createTable('blogs',table => {
    table.increments('id');
    table.string('title', 50).notNull();
    table.text('description');
    // table.string('description', 500).notNull();
    table.string('read_time',6)
    table.timestamp('published_on').defaultTo(knex.raw('now()'));
    table.string('image')
    });
}

// /**
//  * Drop table 'blogs'
//  * @param knex 
//  * @ returns {Promise}
//  */

export function down(knex) {
     return knex.schema.dropTable('blogs');
};