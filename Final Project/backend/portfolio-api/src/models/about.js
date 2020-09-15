import snakeize from 'snakeize';
import camelize from 'camelize';
import connection from '../connection';

const TABLE ='about';

export async function create(payload) {
    const [result]=await connection.insert(snakeize(payload)).
    into(TABLE).returning('*');  
    return camelize(result) 
 }

// export async function getAll() {

// }