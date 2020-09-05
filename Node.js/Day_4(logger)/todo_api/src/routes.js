import fs from 'fs';
import { Router } from 'express';
import {validateUserCreation} from './schemas/user'

import { GET_USERS, GET_USER_BY_ID, CREATE_USER, DELETE_USER, UPDATE_USER } from './constants/endpoints';
import logger from './utils/logger';

const router = Router();
const usersJsonPath = __dirname+'/data/users.json';
// const usersJsonPath = './data/users.json';

router.get('/', (request, response, next) => {  
  response.json({
    name: 'todo-api',
    version: '1.0.0'
  });
});

//GET
// router.get(GET_USERS,validateUserCreation, (request, response, next) => {
  router.get(GET_USERS, (request, response, next) => {
  const usersJson = require(usersJsonPath);
  logger.info("Fetching all users")

  response.json(usersJson);
});
//GET_USER_BY_ID
router.get(GET_USER_BY_ID, (request, response, next) => {
  const userId = +request.params.userId;
  // console.log(userId)
  logger.info(`fetching user information with id ${userId}`)

  const usersJson = require(usersJsonPath);

  const requestedUser = usersJson.find(user => user.id === userId);

  if(!requestedUser) {
    logger.error(`Fetching user information with id ${userId}`)
    response.json({
      message: "Cannot find the user with id " + userId
    })
  }

  response.json(requestedUser);
});

//post
router.post(CREATE_USER, validateUserCreation, (request, response, next) => {
  // console.log('Validating the request for users creation')

  const params = request.body;
  // console.log('Fetching the users data')

  const usersJson = require(usersJsonPath);
  // console.log('Adding entry to the database')

  const maxId = usersJson.reduce((acc, cur) => {
    return cur.id > acc ? cur.id : acc;
  }, 0);

  const updatedJson = [
    ...usersJson,
    {
      id: maxId + 1,
      ...params
    }
  ];

  fs.writeFileSync(usersJsonPath, JSON.stringify(updatedJson, null, 2));
  // console.log('preparing the response data');

  response.json({
    message: "New user added successfully",
    data: {
      id: maxId + 1,
      ...params
    }
  });
});

//DELETE
router.delete(DELETE_USER, (request, response, next) => {
  const userId = +request.params.userId;
  const usersJson = require(usersJsonPath);
  
  const doesUserExist = usersJson.find(user => user.id === userId);

  if(!doesUserExist) {
    response.json({
      message: "Cannot find user with id " + userId
    })
  }

  const updatedUsersList = usersJson.filter(user => user.id !== userId);

  fs.writeFileSync(usersJsonPath, JSON.stringify(updatedUsersList, null, 2));

  response.json({
    message: "Deleted user with id " + userId
  });
});
//UPDATE
router.put(UPDATE_USER, (request, response, next) => {
  const userId = +request.params.userId;
  const params = request.body;

  const usersJson = require(usersJsonPath);
  const updatedJson = usersJson.map(user => {
    if(user.id === userId) {
      return {
        ...user,
        ...params
      };
    }

    return user;
  });

  fs.writeFileSync(usersJsonPath, JSON.stringify(updatedJson, null, 2));

  response.json({
    message: "Updated user with id " + userId
  });
});

export default router;
