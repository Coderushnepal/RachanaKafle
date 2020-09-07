import connection from "../db";
import snakeize from 'snakeize';
import camelize from 'camelize';


const table = 'user_phone_number';

export async function add(params) {
  const insertData = snakeize(params);
  const [result] = await connection.batchInsert(table, insertData);

  return camelize(result);
}