// import User from '../models/User';

import * as User from "../models/User";
import logger from '../utils/logger';
import BadRequestError from "../utils/BadRequestError";


/**
 * create users
 * @param  params 
 */
export async function createUser(params) {
  const existingUser = await User.getUserByEmail(params.email);

  if (existingUser) {
    logger.error("There is already an existing user with this email");

    throw new BadRequestError(
      "There is already an existing user with this email"
    );
  }

  const userInsertData=  await User.create(params);

  return {
    data: userInsertData,
    message: "New user added successfully",
  };
}

export async function getUserByEmail(email) {
  const [data] = await connection.select("*").from(table).where({ email });

  return data ? camelize(data) : null;
}

