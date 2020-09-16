import snakeize from 'snakeize';
import camelize from 'camelize';
import connection from '../connection';

const TABLE ='contact';
/**
 * create
 * @param {*} payload 
 */
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
 * @param {*} contactId 
 * @param {*} params 
 */
export async function update(contactId,params) {
    return connection(TABLE).update(snakeize(params)).where(({id:contactId}));
  }

  /**
 * delete
 * @param {*} contactId 
 */
export async function remove(contactId) {
    return connection(TABLE)
      .delete()
      .where({id: contactId});
  }