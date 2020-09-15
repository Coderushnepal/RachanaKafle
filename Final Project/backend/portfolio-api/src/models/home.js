import snakeize from 'snakeize';
import camelize from 'camelize';
import connection from '../connection';

const TABLE ='home';


export async function create(payload) {
    const [result]=await connection.insert(snakeize(payload)).
    into(TABLE).returning('*');  
    return camelize(result) ;
 }


 export async function getAll() {
    const result = await connection.select("*").from(TABLE)
    return camelize(result);
}

// export async function getById(id) {
//     const result = await connection.select("*").from(TABLE).where({ id })
//     return camelize(result);

// }

// export async function update(homeId) {

// }
// export async function remove(homeId) {
    
// }