import * as aboutService from '../services/home'

/**
 * Controller to home page table.
 * 
 * @param req
 * @param res 
 * 
 */
export function createAbout(req, res, next) {
  aboutService
  .create(req.body)
  .then(data =>res.json(data))
  .catch(err => next(err))
}