import * as Skills from '../models/skills';
import logger from '../utils/logger';




/**
 * create skillspage content
 * @param {} payload 
 */

export async function createSkillsPageContent(payload) {
    logger.info("Skills created successfully")
    const data=await Skills.create(payload);
    return {
        data,
        message:'Skills created successfully'
    }
  }

/**
 * get skills page content
 */
export async function getSkillsPageContent() {
    logger.info("Fetching  skills page content")
    const data=await Skills.getAll()
    return {
        data,
        message: 'Skills page content received',   
        }; 
    
    }
/**
 * get skills by Id
 * @param {*} skillsId 
 * @param {*} params 
 */

    export  async function getSkillsById(skillsId) {
    const [data] =await Skills.getById(skillsId);
    console.log(data)
  
    return {
      data,
      message: `Skills Id ${skillsId}`,
     
    };
  }


/**
 * update skills page content
 * @param {*} skillsId 
 * @param {*} params 
 */
export async function updateSkillsPageContent(skillsId,params) {
    // logger.error("reached")
    const data=await Skills.update(skillsId, params);
   
  
    return {
        data,
        message: `updated skills page with skills id ${skillsId}`,
       
      };
  }    
 
  
/**
 * Delete a skills page content
 * @param skillsId 
 */
export async function deleteSkillsPageContent(skillsId) {
    await Skills.remove(skillsId);
  
    return {
      message: "Deleted skills page content with skills id " + skillsId
    };
   }