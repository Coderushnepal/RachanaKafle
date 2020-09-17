import * as comments from '../models/comments';
import logger from '../utils/logger';




/**
 * create  omment 
 * @param {} payload 
 */

export async function createComment(payload) {
    logger.info("Comment  created successfully")
    const data=await comments.create(payload);
    return {
        data,
        message:'Comment created successfully'
    }
  }

/**
 * get comment
 */
export async function getComments() {
    logger.info("Fetching  all comments")
    const data=await comments.getAll()
    return {
        data,
        message: 'Comment received',   
        }; 
    
    }
  
/**
 * get comment by Id
 * @param {*} commentId 
 * @param {*} params 
 */

export  async function getCommentById(commentId) {
  const data =await comments.getById(commentId);
  console.log(data)

  return {
    data,
    message: `comment Id ${commentId}`,
   
  };
}    

  
/**
 * Delete a comment 
 * @param commentId 
 */
export async function deleteComment(commentId) {
    await comments.remove(commentId);
  
    return {
      message: "Deleted comment with id " + commentId
    };
   }