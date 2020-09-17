import * as commentPageService from '../services/comments'

/**
 * Controller to  create comment.
 * 
 * @param req
 * @param res 
 * 
 */
export function createComments(req, res, next) {
  commentPageService
  .createComment(req.body)
  .then(data =>res.json(data))
  .catch(err => next(err))
}

/**
 * Controller to get comment.
 * 
 * @param req
 * @param res 
 * 
 */

export function getComments(req, res, next) {
    commentPageService
    .getComments()
    .then(data =>res.json(data))
    .catch(err => next(err))
  }

  /**
* Controller to get comments by Id
* 
* @param req 
* @param res 
* @param next 
*/
export function getCommentById(req, res, next) {
  commentPageService
  .getCommentById(+req.params.commentId)
  .then(data =>res.json(data))
  .catch(err => next(err))
  }

  /**
 * Controller to delete comment
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export function deleteComments(req, res, next) {
    commentPageService
    .deleteComment(+req.params.commentId)
    .then(data =>res.json(data))
    .catch(err => next(err))
  }
  