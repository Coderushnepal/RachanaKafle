import * as Home from '../models/home';
import logger from '../utils/logger';

/**
 * create homepage content
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

/**
 * get homepage content
 */
export async function getHomePageContent() {
logger.info("Fetching  home page content")
const data=await Home.getAll()
return {
    data,
    message: 'Home page content received',   
    }; 

}

// export  async function getHomePageContentById(Id) {
//     const [data] =await Home.getById(Id);
  
//     return {
//       data,
//       message: `Information about HomeId ${Id}`,
     
//     };
//   }

/**
 * update homepage content
 * @param {*} homeId 
 * @param {*} params 
 */
export async function updateHome(homeId,params) {
    const data=await Home.update(homeId, params);
    console.log(data)

    return {
        data,
        message: `updated home with about id ${homeId}`,
       
      };
}

/**
 * Delete a homepage content
 * @param HomeId 
 */
export async function deleteHomePageContent(homeId) {
  await Home.remove(homeId);

  return {
    message: "Deleted homepage content with id " + homeId
  };
 }

