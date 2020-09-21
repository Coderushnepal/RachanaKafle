import snakeize from 'snakeize';
import camelize from 'camelize';
import connection from '../connection';

const TABLE ='login';

/**
 * get email 
 * @param {*} email 
 */  
export async function getByEmail(email) {
    const [result] = await connection.select("*").from(TABLE).where({ email });
  
    return result ? camelize(result) : null;
  }
  

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
 * @param {*} loginId 
 * @param {*} params 
 */
export async function update(loginId,params) {
    return connection(TABLE).update(snakeize(params)).where(({id:loginId}));
  }

  /**
 * delete
 * @param {*} loginId 
 */
export async function remove(loginId) {
    return connection(TABLE)
      .delete()
      .where({id: loginId});
  }

