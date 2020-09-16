import * as About from '../models/about';
import logger from '../utils/logger';




/**
 * create aboutpage content
 * @param {} payload 
 */

export async function createAboutPageContent(payload) {
    logger.info("About created successfully")
    const data=await About.create(payload);
    return {
        data,
        message:'About created successfully'
    }
  }


  /**
 * get aboutpage content
 */
export async function getAboutPageContent() {
logger.info("Fetching  about page content")
const data=await About.getAll()
// console.log(data)
return {
    data,
    message: 'About page content received',   
    }; 

}


/**
 * update aboutpage content
 * @param {*} AboutId 
 * @param {*} params 
 */
export async function updateAboutPageContent(aboutId,params) {
  // logger.error("reached")
  const data=await About.update(aboutId, params);
 

  return {
      data,
      message: `updated about page with about id ${aboutId}`,
     
    };
}
    
    /**
     * Delete a aboutpage content
     * @param aboutId 
     */
    export async function deleteAboutPageContent(aboutId) {
      await About.remove(aboutId);
    
      return {
        message: "Deleted aboutpage content with id " + aboutId
      };
     }
    