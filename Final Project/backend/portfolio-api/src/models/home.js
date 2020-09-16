import snakeize from 'snakeize';
import camelize from 'camelize';
import connection from '../connection';

const TABLE ='home';

/**
 * create
 * @param {*} payload 
 */
export async function create(payload) {
    const [result]=await connection.insert(snakeize(payload)).
    into(TABLE).returning('*');  
    return camelize(result) ;
 }

/**
 * getAll
 */
 export async function getAll() {
    const result = await connection.select("*").from(TABLE)
    return camelize(result);
}
/**
 * getBYId
 * @param {*} id 
 */
export async function getById(id) {
    const result = await connection.select("*").from(TABLE).where({ id })
    return camelize(result);
}

/**
 * update
 * @param {*} HomeId 
 * @param {*} params 
 */

export async function update(HomeId,params) {
    return connection(TABLE).update(snakeize(params)).where(({id:HomeId}));
  }

/**
 * delete
 * @param {*} homeId 
 */
export async function remove(homeId) {
    return connection(TABLE)
      .delete()
      .where({id: homeId});
  }


//  export async function remove(userId) {
//     return connection(table)
//       .update({ is_active: false })
//       .where({id: userId});
//   }