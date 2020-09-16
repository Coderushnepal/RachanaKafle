import * as Blogs from '../models/blogs';
import logger from '../utils/logger';




/**
 * create Blogs page content
 * @param {} payload 
 */

export async function createBlogs(payload) {
    logger.info("Blogs created successfully")
    const data=await Blogs.create(payload);
    return {
        data,
        message:'Blogs created successfully'
    }
  }

/**
 * get blogs
 */
export async function getBlogs() {
    logger.info("Fetching blogs")
    const data=await Blogs.getAll()
    return {
        data,
        message: 'Blogs received',   
        }; 
    
    }


/**
 * update Blog 
 * @param {*} blogId 
 * @param {*} params 
 */
export async function updateBlogs(blogsId,params) {
    // logger.error("reached")
    const data=await Blogs.update(blogsId, params);
   
  
    return {
        data,
        message: `updated blogs by id ${blogsId}`,
       
      };
  }    
 
  
/**
 * Delete blog
 * @param blogId
 */
export async function deleteBlogs(blogsId) {
    await Blogs.remove(blogsId);
  
    return {
      message: "Deleted blog with blog id " + blogsId
    };
   }