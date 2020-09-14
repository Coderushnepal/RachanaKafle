/**
 * Create 'home' table/'
 * @param knex 
 * @returns {Promise}
 */


export function up(knex) {
     return knex.schema.createTable('home',table => {
      table.increments('id');
      table.string('text','200')
      table.string('image')

    });
}

// /**
//  * Drop table 'home'
//  * @param knex 
//  * @ returns {Promise}
//  */


export function down(knex) {
   return knex.schema.dropTable('home')
}