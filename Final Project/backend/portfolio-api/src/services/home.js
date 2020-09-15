import * as Home from '../models/home';
import logger from '../utils/logger';

/**
 * create home
 * @param {} payload 
 */

export async function createHomePageContent(payload) {
    logger.info("Home created successfully")
    const data=await Home.create(payload);
    return {
        data,
        message:'Home created successfully'
    }
}

export async function getHomePageContent() {
logger.info("Fetching  home page content")
const data=await Home.getAll()

return {
    data,
    message: 'Home page content received',   
    }; 

}

// export async function getAllUsers() {
//     logger.info("Fetching all users")
//     const users= await User.getAll();
//     const data=users.map(user =>{
//       const { phoneNumbers}=user;
//       const hasEmptyPhoneNumber=Object.keys(phoneNumbers[0]).length===0;
//       return {
//         ...user,
//         phoneNumbers:hasEmptyPhoneNumber ? []:phoneNumbers
//       };
//     })

//    return {
//       data,
//       message: 'List of all users',   
//       }; 
//   }

export async function getHomeById(homeId) {


}


export async function updateHome(homeId,updateParams) {

}


export async function deleteHome(homeId) {

}