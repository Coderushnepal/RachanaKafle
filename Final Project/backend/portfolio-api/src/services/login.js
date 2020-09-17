import * as Login from '../models/login';
import * as crypt from '../utils/crypt';
import logger from '../utils/logger';
import BadRequestError from '../utils/BadRequestError';
import { generateToken } from '../utils/jwt';





/**
 * create admin login credentials
 * @param {} payload 
 */

export async function createAdminLogin(payload) {
    logger.info("login credentials created successfully")
    const data=await Login.create({
      ...payload,
      password:crypt.hash(payload.password),
    });

    return {
        data,
        message:'login credentials created successfully'
    }
  }

/**
 * get admin login credentials
 */
export async function getAdminLogin() {
    logger.info("Fetching login credentilas")
    const data=await Login.getAll()
    return {
        data,
        message: 'Login credentials received',   
        }; 
    
    }


/**
 * update login credentials
 * @param {*} loginId 
 * @param {*} params 
 */
export async function updateAdminLogin(loginId,params) {
    const data=await Login.update(loginId, params);
   
  
    return {
        data,
        message: `Update admin login credentials`,
       
      };
  }    
 
  
/**
 * Delete a admin login credentials
 * @param loginId 
 */
export async function deleteAdminLogin(loginId) {
    await Login.remove(loginId);
  
    return {
      message: "Deleted admin login credentials"
    };
   }




export async function login(payload) {
  const { email, password } = payload;

  logger.info("Checking if the email is valid");

  const adminLogin=await Login.getByEmail(email)
  // console.log(isEmailValid)

  if (!adminLogin) {
    logger.error("Invalid credentials");

    throw new BadRequestError("Invalid credentials");
  }

  const isPasswordValid = crypt.compare(password, adminLogin.password);
  // console.log(isPasswordValid)

  if (!isPasswordValid) {
    logger.error("Invalid credentials");

    throw new BadRequestError("Invalid credentials");
  }

  const tokenPayload = {
    id: Login.id,
    email: Login.email,
  };

  const token = generateToken(tokenPayload);

  return {
    data: {
      ...tokenPayload,
      token,
    },
    message: "Logged in successfully",
  };
}