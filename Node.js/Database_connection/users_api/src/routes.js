import fs from 'fs';
import { Router } from 'express';
import * as userController from './controllers/user';
import {validateUserCreation} from './schemas/user'
import * as endpoints from './constants/endpoints';


const router = Router();
// const usersJsonPath = __dirname+'/data/users.json';
// const usersJsonPath = './data/users.json';


router.get(endpoints.GET_USERS,userController.getAllUsers);
router.get(endpoints.GET_USER_BY_ID, userController.getUserById);
router.post(endpoints.CREATE_USER, validateUserCreation, userController.createUser);
router.delete(endpoints.DELETE_USER, userController.deleteUser);
router.put(endpoints.UPDATE_USER,userController.updateUser);


export default router;

