import fs from 'fs';
import { Router } from 'express';
import * as userController from './controllers/user';
import * as todoController from "./controllers/todo";
import { validateUserCreation } from './schemas/user'
import * as endpoints from './constants/endpoints';


const router = Router();
// const usersJsonPath = __dirname+'/data/users.json';
// const usersJsonPath = './data/users.json';


router.post(endpoints.CREATE_USER, validateUserCreation, userController.createUser);
router.get(
    endpoints.GET_ALL_TODOS,
    todoController.getAllTodos
  );
  
  router.get(
    endpoints.GET_TODO_BY_ID,
    todoController.getTodoById
  );



export default router;

