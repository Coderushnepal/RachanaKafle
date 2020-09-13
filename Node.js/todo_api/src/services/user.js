// import User from '../models/User';

import * as User from "../models/User";
import * as UserPhoneNumber from "../models/UserPhoneNumbers"
import logger from '../utils/logger';
import NotFoundError from '../utils/NotFoundError';
import usersJson from '../data/users.json';



/**
 * Get all users.
 */
export async function getAllUsers() {
    logger.info("Fetching all users")
    const users= await User.getAll();
    const data=users.map(user =>{
      const { phoneNumbers}=user;
      const hasEmptyPhoneNumber=Object.keys(phoneNumbers[0]).length===0;
      return {
        ...user,
        phoneNumbers:hasEmptyPhoneNumber ? []:phoneNumbers
      };
    })

   return {
      data,
      message: 'List of all users',   
      }; 
  }
    
/**
 * Get user by id
 *
 * @param userId 
 */
export  async function getUserById(userId) {
  const result =await verifyUserExistence(userId);
  const phoneNumbers =await UserPhoneNumber.getPhoneNumbersByUserId(userId);

  return {
    data:{
      ...result,
      phoneNumbers
    },
    message: `Information about userId ${userId}`,
   
  };
}

export async function createUser(params) {
  const { firstName, lastName, email, password, phoneNumbers } = params;
  const userInsertData = await User.create({
    firstName,
    lastName,
    email,
    password,
  });

  const insertDataForPhoneNumbers = phoneNumbers.map((phone) => ({
    userId: userInsertData.id,
    phoneNumber: phone.number,
    type: phone.type,
  }));

  console.log(insertDataForPhoneNumbers);

  const phoneNumberInsertedData = await UserPhoneNumber.add(
    insertDataForPhoneNumbers
  );

  // console.log(phoneNumberInsertedData);

  return {
    data: params,
    message: "New user added successfully",
  };
}



/**
 * Delete a user
 * @param userId 
 */
export async function deleteUser(userId) {
  await verifyUserExistence(userId)
  await User.remove(userId);

  return {
    message: "Deleted user with id " + userId
  };
 }


export async function updateUser(userId, params) {
  const result = await verifyUserExistence(userId);

  await User.update(userId, params);

  return {
    data: {
      ...result,
      ...params,
    },
    message: "Updated user with id" + userId,
  };
}



async function verifyUserExistence(userId) {
  logger.info(`Fetching user information with id ${userId}`);

  const result = await User.getById(userId);

  if(!result) {
  logger.error(`Cannot find the user with id ${userId}`);

  throw new NotFoundError(`Cannot find the user with id ${userId}`);
  }
  return result;

}
