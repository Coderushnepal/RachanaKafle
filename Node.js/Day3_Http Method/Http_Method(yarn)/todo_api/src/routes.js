import fs from 'fs';
import { Router } from 'express';
//  import {} from '../users.json'

import { GET_USERS, GET_USER_BY_ID, CREATE_USER, DELETE_USER, UPDATE_USER } from './constants/endpoints';

const router = Router();

// const usersJsonPath = './data/users.json';
const usersJsonPath = __dirname+'/data/users.json';

router.get('/', (request, response, next) => {  
  response.json({
    name: 'todo-api',
    version: '1.0.0'
  });
});

router.get(GET_USERS, (request, response, next) => {
  const usersJson = require(usersJsonPath);

  response.json(usersJson);
});

router.get(GET_USER_BY_ID, (request, response, next) => {
  const userId = +request.params.userId;

  const usersJson = require(usersJsonPath);

  const requestedUser = usersJson.find(user => user.id === userId);

  if(!requestedUser) {
    response.json({
      message: "Cannot find the user with id " + userId
    })
  }

  response.json(requestedUser);
});

//post
router.post(CREATE_USER, (request, response, next) => {
  const params = request.body;

  if(!params.firstName || !params.lastName || !params.phoneNumbers) {
    response.json({
      message: "Insufficient number of arguments supplied"
    });
  }

  if(!Array.isArray(params.phoneNumbers)) {
    response.json({
      message: "phoneNumbers should be an array"
    });
  }

  const usersJson = require(usersJsonPath);
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
  console.log(updatedJson)

  // fs.writeFileSync(usersJsonPath, JSON.stringify(updatedJson, null, 2));
  fs.writeFileSync(usersJsonPath, JSON.stringify(updatedJson, null, 2))
  

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

  fs.writeFile(usersJsonPath, JSON.stringify(updatedUsersList, null, 2));

  response.json({
    message: "Deleted user with id " + userId
  });
});


///PUT
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

  fs.writeFile(usersJsonPath, JSON.stringify(updatedJson, null, 2));

  response.json({
    message: "Updated user with id " + userId
  });
});

export default router;
