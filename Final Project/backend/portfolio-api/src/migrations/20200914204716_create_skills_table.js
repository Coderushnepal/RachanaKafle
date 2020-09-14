
/**
 * Create table 'skills'
 * @param knex 
 * @returns {Promise}
 */
export function up(knex) {
    return knex.schema.createTable('skills',table => {
    table.increments('id');
    table.string('name', 30).notNull();
    table.string("skill_logo").notNull();
        

    });
}

// /**
//  * Drop table 'skills'
//  * @param knex 
//  * @ returns {Promise}
//  */

export function down(knex) {
     return knex.schema.dropTable('skills');
};