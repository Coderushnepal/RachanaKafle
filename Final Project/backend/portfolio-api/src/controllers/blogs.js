import * as blogsPageService from '../services/blogs'

/**
 * Controller to  create blog.
 * 
 * @param req
 * @param res 
 * 
 */
export function createBlogs(req, res, next) {
  blogsPageService
  .createBlogs(req.body)
  .then(data =>res.json(data))
  .catch(err => next(err))
}

/**
 * Controller to get blogs.
 * 
 * @param req
 * @param res 
 * 
 */

export function getBlogs(req, res, next) {
    blogsPageService
    .getBlogs()
    .then(data =>res.json(data))
    .catch(err => next(err))
  }

    /**
* Controller to get blogs by Id
* 
* @param req 
* @param res 
* @param next 
*/
export function getBlogsById(req, res, next) {
  blogsPageService
  .getBlogsById(+req.params.blogsId)
  .then(data =>res.json(data))
  .catch(err => next(err))
  }

/*
 * Controller to update the blogs
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export function updateBlogs(req, res, next) {
    blogsPageService
    .updateBlogs(+req.params.blogsId,req.body)
    .then(data =>res.json(data))
    .catch(err => next(err))
  }

  /**
 * Controller to delete blogs
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export function deleteBlogs(req, res, next) {
    blogsPageService
    .deleteBlogs(+req.params.blogsId)
    .then(data =>res.json(data))
    .catch(err => next(err))
  }
  