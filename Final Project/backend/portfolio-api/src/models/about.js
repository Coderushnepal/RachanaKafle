import snakeize from 'snakeize';
import camelize from 'camelize';
import connection from '../connection';

const TABLE ='about';

export async function create(payload) {
    const [result]=await connection.insert(snakeize(payload)).
    into(TABLE).returning('*');  
    return camelize(result) 
 }

/**
 * getAll
 */
export async function getAll() {
    const result = await connection.select("*").from(TABLE)
    return camelize(result);
}


/**
 * update
 * @param {*} AboutId 
 * @param {*} params 
 */

export async function update(aboutId,params) {
    return connection(TABLE).update(snakeize(params)).where(({id:aboutId}));
  }

/**
 * delete
 * @param {*} homeId 
 */
export async function remove(aboutId) {
    return connection(TABLE)
      .delete()
      .where({id: aboutId});
  }
